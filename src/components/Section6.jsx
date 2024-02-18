import React from "react";
import section6hand from "../assets/images/section6hand.webp";
import section6ring from "../assets/images/section6ring.webp";

function Section6() {
  const section6data = [
    {
      heading: "Purchasing Nexai Products",
      para: "Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.",
    },
    {
      heading: "Accessing Exclusive Content",
      para: "By holding Nex AI tokens, users will gain privileged access to exclusive content within the Nexai platform. These tokens will unlock premium features, advanced functionalities, and specialized services, enabling users to fully explore and enjoy the enhanced capabilities of Nexai's ecosystem.",
    },
    {
      heading: "Loyalty and Rewards",
      para: "The Nexai ecosystem will feature a robust loyalty program, rewarding users with Nex AI tokens for their active engagement, ongoing participation, and dedicated usage of Nexai's products and services. Token holders will have the opportunity to redeem their accumulated rewards for discounts, incentives, or exclusive offers, fostering a strong sense of loyalty and encouraging continued involvement.",
    },
    {
      heading: "Participating in Governance",
      para: "Nex AI token holders will play a vital role in the governance of the Nexai ecosystem. Through voting mechanisms, token holders will have a direct say in the decision-making process. They can express their opinions, vote on proposed changes or improvements, and actively contribute to shaping the future development and direction of the Nexai ecosystem.",
    },
    {
      heading: "Peer-to-Peer Transactions",
      para: "Nex AI tokens will enable seamless peer-to-peer transactions within the Nexai community. Users will have the ability to exchange tokens with others for various purposes, such as purchasing pre-owned Nexai devices, engaging in token trading activities, or conducting value exchanges directly within the ecosystem, all with the utmost security and convenience.",
    },
    {
      heading: "Token Staking and Rewards",
      para: "Nex AI tokens will support staking mechanisms, allowing users to lock up their tokens for a specified period. By staking their tokens, users will earn additional rewards, such as interest, dividends, or other incentives, further incentivizing token holding and fostering long-term engagement and loyalty.",
    },
  ];
  return (
    <>
      <div id="tokens" className="pt-12 sm:pt-[160px] relative">
        <h2
          className="f-recharge font-bold text-[25px] sm:text-[40px] sm:leading-[50.4px] text-center text-[#02CDCF]"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          NexAI Token & utility
        </h2>
        <div className="max-w-[1304px] w-full mx-auto px-3 flex flex-wrap">
          <div className="w-full min-[1200px]:w-[45%] flex justify-center min-[1200px]:justify-start">
            <div
              className="max-w-[572px] sm:h-[529px] w-full"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              <img
                className="object-cover w-full h-full"
                src={section6hand}
                alt="hand"
              />
            </div>
          </div>
          <div className="w-full min-[1200px]:w-[55%] flex justify-center min-[1200px]:justify-start">
            <div
              className="max-w-[620px] h-[449px] flex flex-col items-end w-full overflow-y-auto min-[1200px]:mt-[110px] min-[1200px]:ml-[17px] pl-10"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="1000"
            >
              {section6data.map((data, index) => (
                <div
                  key={index}
                  className={`max-w-[536px] w-full relative before:absolute before:w-[8px] before:h-full before:bg-[#02CDCF] before:left-[-32px] ${
                    index == 5 ? "pb-0" : "pb-[30px] sm:pb-[60px]"
                  } ${
                    index == 0
                      ? "before:rounded-t-[15px]"
                      : index == 5
                      ? "before:rounded-b-[15px]"
                      : ""
                  }`}
                >
                  <h3 className="f-recharge font-bold text-xl sm:text-[24px] sm:leading-[31.2px] text-white mb-4">
                    {data.heading}
                  </h3>
                  <p className="font-poppins font-normal text-base leading-[25.6px] text-[rgba(255,255,255,0.7)] relative before:absolute before:w-[24px] before:h-[24px] before:bg-[#FCFCFC] before:rounded-[50%] before:top-[40px] before:left-[-40px]">
                    {data.para}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ellipse */}
        <div className="w-[114px] md:w-[228px] h-[114px] md:h-[228px] rounded-[50%] bg-[#02CDCF] absolute top-[15%] left-[-12%] blur-[100px] md:blur-[150px]"></div>
        <img
          className="absolute hidden md:block w-[209px] h-[207px] top-[1%] right-[-15%] lg:right-[-9%]"
          src={section6ring}
          alt="ring"
        />
        <div className="w-[114px] md:w-[228px] h-[114px] z-[-1] md:h-[228px] rounded-[50%] bg-[#02CDCF] absolute bottom-[8%] right-[-10%] md:right-[-15%] xl:right-[-10%] blur-[90px] md:blur-[150px]"></div>
      </div>
    </>
  );
}

export default Section6;
