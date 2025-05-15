"use client";
import React from "react";
// import MascotAnimation from "./MascotAnimation";
import Image from "next/image";

const AboutUsSchool123 = () => {
  return (
    <>
      {/* <div className="absolute">
        <MascotAnimation />
      </div> */}

      <div className="bg-background-button">
        <h1
          className="text-[#FFFFFF] text-[50px] md:text-[200px] text-center pt-40 md:pt-0 md:mt-20"
          style={{ fontFamily: "League Gothic" }}
        >
          About Us
        </h1>

        {/* <Image
              src="/abouteduline.svg"
              width={1000}
              height={1000}
              alt="line"
              className="w-[350px] h-[250px] absolute bottom-40 left-20 hidden md:block"
            /> */}
        <div className="flex justify-center items-center mb-20">
          <div className="rounded-full bg-white  p-10">

          <Image
            src="/sclorelogo.png"
            alt="about"
            width={1000}
            height={1000}
            className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] "
            />
            </div>
        </div>

        <h2 className="text-center text-white text-[30px] mb-5">
          Let&apos;s Begin !!
        </h2>
        <div className="flex justify-center items-center pb-10">
          <Image
            src="/downarrowedu.svg"
            width={1000}
            height={1000}
            alt="down"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => {
              document.getElementById("scroll-target").scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>

      <div
        id="scroll-target"
        className="sm:mt-12 text-[#323232] md:px-[100px]  pb-12 md:pb-0"
      >
        <div className="bg-[#F8F8F8] px-7 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <h1 className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left hidden md:block">
                About Sclore
              </h1>
              <p className="text-[12px] sm:text-[20px] text-justify mt-4 ">
                Sclore is a platform that helps families find the best boarding
                schools in India. We provide accurate and reliable information
                to make choosing the right school easy and stress-free.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center space-y-2 md:space-y-4 order-1 md:order-none gap-10 md:gap-0">
              <h1 className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                About Sclore
              </h1>
              <img
                src="/sclorelogo.png"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center  md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-5 md:gap-0">
              <img
                src="./ourpassion.svg"
                className="w-[100px] h-[110px] md:h-[160px] md:w-[150px]"
                alt="Passion logo"
              />
              <h2 className="text-[16px] sm:text-[40px] font-semibold md:hidden">
                Our Commitment to Education
              </h2>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <h2 className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                Our Commitment to Education
              </h2>
              <p className="text-[12px] sm:text-[20px] text-justify">
                We believe quality education changes lives. At Sclore, we work
                hard to showcase the finest boarding schools across India,
                offering families a wide range of choices to meet their needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center  md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <h2 className="text-[16px] sm:text-[40px] font-semibold text-center pb-4 md:text-left hidden md:block">
                Why Trust Us
              </h2>
              <p className="text-[12px] sm:text-[20px] text-justify">
                Honesty and transparency are at the heart of what we do. Sclore
                ensures parents and students receive up-to-date and trustworthy
                details about each school, helping them make confident
                decisions.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <h2 className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Why Trust Us
              </h2>
              <img
                src="./ourmission.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <h2 className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
                Our Purpose
              </h2>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <h2 className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                Our Purpose
              </h2>
              <p className="text-[12px] sm:text-[20px] text-justify">
                Our goal is to make finding the ideal boarding school simple and
                accessible for every family. We aim to be India&apos;s most
                trusted resource for boarding school education, saving time and
                effort while supporting schools in reaching more families.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <h2 className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left pb-4 hidden md:block">
                Bringing Families and Schools Together
              </h2>
              <p className="text-[12px] sm:text-[20px] text-justify">
                Sclore connects parents and students with top-tier boarding
                schools in India. We provide families with a carefully selected
                list of schools that meet high standards while helping schools
                showcase their unique features.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <h2 className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left md:hidden">
                Bringing Families and Schools Together
              </h2>
              <img
                src="/joinus.svg"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Join us logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <h2 className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
                How We Support Families
              </h2>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <h2 className="text-[16px] sm:text-[40px] font-semibold pb-4 hidden md:block">
                How We Support Families
              </h2>
              <p className="text-[12px] sm:text-[20px] text-justify">
                We go beyond just providing information. Sclore offers expert
                consultation to help families choose the right school. Our team
                is always ready to assist, ensuring you make the best decision
                for your child&apos;s future
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsSchool123;
