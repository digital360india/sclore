import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Author",
    description:
      "Welcome to Sclore - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <div>
      {/* <Hero /> */}
      <div className="">
        <div className="flex flex-col  items-center p-16">
          <h1 className="text-4xl lg:text-5xl text-center font-bold py-4 lg:py-10">
            Author
          </h1>

          <div className="px-2 lg:px-10 py-5 flex  bg-white rounded-lg flex-col lg:flex lg:flex-row  w-[400px] md:w-[800px] lg:w-[1200px]  items-center gap-10">
            <div className="relative h-[350px] w-[300px] rounded-2xl shadow-2xl">
              <img
                src="/author.jpeg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-lg object-cover"
              />
               <div className=" text-[16px] mt-6">
                <p className=" text-[20px] font-bold">Know More</p>

                <a target="_blank" href="https://www.negivaibhav.com/">
                  <p className="text-blue-500 underline">negivaibhav.com</p>
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold  text-white">
                  Vaibhav Negi
                </h1>
                <p className="text-sm text-gray-300 pb-2">Author</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[300px] md:w-[600px] lg:w-[900px]  leading-[1.4rem]">
              <div className="lg:text-start text-center">
                <h2 className="font-bold text-2xl text-black">Vaibhav Negi</h2>
                <p className="text-black">Educational Content Specialist</p>
              </div>
              <p>
              Hello! I&apos;m Vaibhav Negi, an educational content specialist with over three years of experience in simplifying school selection and admission processes. My focus is on creating content that&apos;s not just informative but also empowering for students and families.
              </p>
              <p>
              At Sclore, I specialize in crafting student-focused resources that provide clarity in decision-making. From exploring top schools to decoding admission timelines, my goal is to ensure every family feels confident about their educational choices.
              </p>
              <p>
              My journey in digital content creation extends beyond education. Through my work in lifestyle and community engagement, I&apos;ve learned to connect with diverse audiences, delivering content that&apos;s both engaging and practical.
              </p>
              <p>
              At Sclore, I aim to bring a humanized touch to educational guidance, making it accessible and impactful for everyone. Let&apos;s explore the path to brighter futures, together.
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
