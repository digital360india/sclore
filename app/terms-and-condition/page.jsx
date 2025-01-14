import Hero from "@/components/Hero";

export async function generateMetadata() {
  return {
    title: "Terms and Condition",
    description:
      "Welcome to Sclore - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const TermsAndCondition = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-5 p-[35px] md:p-[100px] ">
        <div className=" bg-[#F8F8F8] p-[40px] space-y-5">
          <p className="text-[32px] font-semibold">Terms And Condition</p>
          <div className="flex  justify-center mt-4">
            <img
              className="w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]"
              src="/term.svg"
              alt=""
            />
          </div>
          <p className="text-[24px] font-semibold">
            Welcome to Sclore&apos;s Terms and Conditions
          </p>
          <p>
            At Sclore, we&apos;re dedicated to helping families discover the best
            schools for their children. These terms outline how you can use our
            platform responsibly to make informed educational decisions.
          </p>
          {/* Please read these terms carefully. */}
          <p>
            <p className="pb-4">
              <p className="text-[20px]  font-bold mb-1">
                Your Guide to School Discovery
              </p>
              Sclore provides tools and resources to explore schools and their
              offerings. We encourage constructive use of our platform to foster
              a supportive educational environment.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Your Account, Your Responsibility
              </p>
              By creating an account, you gain access to personalized
              recommendations. Please maintain the security and accuracy of your
              account details for the best experience.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Information You Can Trust
              </p>
              We strive to deliver accurate and up-to-date information about
              schools and admissions. However, we recommend verifying details
              directly with institutions for added assurance.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Community-Driven Improvement
              </p>
              Your feedback helps us grow. Share your thoughts with us to make
              Sclore better for everyone.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Prioritizing Privacy and Security
              </p>
              We are committed to protecting your data and using it solely to
              enhance your experience. Learn more in our Privacy Policy.
            </p>
            <p className="pb-4">
              <p className="text-[20px] font-semibold mb-1">
                Continuous Service and Updates
              </p>
              While we work hard to ensure uninterrupted service, occasional
              technical issues may occur. We&apos;ll resolve these as quickly as
              possible. Updates to our terms will be communicated clearly to
              keep you informed.
            </p>
          </p>
          <p className="pb-4">
            <p className="text-[24px] font-semibold">
              Need Support? Contact Us:
            </p>
            If you have questions, feedback, or need further assistance,
            we&apos;re here for you! Please reach out to us at: <br />
            <p>Email: scloreindia@gmail.com</p>
            <p>
              Contact Number: 01353530324, 9557695360
              <p className="pt-4">
                Thank you for choosing Sclore—your partner in educational
                exploration.
              </p>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
