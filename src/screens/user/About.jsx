import React from "react";
import aboutimg1 from "../../assets/aboutimg1.png";
import vector from "../../assets/vector.png";
import circle from "../../assets/circle.png";
import cardbg from "../../assets/website/bgcard.png";
import card1 from "../../assets/website/card1.png";
import card2 from "../../assets/website/card2.png";

const About = () => {
  return (
    <>
      <section className="bg-[#151515] relative text-white py-16 px-6 md:px-[13rem] ">
        <div className="w-full h-full bg-[#1f2022] rounded-3xl ">
          {/* top  */}
          <div
            id="top"
            className="flex w-full mt-[5rem] h-full max-sm:flex-col max-sm:items-center max-sm:text-center"
          >
            <div
              id="top-left"
              className="w-1/2 pt-[10rem] pl-20 max-sm:w-full max-sm:pt-10 max-sm:pl-4 max-sm:pr-4"
            >
              <h6 className="gradient-text max-sm:text-sm">
                Digital Experience
              </h6>
              <h3 className="text-[3.5rem] mt-4 max-sm:text-2xl">
                Intuitive design for navigation and interaction.
              </h3>
              <p className="text-xl mt-4 max-sm:text-base">
                Whether You are a beginner or an expert, our platform supports
                various popular wallets to ensure easy integration.
              </p>
            </div>

            <div
              id="topright"
              className="w-1/2 relative top-[-12rem] max-sm:top-0 max-sm:w-full max-sm:flex max-sm:justify-center max-sm:mt-6"
            >
              <img
                src={aboutimg1}
                alt="about image"
                className="abslute z-90 ml-20 w-[37rem] max-sm:ml-0 max-sm:w-64"
              />
            </div>
          </div>

          {/* bottom  */}
          <div
            id="bottom"
            className="w-full relative flex justify-center items-center h-[15rem] pl-20 max-sm:flex-col max-sm:pl-4 max-sm:pr-4 max-sm:h-auto max-sm:gap-6"
          >
            <div id="bleft" className="w-1/3 max-sm:w-full max-sm:text-center">
              <button className="custom-gradient-button max-sm:w-full">
                Get Started For Free
              </button>
              <p className="text-[1.2rem] mt-4 max-sm:text-base">
                No Account Needed to Start
              </p>
            </div>

            <div
              id="bright"
              className="w-2/3 flex h-full gap-10 p-10 bg-[#151515] rounded-tl-3xl 
               max-sm:w-full max-sm:flex-col max-sm:gap-4 max-sm:p-4 max-sm:rounded-tl-xl"
            >
              <div className="w-1/2 bg-[#1f2022] rounded-3xl p-4 max-sm:w-full">
                <div className="flex gap-4 items-center">
                  <img src={vector} alt="" className="w-[1.5rem]" />
                  <h6 className="text-[1.2rem] max-sm:text-base">
                    Connect Your Wallet
                  </h6>
                </div>
                <p className="text-[1rem] mt-4 max-sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur. Diam et quis sit
                  pretium orci. At feugiat duis parturient amet scelerisque enim
                  vulputate tortor.
                </p>
              </div>
              <div className="w-1/2 bg-[#1f2022] rounded-3xl p-4 max-sm:w-full">
                <div className="flex gap-4 items-center">
                  <img src={circle} alt="" className="w-[1.5rem]" />
                  <h6 className="text-[1.2rem] max-sm:text-base">
                    Explore Decentralized Apps
                  </h6>
                </div>
                <p className="text-[1rem] mt-4 max-sm:text-sm">
                  Lorem ipsum dolor sit amet consectetur. Diam et quis sit
                  pretium orci. At feugiat duis parturient amet scelerisque enim
                  vulputate tortor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DECENTRALIZED FUTURE */}
        <div className="relative h-[25rem] py-24">
          {/* overlay  rotate  */}
          <div
            id="overlay"
            className="w-[16rem]  h-[16rem] rounded-full bg-[#2a2a2a] absolute opacity-50 animate-orbit"
          ></div>
          {/* DECENTRALIZED FUTUREs */}

          <div className="absolute text-center text-white">
            <h6 className="text-start text-[#86D9EE] text-xl mt-10">
              DECENTRALIZED FUTURE
            </h6>
            <h2 className="text-white font-poppins text-[4rem] font-semibold leading-normal text-start mt-4">
              Empower your digital <br /> experience with Web3Go
            </h2>

            <p className="text-start text-lg mt-4 ">
              Whether you are a beginner or an expert, our platform supports{" "}
              <br /> various popular wallets to ensure easy integration.
            </p>
          </div>
        </div>
      </section>
      {/* cards  */}
      <section className="bg-[#151515] relative text-white py-16 px-6 md:px-[13rem]">
        <div
          id="cards"
          className="flex justify-center items-center gap-20 mt-20 max-sm:flex-col max-sm:gap-8 max-sm:mt-8"
        >
          <div className="w-1/2 max-sm:w-full">
            <div
              id="leftcard"
              className="bg-[#1f1f20] rounded-3xl p-8 relative"
            >
              <p className="gradient-text">MULTI-CHAIN INTEGRATION</p>
              <h3 className="text-[3rem] max-sm:text-2xl">
                Seamless Multi-Chain Integration
              </h3>
              <p className="text-start text-lg mt-4 max-sm:text-base">
                Access and interact with multiple blockchains effortlessly,
                allowing users to explore and interact with various ecosystems.
              </p>
              <div
                style={{
                  backgroundImage: `url(${cardbg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover", // or 'contain' based on your image design
                }}
                className="flex justify-center items-center mt-10 max-sm:mt-6"
              >
                <img
                  src={card1}
                  alt=""
                  className="w-[35rem] max-sm:w-full max-sm:h-[200px] object-contain"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 max-sm:w-full">
            <div
              id="leftcard"
              className="bg-[#1f1f20] rounded-3xl p-8 relative"
            >
              <p className="text-start gradient-text">
                MULTI-CHAIN INTEGRATION
              </p>
              <h3 className="text-[3rem] max-sm:text-2xl">
                Seamless Multi-Chain Integration
              </h3>
              <p className="text-start text-lg mt-4 max-sm:text-base">
                Access and interact with multiple blockchains effortlessly,
                allowing users to explore and interact with various ecosystems.
              </p>
              <div
                style={{
                  backgroundImage: `url(${cardbg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover", // or 'contain' based on your image design
                }}
                className="flex justify-center items-center mt-10 max-sm:mt-6"
              >
                <img
                  src={card2}
                  alt=""
                  className="w-[29rem] max-sm:w-full max-sm:h-[200px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
