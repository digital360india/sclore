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
          Name: formData.name,
          email: formData.email,
          Mobile: formData.phone,
          grade: formData.classes,
          Url: window.location.href,
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

      if (emailResponse.status === 200) {
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
          className="absolute bg-background-button px-1 py-1 md:px-2 z-50 rounded-full  md:py-2 top-2 right-2 text-2xl font-bold text-white hover:text-gray-900"
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

        <div className="w-full z-50 md:w-[470px] h-full rounded-l-2xl p-8 md:absolute md:top-0 md:right-14 bg-white">
          <h3 className=" md:text-xl mb-6 text-[#323232]">
            Fill this form and get in touch with our counsellor
          </h3>
          <form onSubmit={handleSubmit} className="space-y-7 md:space-y-6">
            <input
              required
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
            />
            <div className="flex">
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={handleChange}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  borderBottom: "2px solid #D9D9D9",
                }}
                buttonStyle={{
                  border: "2px solid #D9D9D9",
                }}
              />
            </div>

            <div className="flex md:gap-20 gap-8">
              <select
                required
                name="classes"
                value={formData.classes}
                onChange={handleChange}
                className="p-2 border-b-2 border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded "
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
            
            <div className="md:pt-20 pt-8 cursor-pointer">


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
