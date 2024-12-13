import Image from "next/image";
import React from "react";

const WhyChooseUsSchlore = () => {
  return (
    <>
      <div className="bg-[#FFFFF] hidden md:block ">
        <h1 className="text-center text-[#323232] text-[2.25rem] mt-10">
          Why Choose Us?
        </h1>

        <div className="flex justify-center items-center">
          <div className="space-y-12 w-[200px] h-[410px]">
            <div className="w-[200px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">
              Personalized School Recommendations
              </h1>
              <p className="text-[#898989] text-[12px]">
              At Sclore, we prioritize your child's unique needs, offering tailored advice to help you choose the school that aligns perfectly with their strengths and aspirations.
              </p>
            </div>
            <div className="w-[200px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">Expert Educational Support</h1>
              <p className="text-[#898989] text-[12px]">
              Our team of experienced counselors provides professional guidance at every step, ensuring you feel confident and informed while making decisions about your child&apos;s future.
              </p>
            </div>
            <div className="w-[230px] h-[150px]">
              <h1 className="text-[#323232] text-[1rem]">
              Customized Skill Assessments
              </h1>
              <p className="text-[#898989] text-[12px]">
              Sclore offers specialized mock tests and assessments to identify your child's strengths and growth areas.
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/leftframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[420px]"
            />
          </div>

          <div className="">
            <Image
              src="/whychooseus.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[440px] h-[550px]"
            />
          </div>

          <div>
            <Image
              src="/rightframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[420px]"
            />
          </div>

          <div className="space-y-14 w-[200px] h-[410px]">
            <div className="w-[280px] h-[138px] pt-1">
              <h1 className="text-[#323232] text-[1rem]">
              Comprehensive School Analysis
              </h1>
              <p className="text-[#898989] text-[12px]">
              We provide detailed reviews of schools, covering academic programs, extracurricular activities, and more, empowering you to make well-informed choices.
              </p>
            </div>
            <div className="w-[280px] h-[130px]">
              <h1 className="text-[#323232] text-[1rem]">
                Transparent and Trustworthy Service
              </h1>
              <p className="text-[#898989] text-[12px]">
              Sclore values honesty and integrity. By charging parents instead of schools, we maintain impartiality, ensuring our recommendations genuinely serve your child&apos;s best interests.
              </p>
            </div>
            <div className="w-[300px] h-[135px]">
              <h1 className="text-[#323232] text-[1rem]">All-Inclusive Admission Assistance</h1>
              <p className="text-[#898989] text-[12px]">
              From the initial consultation to admission confirmation, Sclore provides full-service support, making the entire school selection process smooth and stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSchlore;
