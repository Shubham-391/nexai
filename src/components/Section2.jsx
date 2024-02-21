import React from "react";
import clock1 from "../assets/images/clock1.webp";
import clock2 from "../assets/images/clock2.webp";
import message from "../assets/images/message.webp";
import line from "../assets/images/line.webp";

function Section2() {
  const carddata = [
    {
      image: clock1,
      heading: "Remote Access and File Management",
      para: " Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer.",
    },
    {
      image: clock2,
      heading: "Real-time Home Monitoring",
      para: "While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home.",
    },
    {
      image: message,
      heading: "Autonomous and Natural Language Communication",
      para: "Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend,",
    },
    {
      image: line,
      heading: "Intelligent Contextual Awareness",
      para: "Nexai utilizes the hardware sensors placed throughout your home to understand your location and deliver relevant information or actions. For instance, if you're in the bedroom and there's a smart TV present, Nexai will automatically display on the TV screen.",
    },
  ];
  return (
    <>
      <div
        id="section2"
        className="max-w-[1364px] h-[600px] sm:h-[810px] w-full px-3 mx-auto"
      >
        <div className="w-full h-full border border-solid border-[#FCFCFC] rounded-[32px] bg-globebg bg-no-repeat bg-cover bg-center relative overflow-hidden flex flex-col items-center">
          <h2
            className="mt-10 sm:mt-[80px] f-recharge font-bold text-[25px] sm:text-[40px] sm:leading-[50.4px] text-[#FCFCFC] text-center mb-4"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Unique features
          </h2>
          <p
            className="max-w-[397px] w-full font-poppins font-normal text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.7)]"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            ability to engage in natural, fluent conversations in over 15
            languages,
          </p>
          <div
            className="w-full px-4 sm:px-6 lg:px-[100px] mt-10 sm:mt-[80px] flex flex-col gap-y-6 overflow-y-auto"
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            {carddata.map((data, index) => (
              <div
                key={index}
                className={`w-full flex relative ${
                  index == 0 || index == 2 ? "justify-start" : "justify-end"
                } ${
                  index == 0
                    ? ""
                    : index == 3
                    ? "min-[850px]:mt-[-100px] mb-3"
                    : "min-[850px]:mt-[-100px]"
                }`}
              >
                <div
                  className={`max-w-[364px] w-full sm:h-[400px] z-[1] bg-white duration-300 group hover:bg-[rgba(2,205,207)] pt-4 pb-4 sm:pb-0 sm:pt-[30px] rounded-[16px] ${
                    index == 2
                      ? "pl-4 pr-4 sm:pl-6 sm:pr-[19px]"
                      : "px-4 sm:px-6"
                  }`}
                >
                  <img
                    className="w-[40px] h-[40px]"
                    src={data.image}
                    alt="clock"
                  />
                  <h3 className="f-recharge font-bold text-xl leading-[32px] text-[#0B0A0A] mt-5 sm:mt-[30px] mb-[10px]">
                    {data.heading}
                  </h3>
                  <p className="font-poppins font-normal text-base leading-[25.6px] text-[rgba(11,10,10,0.7)] duration-300 group-hover:text-[rgba(11,10,10)]">
                    {data.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* ellipse */}
          <div className="w-[131px] sm:w-[262px] h-[131px] sm:h-[262px] rounded-[50%] bg-[#02CDCF] absolute left-[-18%] bottom-[1%] blur-[100px] md:blur-[150px]"></div>
          <div className="absolute w-[131px] sm:w-[262px] h-[131px] sm:h-[262px] bg-[#02CDCF] rounded-[50%] top-[22%] right-[-15%] blur-[100px] sm:blur-[150px]"></div>
        </div>
      </div>
    </>
  );
}

export default Section2;
