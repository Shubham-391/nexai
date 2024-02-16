import React from "react";
import Slider from "react-slick";
import ringright from "../assets/images/ringright.webp";

function Section3() {
  const hexdata = [
    {
      heading: "1",
      para: "Security and Privacy",
    },
    {
      heading: "2",
      para: "Transparent and Reliable Data Management",
    },
    {
      heading: "3",
      para: "Self-learning and Personalization",
    },
    {
      heading: "4",
      para: "Automated and Transparent Transactions",
    },
  ];
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "Linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          dots: true,
          autoplay: false,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <>
      <div className="pt-12 md:pt-24 min-[1200px]:pt-[160px] overflow-hidden px-3 sm:px-0 pb-5 md:pb-0 relative">
        <h2 className="f-recharge font-bold text-[25px] sm:text-[40px] sm:leading-[50.4px] text-[#02CDCF] text-center mb-4 mx-auto px-3 relative z-[1]">
          Blockchain & AI technology
        </h2>
        <p className="max-w-[1015px] w-full font-poppins font-normal text-base leading-[25.6px] text-center text-[rgba(255,255,255,0.7)] mx-auto px-3 mb-12 sm:mb-24 relative z-[1]">
          Nexai is an advanced home assistant that will revolutionize the way we
          interact with our smart devices at home. Powered by sophisticated
          artificial intelligence, it leverages blockchain technology to offer a
          secure and efficient user experience.
        </p>
        <p className="max-w-[684px] w-full f-recharge font-bold text-xl leading-[32px] text-center text-white mx-auto px-3 mb-[30px] sm:mb-[60px] relative z-[1]">
          By building the software on blockchain, Nexai provides the following
          advantages
        </p>
        <Slider
          {...settings}
          className="min-[1200px]:max-w-[1302px] w-full min-[1200px]:ml-auto section3slider relative z-[1]"
        >
          {hexdata.map((data, index) => (
            <div
              key={index}
              className={`sm:h-[478px] !flex ${
                index == 0 || index == 2 ? "items-start" : "sm:items-end"
              }`}
            >
              <div className="bg-hexagonbg bg-center bg-cover bg-no-repeat w-[310px] sm:w-[367px] h-[310px] sm:h-[367px] !flex flex-col items-center">
                <div className="w-[58px] h-[58px] bg-[#040404] shadow-[0px_4px_16px_0px_#02CDCF99_inset] rounded-[50%] flex justify-center items-center f-recharge font-bold text-[25px] sm:text-[32px] leading-[51.2px] text-center text-white mt-[70px] mb-[30px]">
                  {data.heading}
                </div>
                <p className="max-w-[212px] w-full f-recharge font-bold text-xl leading-[32px] text-center text-white">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        {/* ellipse */}
        <img
          className="absolute hidden sm:block w-[114px] lg:w-[229px] lg:h-[226px] top-[23%] lg:top-[20%] min-[1200px]:top-[7%] right-[-9%] lg:right-[-15%] min-[1200px]:right-[-11%]"
          src={ringright}
          alt="ring"
        />
        <div className="w-[151px] md:w-[302px] h-[131px] md:h-[262px] rounded-[50%] absolute bg-[#02CDCF] top-[21%] right-[-12%] blur-[90px] md:blur-[150px]"></div>
        <div className="w-[151px] lg:w-[302px] h-[131px] lg:h-[262px] rounded-[50%] bg-[#02CDCF] absolute top-[35%] left-[-20%] sm:left-[-10%] lg:left-[-21%] xl:left-[-15%] blur-[80px] lg:blur-[150px]"></div>
      </div>
    </>
  );
}

export default Section3;
