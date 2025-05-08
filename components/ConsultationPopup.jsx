import React, { useState } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { base } from "@/app/api/airtable";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ConsultationPopup({ setClose }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    classes: "",
    source: "Sclore - www.sclore.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const airtablePayload = [
      {
        fields: {
          firstName: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          class: formData.classes,
          URL: window.location.href,
        },
      },
    ];
    try {
      await base("counsellorForm").create(
        airtablePayload,
        function (err, records) {
          if (err) {
            console.error("Airtable Error:", err);
            alert("Airtable submission failed. Please try again.");
            return;
          }

          records.forEach(() => {
            console.log("Airtable submission successful!");
          });
        }
      );

      const emailResponse = await axios.post(
        "https://goedunodemailer.onrender.com/send-email",
        formData
      );

      // Submit to your LMS
      const lmsResponse = await axios.post(
        "https://digitalleadmanagement.vercel.app/api/add-lead",
        {
          name: formData.name,
          phoneNumber: formData.phone,
          url: window.location.href,
          source: "Goedu - Get Consultation Popup",
          email: formData.email,
          currentClass: formData.classes,
          date: new Date().toISOString(),
        }
      );

      if (emailResponse.status === 200 && lmsResponse.status === 200) {
        toast.success("Form Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          classes: "",
          source: "Sclore - www.sclore.com",
        });
      } else {
        alert("Email submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative md:flex   gap-5  md:items-center bg-white rounded-lg shadow-lg w-full max-w-[90vw] md:max-w-[80vw] ">
        <button
          onClick={setClose}
          className="absolute bg-background-button p-1 md:px-2 z-50 rounded-full  md:py-2 top-3 right-2 text-xl font-bold text-white "
        >
          <div className="flex justify-center items-center">
            <RxCross1 />
          </div>
        </button>

        <div className="w-[80vw] h-[539px] hidden md:block z-0 ">
          <Image
            src="/bookingformsclore.png"
            alt="School choice"
            width={1000}
            height={1000}
            className="w-[660px] h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-full z-50 md:w-[470px] h-full rounded-lg md:rounded-l-2xl md:p-8  md:absolute md:top-0 md:right-14 bg-white">
          <h3 className=" md:text-xl font-bold text-[#323232] pt-4 px-5 w-[85%]">
            Fill this form and get in touch with our counsellor
          </h3>
          <form onSubmit={handleSubmit} className="space-y-7 md:space-y-6 p-5">
            <input
              required
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded  sm:border-[#D9D9D9]"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded  sm:border-[#D9D9D9]"
            />
            <div className="flex">
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={handleChange}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  borderBottom: "1px solid #D9D9D9",
                }}
                buttonStyle={{
                  border: "1px solid #D9D9D9",
                }}
              />
            </div>

            <div className="flex md:gap-20 gap-8">
              <select
                required
                name="classes"
                value={formData.classes}
                onChange={handleChange}
                className="p-2 border border-[#D9D9D9] rounded  w-full h-[39px] placeholder:text-[#898989] md:border md:rounded "
              >
                <option value="" className="text-[#898989]">
                  Class
                </option>
                <option value="Nursery">Nursery</option>
                <option value="KG">KG</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>
            </div>

            {/* Hidden input for source */}
            <input
              type="hidden"
              name="source"
              value={formData.source}
              readOnly
            />

            <div className="md:pt-20  cursor-pointer">
              <button
                type="submit"
                disabled={loading}
                className={`md:w-[177px] md:h-[60px] md:px-0 px-8 md:py-0 py-3  bg-background-button text-white p-2 rounded-lg ${
                  loading
                    ? "cursor-not-allowed opacity-70"
                    : "hover:bg-background-light"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
