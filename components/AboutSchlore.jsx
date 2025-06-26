"use client";
import Image from "next/image";
import React, { useState } from "react";
import school123bg from "@/public/school123bg.svg";
import SchoolByCitiesSclore from "./SchoolByCitiesSclore";

const AboutSchlore = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div
        className="relative w-full h-[400px] bg-no-repeat bg-cover bg-center overflow-hidden md:hidden"
        style={{ backgroundImage: `url(${school123bg.src})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex justify-center md:items-center z-10">
          <div className="text-white grid grid-cols-2 gap-24 p-10">
            <div className="space-y-10">
              <div className="space-y-1">
                <Image
                  src="/cap.svg"
                  width={1000}
                  height={1000}
                  className="w-[47px] h-[39px]"
                  alt="img"
                />
                <p className="text-[20px] md:text-[29px] font-semibold">500+</p>
                <p className="w-[2.5rem] h-[3px] bg-white rounded-3xl"></p>
                <p className="text-[12px] md:text-[24px]">Schools</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/parent.svg"
                  width={1000}
                  height={1000}
                  className="w-[47px] h-[39px]"
                  alt="img"
                />
                <p className="text-[20px] md:text-[29px] font-semibold">500+</p>
                <p className="w-[2.5rem] h-[3px] bg-white rounded-3xl"></p>
                <p className="text-[12px] md:text-[24px]">Parents</p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-1">
                <Image
                  src="/head.svg"
                  width={1000}
                  height={1000}
                  className="w-[47px] h-[39px]"
                  alt="img"
                />
                <p className="text-[20px] md:text-[29px] font-semibold">500+</p>
                <p className="w-[2.5rem] h-[3px] bg-white rounded-3xl"></p>
                <p className="text-[12px] md:text-[24px]">Counsellors</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/city.svg"
                  width={1000}
                  height={1000}
                  className="w-[47px] h-[39px]"
                  alt="img"
                />
                <p className="text-[20px] md:text-[29px] font-semibold">500+</p>
                <p className="w-[2.5rem] h-[3px] bg-white rounded-3xl"></p>
                <p className="text-[12px] md:text-[24px]">Cities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white rounded-3xl cursor-pointer text-background-button w-[140px] h-[38px] flex justify-center items-center">
            <button onClick={() => setShowContent(true)}>Read More</button>
          </div>
        </div>

        <div
          className={`absolute top-0 left-0 w-full h-[396px] mt-[2px] mb-[2px] bg-[#F3F3F3] text-[#323232] transition-transform duration-700 ease-in-out z-30 ${
            showContent ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute w-[30px] h-[30px] rounded-full text-white text-[1.3rem] bg-background-button top-48 left-3"
            onClick={() => setShowContent(false)}
          >
            &lt;
          </button>

          <div className="p-[46px] text-justify overflow-y-auto h-full text-[13px]">
          Sclore is your trusted guide to discovering the top boarding schools across India. Our easy-to-use platform provides detailed information and accurate insights into the best institutions, making your search effortless and efficient. Whether you&apos;re looking for outstanding academics, modern facilities, or a nurturing atmosphere, Sclore ensures you have everything you need to make informed choices for your child&apos;s education. Let us help you find the perfect boarding school to build a bright and successful future.
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <SchoolByCitiesSclore />
      </div>

      <div className="hidden md:block">
        <div
          className="w-full h-[463px] bg-no-repeat bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${school123bg.src})` }}
        >
          <div
            className={`absolute inset-0 ${
              showContent ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
          >
            <div
              className={`flex justify-center items-center text-white space-x-60 pt-32 transition-opacity duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="space-y-1">
                <Image
                  src="/cap.svg"
                  width={1000}
                  height={1000}
                  className="w-[83px] h-[83px]"
                  alt="img"
                />
                <p className="text-[29px] font-semibold">500+</p>
                <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
                <p className="text-[24px]">Schools</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/parent.svg"
                  width={1000}
                  height={1000}
                  className="w-[83px] h-[83px]"
                  alt="img"
                />
                <p className="text-[29px] font-semibold">500+</p>
                <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
                <p className="text-[24px]">Parents</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/head.svg"
                  width={1000}
                  height={1000}
                  className="w-[83px] h-[83px]"
                  alt="img"
                />
                <p className="text-[29px] font-semibold">500+</p>
                <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
                <p className="text-[24px]">Counsellors</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/city.svg"
                  width={1000}
                  height={1000}
                  className="w-[83px] h-[83px]"
                  alt="img"
                />
                <p className="text-[29px] font-semibold">500+</p>
                <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
                <p className="text-[24px]">Cities</p>
              </div>
            </div>

            <div className="flex justify-center items-center pt-16">
              <div
                className="bg-white rounded-3xl cursor-pointer text-background-button w-[186px] h-[44px] flex justify-center items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowContent(true)}
              >
                <button className="z-20">Read More</button>
              </div>
            </div>

            <div
              className={`transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative ">
                <Image
                  src="/linesvg.svg"
                  width={1000}
                  height={1000}
                  className="absolute w-[500px] h-[330px]  right-80 bottom-5 z-10"
                  alt="Line"
                />
                <Image
                  src="/sclore2.png"
                  width={1000}
                  height={1000}
                  className={`absolute w-[450px] h-[485px] -bottom-[70px]  right-0 transition-transform duration-700 ease-in-out transform ${
                    isHovered ? "translate-x-0" : "translate-x-full"
                  }`}
                  alt="Frame"
                />
              </div>
            </div>
          </div>

          <div
            className={`w-full h-[461px] mt-[1px] mb-[1px]  pt-10  bg-[#F3F3F3] text-[#323232] z-50 absolute top-0 right-0 transition-transform duration-700 ease-in-out transform ${
              showContent ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              className={`relative h-full p-1  `}
              onMouseLeave={() => setShowContent(false)}
            >
              <button
                className="absolute w-[40px] h-[40px] rounded-full text-white text-[1.5rem] bg-background-button top-36 left-10  hover:text-gray-800"
                onClick={() => setShowContent(false)}
              >
                &lt;
              </button>
              <div
                className={`h-full px-[100px] overflow-y-auto  text-[1rem]  `}
              >
                Sclore is your trusted guide to discovering the top boarding schools across India. Our easy-to-use platform provides detailed information and accurate insights into the best institutions, making your search effortless and efficient. Whether you&apos;re looking for outstanding academics, modern facilities, or a nurturing atmosphere, Sclore ensures you have everything you need to make informed choices for your child&apos;s education. Let us help you find the perfect boarding school to build a bright and successful future.
                <div className="flex justify-center items-center text-[#323232] space-x-60 pt-10">
                  <div className="space-y-1">
                    <Image
                      src="/cap1.svg"
                      width={1000}
                      height={1000}
                      className="w-[49px] h-[49px]"
                      alt="img"
                    />
                    <p className="text-[29px] font-semibold">500+</p>
                    <p className="w-[3.5rem] h-1 bg-[#323232] rounded-3xl"></p>
                    <p className="text-[24px]">Schools</p>
                  </div>

                  <div className="space-y-1">
                    <Image
                      src="/raphael_parent.svg"
                      width={1000}
                      height={1000}
                      className="w-[49px] h-[49px]"
                      alt="img"
                    />
                    <p className="text-[29px] font-semibold">500+</p>
                    <p className="w-[3.5rem] h-1 bg-[#323232] rounded-3xl"></p>
                    <p className="text-[24px]">Parents</p>
                  </div>

                  <div className="space-y-1">
                    <Image
                      src="/Technical Support.svg"
                      width={1000}
                      height={1000}
                      className="w-[49px] h-[49px]"
                      alt="img"
                    />
                    <p className="text-[29px] font-semibold">500+</p>
                    <p className="w-[3.5rem] h-1 bg-[#323232] rounded-3xl"></p>
                    <p className="text-[24px]">Counsellors</p>
                  </div>

                  <div className="space-y-1">
                    <Image
                      src="/Downtown.svg"
                      width={1000}
                      height={1000}
                      className="w-[49px] h-[49px]"
                      alt="img"
                    />
                    <p className="text-[29px] font-semibold">500+</p>
                    <p className="w-[3.5rem] h-1 bg-[#323232] rounded-3xl"></p>
                    <p className="text-[24px]">Cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSchlore;
