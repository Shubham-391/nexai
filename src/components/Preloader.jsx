import React from "react";
import aiglobe from "../assets/images/aiglobe.webp";

function Preloader() {
  setTimeout(() => {
    document.getElementById("Preloader").classList.add("hidden");
    document.body.classList.remove("!overflow-hidden");
  }, 2000);
  return (
    <>
      <div
        id="Preloader"
        className="h-screen bg-[#040404] flex flex-col gap-4 justify-center items-center fixed top-0 left-0 w-full z-30 "
      >
        <p className="text-[#02CDCF] text-bold f-recharge text-[64px] md:text-9xl animate-pulse">
          Ai
        </p>
        <div className="loader w-[50px] h-[50px] relative border-[5px] border-solid border-[#555] border-t-[#f9f9f9] rounded-[50%] animate-spin"></div>
      </div>
    </>
  );
}

export default Preloader;
