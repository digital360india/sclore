
import React from "react";
import Image from "next/image";

const HeroSchlore = () => {
  return (
    <>
    
    <div className="md:mt-20 mt-10   w-full h-[100vh] hidden md:block">
      <Image
        src="/bgsclore.svg"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-[100vh] object-none  md:object-cover"
        />

      
    </div>
    <div className="w-full h-auto md:hidden">
      <Image
        src="/mobilebg.svg"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-auto "
        />

      
    </div>
        </>
  );
};

export default HeroSchlore;
