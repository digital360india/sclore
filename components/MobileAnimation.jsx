

import Image from "next/image";
import React from "react";

const MobileAnimation = () => {
  const reasons = [
    {
      title: "Personalized School Recommendations",
      description:
        "At Sclore, we prioritize your child's unique needs, offering tailored advice to help you choose the school that aligns perfectly with their strengths and aspirations.",
    },
    {
      title: "Expert Educational Support",
      description:
        "Our team of experienced counselors provides professional guidance at every step, ensuring you feel confident and informed while making decisions about your child’s future.",
    },
    {
      title: "Customized Skill Assessments",
      description:
        "Sclore offers specialized mock tests and assessments to identify your child's strengths and growth areas, enabling precise school placement tailored to their potential.",
    },
    {
      title: "Comprehensive School Analysis",
      description:
        "We provide detailed reviews of schools, covering academic programs, extracurricular activities, and more, empowering you to make well-informed choices.",
    },
    {
      title: "All-Inclusive Admission Assistance",
      description:
        "From the initial consultation to admission confirmation, Sclore provides full-service support, making the entire school selection process smooth and stress-free.",
    },
    {
      title: "Transparent and Ethical Approach",
      description:
        "Sclore values honesty and integrity. By charging parents instead of schools, we maintain impartiality, ensuring our recommendations genuinely serve your child's best interests.",
    },
    

  ];


  
  return (
    <div className="md:hidden bg-white m-6">
      <h2 className="text-2xl text-[#323232] font-bold pb-6 text-center">
        Why Choose Us?
      </h2>
      <div className="space-y-6">
        {reasons.map((reason, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              
              <Image
                src="/pointer.svg"
                width={1000}
                height={1000}
                className="w-[20px] h-[20px]"
                alt="Pointer"
              />
              
              {/* {index < reasons.length - 1 && ( */}
                <div className="w-[2px] h-24 bg-[#1B6EA1] mt-2"></div>
              {/* )} */}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#323232] text-lg mb-2">{reason.title}</h3>
              <p className="text-[#898989] text-[12px]">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAnimation;
