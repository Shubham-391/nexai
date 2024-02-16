import React from "react";
import Slider from "react-slick";
import ring2 from "../assets/images/ring2.webp";

function Section4() {
  const boxdata = [
    {
      text: "NexAi, Turn on light",
    },
    {
      text: "NexAi, set alarm of 5:00 am",
    },
    {
      text: "NexAi, measure this table",
    },
    {
      text: "NexAi, Turn on music",
    },
    {
      text: "NexAi, Turn on light",
    },
    {
      text: "NexAi, is the front door locked?",
    },
    {
      text: "NexAi, Turn off light",
    },
    {
      text: "NexAi, Switch of fan",
    },
    {
      text: "NexAi, Turn on TV",
    },
    {
      text: "NexAi, Turn on music",
    },
    {
      text: "NexAi, Turn of AC.",
    },
    {
      text: "NexAi, Lock the front door",
    },
  ];
  const settings1 = {
    infinite: true,
    speed: 5000,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 0,
    cssEase: "Linear",
  };
  const settings2 = {
    infinite: true,
    speed: 5000,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    variableWidth: true,
    autoplaySpeed: 0,
    cssEase: "Linear",
    rtl: true,
  };
  return (
    <>
      <div className="pt-12 sm:pt-[200px] relative">
        <h2 className="f-recharge font-bold text-[25px] sm:text-[40px] sm:leading-[50.4px] text-center text-[#02CDCF] mb-4 px-3">
          NexAi does all this. And more.
        </h2>
        <p className="font-poppins font-normal text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.7)] max-w-[922px] w-full mx-auto px-3 mb-7 sm:mb-[70px]">
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <Slider className="slider2 h-[200px] sm:h-[260px]" {...settings1}>
          {boxdata.map((data, index) => (
            <div
              key={index}
              className={`!w-[280px] sm:!w-[340px] !h-[160px] sm:!h-[220px] rounded-[16px] shadow-[0px_4px_20px_0px_#02CDCF29] bg-[rgba(255,255,255,0.02)] !flex justify-center ${
                index == 1 || index == 2 || index == 3
                  ? "items-center"
                  : index == 6 || index == 8 || index == 12
                  ? "pt-[34px]"
                  : "pt-[59px]"
              }`}
            >
              <p
                className={`f-recharge font-bold text-xl sm:text-[24px] sm:leading-[38.4px] text-center text-white ${
                  index == 5 ? "max-w-[278px]" : "max-w-[254px]"
                }`}
              >
                {data.text}
              </p>
            </div>
          ))}
        </Slider>
        <Slider className="slider2 h-[200px] sm:h-[260px]" {...settings2}>
          {boxdata.map((data, index) => (
            <div
              key={index}
              className={`!w-[280px] sm:!w-[340px] !h-[160px] sm:!h-[220px] rounded-[16px] shadow-[0px_4px_20px_0px_#02CDCF29] bg-[rgba(255,255,255,0.02)] !flex justify-center ${
                index == 1 || index == 2 || index == 3
                  ? "items-center"
                  : index == 6 || index == 8 || index == 12
                  ? "pt-[34px]"
                  : "pt-[59px]"
              }`}
            >
              <p
                className={`f-recharge font-bold text-xl sm:text-[24px] sm:leading-[38.4px] text-center text-white ${
                  index == 5 ? "max-w-[278px]" : "max-w-[254px]"
                }`}
              >
                {data.text}
              </p>
            </div>
          ))}
        </Slider>
        <Slider className="slider2 h-[200px] sm:h-[260px]" {...settings1}>
          {boxdata.map((data, index) => (
            <div
              key={index}
              className={`!w-[280px] sm:!w-[340px] !h-[160px] sm:!h-[220px] rounded-[16px] shadow-[0px_4px_20px_0px_#02CDCF29] bg-[rgba(255,255,255,0.02)] !flex justify-center ${
                index == 1 || index == 2 || index == 3
                  ? "items-center"
                  : index == 6 || index == 8 || index == 12
                  ? "pt-[34px]"
                  : "pt-[59px]"
              }`}
            >
              <p
                className={`f-recharge font-bold text-xl sm:text-[24px] sm:leading-[38.4px] text-center text-white ${
                  index == 5 ? "max-w-[278px]" : "max-w-[254px]"
                }`}
              >
                {data.text}
              </p>
            </div>
          ))}
        </Slider>
        {/* ellipse */}
        <img
          className="w-[205px] h-[202px] hidden sm:block absolute top-0 left-[-20%] md:left-[-15%] lg:left-[-12%] xl:left-[-10%]"
          src={ring2}
          alt="ring"
        />
        <div className="absolute w-[116px] sm:w-[233px] h-[116px] sm:h-[233px] rounded-[50%] bg-[#02CDCF] top-[123px] sm:top-0 lg:top-[103px] right-[-90px] sm:right-[-160px] xl:right-[-140px] blur-[100px] sm:blur-[150px]"></div>
      </div>
    </>
  );
}

export default Section4;
