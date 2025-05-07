import React from "react";
import fram from "../../assets/website/fram.png";
import "../../styles/website/UserHome.css";
import countrybgimg2 from "../../assets/countrybgimg2.png";
import Navbar from "./Navbar";
import "../../styles/buttons.css";
import video1 from "../../assets/0_Circuit Board_Technology_1920x1080.mp4";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[100vh] text-white overflow-hidden"
      style={{
        backgroundImage: `url(${fram})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img
        src={countrybgimg2}
        className="absolute bottom-0 right-0 z-10 w-[70rem]"
        alt=""
      />
      {/* Overlay */}
      <div className="absolute  w-full h-full py-16 px-6  bg-black opacity-50 z-10" />

      <Navbar />

      {/* Optional Content */}
      <div className="relative w-full sm:mt-0 mt-[10rem] z-20  px-6 md:px-[13rem] flex items-center justify-center h-full max-sm:flex-col">
        {/* left  */}
        <div className="w-full  mb-[10rem] sm:w-1/2 flex-col justify-center ">
          <h1 className="text-white text-center md:!text-left font-switzer text-[5.625rem] font-normal leading-normal">
            Unlock New <br />
            Possibilities <br />
            With Blockchain
          </h1>

          <p className="text-[1.4rem] mt-5 text-center md:!text-left ">
            Experience the Future of the Internet with Secure, Transparent
            Solution
          </p>

          <div className="mt-5 flex  items-center gap-5 w-full ">
            <button className="custom-gradient-button">
              Get Started For Free
            </button>

            <button className="black_btn px-7 text-[1.5rem] py-4 text-white font-semibold">
              Get Started For Free
            </button>
          </div>
        </div>
        {/* right */}
        <div className="w-full py-[10rem] mb-[10rem] sm:w-1/2 flex justify-center items-center h-full">
          <video
            autoPlay
            muted
            loop
            src={video1}
            className="w-full h-full   object-cover rounded-3xl  shadow-lg !relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
