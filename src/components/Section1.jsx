import React from "react";
import hand from "../assets/images/hand.webp";
import Button from "./Button";

function Section1() {
  return (
    <>
      <div
        id="section1"
        className="w-full relative mt-12 sm:mt-[80px] mb-12 sm:mb-[120px]"
      >
        <div className="max-w-[1246px] w-full px-3 mx-auto min-h-[585px] flex flex-wrap gap-y-6">
          <div className="w-full min-[1200px]:w-1/2 relative flex justify-center min-[1200px]:justify-start">
            <div
              className="max-w-[612px] sm:h-[507px]"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              {" "}
              <img className="w-full object-cover" src={hand} alt="hand" />
            </div>
            <div className="absolute blur-[220px] sm:blur-[180px] w-[231px] h-[231px] rounded-[50%] bg-[#02CDCF] bottom-[9%] min-[1200px]:bottom-[20%] left-[33%] min-[1200px]:left-[16%]"></div>
          </div>
          <div className="w-full min-[1200px]:w-1/2 flex justify-center min-[1200px]:justify-end min-[1200px]:pr-[41px] items-center relative">
            <div
              className="max-w-[517px] w-full flex flex-col items-center min-[1200px]:items-start"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <h2 className="f-recharge font-bold text-[25px] sm:text-[40px] sm:leading-[50.4px] text-[#02CDCF] mb-4 text-center min-[1200px]:text-start">
                Ai-Powered Home Assistant
              </h2>
              <p className="font-poppins font-normal text-base leading-[25.6px] text-[rgba(255,255,255,0.7)] text-center min-[1200px]:text-start">
                Nexai is an advanced AI-powered home assistant that brings the
                future to your fingertips. With its ability to engage in
                natural, fluent conversations in over 15 languages,
              </p>
              <p className="font-poppins font-normal text-base leading-[25.6px] text-[rgba(255,255,255,0.7)] my-[6px] text-center min-[1200px]:text-start">
                Nexai offers an incredibly futuristic experience. It can take
                the initiative to ask about your day, schedule meetings, provide
                timely reminders
              </p>
              <p className="font-poppins font-normal text-base leading-[25.6px] text-[rgba(255,255,255,0.7)] text-center min-[1200px]:text-start">
                assist with cooking by suggesting ingredients, track your
                fitness and nutrition goals, and even handle bill payments.
              </p>
              <Button
                className="mt-10 hover:shadow-[inset_202px_0_0_0_white]"
                text="Learn More"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[114px] sm:w-[228px] h-[122px] sm:h-[245px] rounded-[50%] bg-[#02CDCF] top-[63%] min-[1200px]:top-[29%] right-[-7%] blur-[110px] sm:blur-[180px]"></div>
      </div>
    </>
  );
}

export default Section1;
