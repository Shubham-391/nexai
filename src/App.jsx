import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Backtotop from "./components/Backtotop";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Preloader />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />
        <Backtotop />
      </div>
    </>
  );
}

export default App;
