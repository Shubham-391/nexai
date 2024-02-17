import React from "react";
import Button from "./Button";
import section7ring from "../assets/images/section7ring.webp";

function Section7() {
  return (
    <>
      <div className="w-full pt-12 sm:pt-24 min-[1200px]:pt-0 min-[1200px]:min-h-[391px] flex items-end relative">
        <div className="max-w-[1164px] mx-auto px-3 w-full flex flex-col gap-y-6 md:flex-row justify-between items-center">
          <p className="max-w-[517px] w-full f-recharge font-bold text-[25px] sm:text-[40px] sm:leading-[52px] text-[#FCFCFC] text-center md:text-start">
            Ready to get started
            <br />
            <span className="text-[#02CDCF]">Talk to us Today</span>
          </p>
          <Button
            className="hover:shadow-[inset_202px_0_0_0_white] shrink-0"
            text="Get Started"
          />
        </div>
        {/* ellipse */}
        <div className="absolute w-[114px] md:w-[228px] h-[114px] md:h-[228px] rounded-[50%] bg-[#02CDCF] z-[-1] bottom-0 left-[-11%] blur-[90px] md:blur-[150px]"></div>
        <img
          className="absolute w-[209px] h-[207px] bottom-[6%] hidden sm:block sm:right-[-20%] md:right-[-8%]"
          src={section7ring}
          alt="ring"
        />
      </div>
    </>
  );
}

export default Section7;
