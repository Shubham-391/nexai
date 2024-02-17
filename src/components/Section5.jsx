import React from "react";
import Button from "./Button";
import aiglobe from "../assets/images/aiglobe.webp";
function Section5() {
  return (
    <>
      <div className="pt-12 sm:pt-[140px] px-3">
        <div className="max-w-[1364px] w-full mx-auto rounded-[24px] border border-solid border-[#FCFCFC] sm:min-h-[810px] bg-section5bg bg-center bg-cover bg-no-repeat flex items-center py-3 px-1 sm:px-3  flex-col-reverse lg:flex-row relative overflow-hidden">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end xl:pr-[6px]">
            <div className="max-w-[564px] w-full flex flex-col justify-center items-center lg:items-start lg:justify-start">
              <h2 className="f-recharge font-bold text-[25px] sm:text-[40px] sm:leading-[50.4px] text-[#02CDCF] mb-4 text-center lg:text-start">
                What is NexAi?
              </h2>
              <p className="font-poppins font-normal text-base leading-[25.6px] text-[rgba(255,255,255,0.7)] mb-2 text-center lg:text-start">
                Beyond its convenience, Nexai revolutionizes the way you
                interact with your home environment. It enhances productivity,
                efficiency, and overall well-being. From managing your schedules
                to transforming the way you experience smart living, Nexai opens
                up a world of possibilities.
              </p>
              <p className="font-poppins font-normal text-base leading-[25.6px] text-[rgba(255,255,255,0.7)] mb-5 sm:mb-10 text-center lg:text-start">
                Nexai's software can be installed on all your smart devices,
                including smartphones, computers, smart TVs, and kitchen
                appliances. It acts as a centralized control hub, allowing you
                to manage and interact with all your devices seamlessly. Whether
                it's adjusting the temperature, turning on appliances, or even
                accessing files on your home computer from anywhere, Nexai
                empowers you with effortless control.
              </p>
              <Button
                className="hover:shadow-[inset_202px_0_0_0_white] shrink-0"
                text="Learn More"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative flex justify-center items-center">
              <img
                className="max-w-[262px] sm:max-w-[535px] w-full object-cover h-[264px] sm:h-[528px] relative z-[1]"
                src={aiglobe}
                alt="globe"
              />
              <div className="absolute w-[234px] sm:w-[468px] h-[231px] sm:h-[463px] bg-[#02CDCF] rounded-[50%] mix-blend-hue"></div>
              <div className="absolute w-[114px] sm:w-[228px] h-[114px] sm:h-[228px] rounded-[50%] bg-[#02CDCF] z-[1] bottom-[6%] right-[21%] blur-[100px] sm:blur-[180px]"></div>
            </div>
          </div>
          {/* ellipse */}
          <div className="absolute w-[114px] md:w-[228px] h-[114px] md:h-[228px] rounded-[50%] bg-[#02CDCF] bottom-0 left-0 z-[-1] blur-[70px] sm:blur-[120px]"></div>
        </div>
      </div>
    </>
  );
}

export default Section5;
