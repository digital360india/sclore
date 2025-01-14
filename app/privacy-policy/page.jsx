import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Privacy Policies",
    description:
      "Welcome to Sclore - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Privacy Policy</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/privacy.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
          Your Privacy Matters at Sclore

          </p>
          <p>
          Sclore values your trust and is committed to protecting your privacy. This policy explains how we handle your data responsibly and transparently.
          </p>
          <p>
            {" "}
            <p className="text-[24px] font-semibold">
            Data Collection and Use
            </p>
            We collect basic details such as your name and preferences to personalize your experience. This ensures you receive relevant recommendations and updates.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
            Optimizing User Experience

            </p>
            We analyze browsing patterns to refine our platform and offer better services tailored to your needs.
          </p>
          <p>
            <p className="text-base font-semibold mb-1">
            Keeping Your Data Secure
            </p>
            Your data is protected with advanced security measures. While no system is entirely foolproof, we are dedicated to minimizing risks.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
            Limited and Responsible Sharing
            </p>
            Any sharing of data with trusted partners is done to enhance your experience and within strict parameters.
          </p>
          <p>
            <p className="text-[24px] font-semibold">
            Clear Communication
            </p>
            As Sclore evolves, privacy policies may be updated to reflect new practices. Significant changes will be communicated clearly to you.

          </p>
         
          <p>
            <p className="text-[24px] font-semibold">For Any Questions or Concerns:
            </p>
            We&apos;re here for any privacy-related inquiries or feedback. You
            can contact us directly via email or phone for assistance: :
            <br />
            <p>Email: scloreindia@gmail.com</p>
            <p>Contact Number:01353530324, 9557695360</p>
            <p>Thank you for trusting Sclore. We&apos;re here to support your educational journey with care and transparency.</p>
          </p>
        </div>
      </div>
    </>
  );
}
