import React from "react";
import { Facebook, Telegram, Twitter } from "./Icons";
import logo from "../assets/images/logo.webp";

function Footer() {
  return (
    <>
      <div id="footer" className="pt-12 sm:pt-[89px] relative">
        <div className="md:min-h-[492px] bg-footerbg bg-bottom bg-cover w-full">
          <div className="max-w-[1164px] mx-auto px-3 md:min-h-[431px] gap-y-6 w-full md:justify-between flex flex-col md:flex-row" data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1000">
            <div className="max-w-[356px] md:h-[286px] flex flex-col justify-end md:pt-[31px]">
              <a href="#home">
                <img className="w-[50px] mb-5" src={logo} alt="logo" />
              </a>
              <p className="f-recharge font-bold text-base leading-[25.6px] text-[rgba(255,255,255,0.7)] md:mb-5">
                Nullam viverra natoque amet et sed scelerisque viverra fringilla
                platea. Ullamcorper.
              </p>
              <div className="gap-3 hidden md:flex">
                <a
                  className="hover:translate-y-[-5px] duration-300"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a
                  className="hover:translate-y-[-5px] duration-300"
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                >
                  <Twitter />
                </a>
                <a
                  className="hover:translate-y-[-5px] duration-300"
                  href="https://web.telegram.org/k/"
                  target="_blank"
                >
                  <Telegram />
                </a>
              </div>
            </div>
            <div className="md:min-h-[431px] flex items-end max-w-[395px] w-full">
              <div className="max-w-[395px] w-full flex justify-between md:justify-around lg:justify-between md:mb-[30px]">
                <ul className="flex flex-col gap-y-2 sm:gap-y-5 relative">
                  <li className="f-recharge font-bold text-lg leading-[21.6px] text-white">
                    Quick links
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#home"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#section1"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#section2"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#tokens"
                    >
                      Tokens
                    </a>
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#next"
                    >
                      NexChat
                    </a>
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                </ul>
                <ul className="flex flex-col gap-y-2 sm:gap-y-5 relative">
                  <li className="f-recharge font-bold text-lg leading-[21.6px] text-white">
                    Information's
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#footer"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#footer"
                    >
                      Phone
                    </a>
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#footer"
                    >
                      terms
                    </a>
                  </li>
                  <li>
                    <a
                      className="f-recharge font-bold text-base leading-[19.2px] text-[rgba(255,255,255,0.7)] relative after:absolute after:bottom-0 after:left-[50%] after:h-[1px] after:bg-[rgba(255,255,255,0.7)] after:w-0 after:duration-300 hover:after:left-0 hover:after:w-full"
                      href="#footer"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex md:hidden gap-3">
              <a
                className="hover:translate-y-[-5px] duration-300"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <Facebook />
              </a>
              <a
                className="hover:translate-y-[-5px] duration-300"
                href="https://twitter.com/?lang=en"
                target="_blank"
              >
                <Twitter />
              </a>
              <a
                className="hover:translate-y-[-5px] duration-300"
                href="https://web.telegram.org/k/"
                target="_blank"
              >
                <Telegram />
              </a>
            </div>
          </div>
          <div className="max-w-[1164px] mx-auto px-3 h-[2px] bg-[rgba(252,252,252,0.4)] rounded-[16px] mt-6 md:mt-0"></div>
          <p className="f-recharge font-bold text-base leading-[19.2px] text-center text-[rgba(255,255,255,0.7)] py-5">
            @Copyright.nexai
          </p>
        </div>
        <div className="absolute w-[114px] sm:w-[228px] h-[114px] sm:h-[228px] rounded-[50%] bg-[#02CDCF] top-0 right-[-12%] blur-[90px] sm:blur-[150px]"></div>
      </div>
    </>
  );
}

export default Footer;
