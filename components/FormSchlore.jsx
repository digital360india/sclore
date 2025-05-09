"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

const FormSchlore = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",

    phone: "",
    source: "Schlore - www.schlore.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const response = await axios.post(
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
          source: "Schlore - Confuse to choose the Best School",
          date: new Date().toISOString(),
        }
      );

      if (response.status === 200 && lmsResponse.status === 200) {
        alert("Form submitted successfully.");
        setFormData({
          name: "",
          phone: "",
          source: "Schlore - www.schlore.com",
        });
      } else {
        alert("Try again");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative w-full h-[510px] md:h-[539px]">
        <div className="absolute inset-0 z-0 md:block hidden w-[50%]">
          <Image
            src="/bookingformsclore.png"
            alt="School choice"
            width={1000}
            height={1000}
            className="w-[795px] h-[539px] object-cover"
          />
        </div>

        <div className="absolute md:right-10  top-1/2 transform -translate-y-1/2 z-10 md:w-fit w-full p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
          <div className="md:hidden block font-bold text-center text-xl">
            Confuse to choose the Best School ?
          </div>
          <h3 className="md:text-xl  text-[16px] my-6 text-[#323232]">
            Fill this form and get in touch with our counsellor
          </h3>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label htmlFor="">Name</label>
              <div>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 border border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded lg:w-[498px] sm:border-[#D9D9D9]"
                />
              </div>
            </div>
            {/* <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border-b-2 border-[#D9D9D9] w-full h-[39px] placeholder:text-[#898989] sm:border sm:rounded sm:w-[462px] sm:border-[#D9D9D9]"
          /> */}
            {/* <div className="flex">
              <select className="w-[80px] md:w-[100px] h-[39px] border-b-2 border-[#D9D9D9] rounded-l placeholder:text-[#898989] sm:border sm:rounded-l sm:p-2 sm:border-[#D9D9D9]">
                <option value="🇮🇳">🇮🇳 +91</option>
                <option value="🇺🇸">🇺🇸 +1</option>
                <option value="🇬🇧">🇬🇧 +44</option>
                <option value="🇨🇦">🇨🇦 +1</option>
                <option value="🇦🇺">🇦🇺 +61</option>
                <option value="🇳🇿">🇳🇿 +64</option>
                <option value="🇿🇦">🇿🇦 +27</option>
                <option value="🇸🇬">🇸🇬 +65</option>
                <option value="🇦🇪">🇦🇪 +971</option>
                <option value="🇸🇦">🇸🇦 +966</option>
                <option value="🇫🇷">🇫🇷 +33</option>
                <option value="🇩🇪">🇩🇪 +49</option>
                <option value="🇮🇹">🇮🇹 +39</option>
                <option value="🇪🇸">🇪🇸 +34</option>
                <option value="🇧🇷">🇧🇷 +55</option>
                <option value="🇲🇽">🇲🇽 +52</option>
                <option value="🇯🇵">🇯🇵 +81</option>
                <option value="🇰🇷">🇰🇷 +82</option>
                <option value="🇨🇳">🇨🇳 +86</option>
                <option value="🇹🇷">🇹🇷 +90</option>
                <option value="🇷🇺">🇷🇺 +7</option>
                <option value="🇮🇩">🇮🇩 +62</option>
                <option value="🇵🇭">🇵🇭 +63</option>
                <option value="🇻🇳">🇻🇳 +84</option>
                <option value="🇹🇭">🇹🇭 +66</option>
                <option value="🇲🇾">🇲🇾 +60</option>
                <option value="🇳🇬">🇳🇬 +234</option>
                <option value="🇪🇬">🇪🇬 +20</option>
                <option value="🇮🇱">🇮🇱 +972</option>
                <option value="🇰🇪">🇰🇪 +254</option>
                <option value="🇦🇷">🇦🇷 +54</option>
                <option value="🇨🇱">🇨🇱 +56</option>
                <option value="🇵🇪">🇵🇪 +51</option>
                <option value="🇨🇴">🇨🇴 +57</option>
                <option value="🇻🇪">🇻🇪 +58</option>
                <option value="🇺🇦">🇺🇦 +380</option>
                <option value="🇵🇱">🇵🇱 +48</option>
                <option value="🇳🇱">🇳🇱 +31</option>
                <option value="🇧🇪">🇧🇪 +32</option>
                <option value="🇸🇪">🇸🇪 +46</option>
                <option value="🇨🇭">🇨🇭 +41</option>
                <option value="🇦🇹">🇦🇹 +43</option>
                <option value="🇩🇰">🇩🇰 +45</option>
                <option value="🇫🇮">🇫🇮 +358</option>
                <option value="🇮🇪">🇮🇪 +353</option>
                <option value="🇳🇴">🇳🇴 +47</option>
                <option value="🇨🇿">🇨🇿 +420</option>
                <option value="🇸🇰">🇸🇰 +421</option>
                <option value="🇷🇴">🇷🇴 +40</option>
                <option value="🇭🇺">🇭🇺 +36</option>
              </select>
              <input
              required
                type="tel"
                name="phone"
                placeholder="Your mobile number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-[39px] p-2 border-b-2 border-[#D9D9D9] placeholder:text-[#898989] sm:border sm:rounded-r sm:w-[398px] sm:border-[#D9D9D9]"
              />
            </div> */}
            <div>
              <label htmlFor="">Mobile</label>
              <div className="flex  w-full lg:w-[498px]">
                <PhoneInput
                  className="w-full border-[#D9D9D9] border rounded md:border md:rounded"
                  country={"in"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: "100%",
                    height: "39px",
                    border: "none",
                  }}
                  buttonStyle={{
                    border: "1px solid #D9D9D9",
                  }}
                />
              </div>
            </div>

            {/* <div className="flex md:gap-20 gap-8">
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded "
            >
              <option value="" className="text-[#898989]">
                Class
              </option>
              
            </select>
            <select
              name="board"
              value={formData.board}
              onChange={handleChange}
              className="p-2 border-b-2 border-[#D9D9D9] rounded md:w-[143px] w-[120px] h-[39px] placeholder:text-[#898989] md:border md:rounded"
            >
              <option value="" className="text-[#898989]">
                BOARD
              </option>
              
            </select>
          </div> */}
            <div className="md:pt-2 pt-8 text-center">
              <button
                type="submit"
                disabled={loading}
                className={`cursor-pointer md:w-[160px] md:h-[50px] md:px-0 px-8  bg-background-button text-white p-2 rounded-lg ${
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
    </>
  );
};
export default FormSchlore;
