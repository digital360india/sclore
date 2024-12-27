
import React from "react";
import Image from "next/image";

const HeroSchlore = () => {
  return (
    <>
    
    <div className="mt-20    w-full h-full hidden md:block">
      <Image
        src="/11.png"
        alt="School choice"
        width={1000}
        height={1000}
        className="w-full h-full "
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
