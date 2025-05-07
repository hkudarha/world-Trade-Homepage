import React from "react";
import t1 from "../../assets/website/t1.png";
import t2 from "../../assets/website/t2.png";
import t3 from "../../assets/website/t3.png";
import tl from "../../assets/website/Group 1321317279.png";
import t4 from "../../assets/website/t4.png";
import t5 from "../../assets/website/t5.png";
import t6 from "../../assets/website/t6.png";
import "../../styles/buttons.css";

const AdvancedFeatures = () => {
  return (
    <section className="bg-[#151515] relative text-white py-16 px-6 md:px-[13rem] ">
      {/* Top  Heading */}
      <div className="flex-col justify-center items-center mb-10">
        <h6 className="text-center gradient-text">ADVANCED FEATURES</h6>
        <h2 className="text-[3.5rem] text-center mt-4">
          Explore the Decentralized Future
        </h2>
        <p className="text-center text-lg mt-4 ">
          Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium orci.
          <br /> At feugiat duis parturient amet scelerisque enim vulputate
          tortor.
        </p>
      </div>

      {/* part 1 */}

      <div
        id="part1"
        className="w-full h-full flex mt-10 max-sm:flex-col max-sm:gap-8"
      >
        {/* left */}
        <div className="w-1/2 p-10 max-sm:w-full max-sm:px-4">
          <div className="border border-[#494848] p-10 rounded-3xl">
            <div className="border border-[#464646] p-10 rounded-3xl">
              <h6 className="text-[1.3rem]">Transactions</h6>
              <p className="text-[1rem] mt-10">Today</p>

              <div className="border border-[#464646] p-8 mt-10 rounded-3xl flex items-center justify-between">
                <img src={t1} alt="" className="w-[3rem]" />
                <p>+34.89</p>
              </div>
              <div className="border border-[#464646] p-8 mt-10 rounded-3xl flex items-center justify-between">
                <img src={t2} alt="" className="w-[3rem]" />
                <p>+34.89</p>
              </div>
              <p className="text-[1rem] mt-10">Today</p>

              <div className="border border-[#464646] p-8 mt-10 rounded-3xl flex items-center justify-between">
                <img src={t3} alt="" className="w-[3rem]" />
                <p>+34.89</p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-1/2 p-10 flex items-center max-sm:w-full max-sm:p-4">
          <div className="bg-[#1F1F20B2] p-10 max-sm:p-6">
            <h3 className="text-[2.7rem] max-sm:text-[2rem]">
              Access Cutting-Edge Financial Tools and Services
            </h3>
            <p className="text-[1rem] mt-10 max-sm:text-sm">
              Access and interact with multiple blockchains
            </p>

            <div className="w-full flex items-center justify-center gap-10 mt-10 max-sm:flex-col max-sm:gap-4">
              <div className="w-1/2 max-sm:w-full">
                <img src={tl} alt="" className="w-[7rem] max-sm:w-[5rem]" />
                <h6 className="text-[1.3rem] mt-4 max-sm:text-base">
                  Yield Farming
                </h6>
                <p className="text-[1rem] mt-4 max-sm:text-sm">
                  Participants in Yield farming have the opportunity to earn
                  returns
                </p>
              </div>
              <div className="w-1/2 max-sm:w-full">
                <img src={tl} alt="" className="w-[7rem] max-sm:w-[5rem]" />
                <h6 className="text-[1.3rem] mt-4 max-sm:text-base">
                  Yield Farming
                </h6>
                <p className="text-[1rem] mt-4 max-sm:text-sm">
                  Participants in Yield farming have the opportunity to earn
                  returns
                </p>
              </div>
            </div>

            <button className="black_btn px-6 py-3 text-[1rem] mt-10 max-sm:px-4 max-sm:py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* part 2 */}

      <div
        id="part2"
        className="w-full h-full flex mt-10 max-sm:flex-col max-sm:gap-8"
      >
        {/* part2 left */}
        <div className="w-1/2 p-10 flex items-center max-sm:w-full max-sm:px-4">
          <div>
            <h3 className="text-[2.7rem] max-sm:text-2xl">
              Seamless Multi- <br />
              Chain Integration
            </h3>
            <p className="mt-4 text-[1rem] max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
              orci. At feugiat duis parturient amet scelerisque enim vulputate
              tortor.
            </p>
            <p className="mt-4 text-[1rem] max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
              orci. At feugiat duis parturient amet scelerisque enim vulputate
              tortor.
            </p>
            <p className="mt-4 text-[1rem] max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
              orci. At feugiat duis parturient amet scelerisque enim vulputate
              tortor.
            </p>
            <p className="mt-4 text-[1rem] max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
              orci. At feugiat duis parturient amet scelerisque enim vulputate
              tortor.
            </p>
            <button className="black_btn px-6 py-3 text-[1rem] rounded-full mt-10 max-sm:px-4 max-sm:py-2">
              Learn More
            </button>
          </div>
        </div>

        {/* part3 right */}
        <div className="w-1/2 p-10 max-sm:w-full max-sm:px-4">
          <div className="border border-[#494848] p-10 rounded-3xl">
            <div className="bg-[#262626] px-6 py-4 rounded-3xl flex items-center justify-between mt-4">
              <img src={t1} alt="" className="w-[3rem]" />
              <p className="text-[1rem] mr-[3rem]">5</p>
            </div>

            <div className="bg-[#262626] px-6 py-4 rounded-3xl flex items-center justify-between mt-4">
              <img src={t2} alt="" className="w-[3rem]" />
              <p className="text-[1rem] mr-[3rem]">5</p>
            </div>

            <div className="bg-[#262626] px-6 py-4 rounded-3xl flex items-center justify-between mt-4">
              <img src={t3} alt="" className="w-[3rem]" />
              <p className="text-[1rem] mr-[3rem]">5</p>
            </div>

            <div className="bg-[#262626] px-6 py-4 rounded-3xl flex items-center justify-between mt-4">
              <img src={t4} alt="" className="w-[3rem]" />
              <p className="text-[1rem] mr-[3rem]">5</p>
            </div>

            <div className="bg-[#262626] px-6 py-4 rounded-3xl flex items-center justify-between mt-4">
              <img src={t5} alt="" className="w-[3rem]" />
              <p className="text-[1rem] mr-[3rem]">5</p>
            </div>

            <div className="bg-[#262626] px-6 py-4 rounded-3xl flex items-center justify-between mt-4">
              <img src={t6} alt="" className="w-[3rem]" />
              <p className="text-[1rem] mr-[3rem]">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* part 3 */}

      <div
        id="part3"
        className="w-full h-full flex mt-10 max-sm:flex-col-reverse max-sm:gap-8"
      >
        {/* part3 left */}
        <div className="w-1/2 p-10 max-sm:w-full max-sm:px-4">
          <div className="border border-[#494848] p-10 rounded-3xl">
            <div className="border border-[#464646] p-10 rounded-3xl">
              <p>Selling</p>
              <div className="flex gap-5 items-center mt-5">
                <img src={t1} alt="" className="w-[3rem]" />
                <p>Learn More</p>
              </div>
            </div>

            <div className="border border-[#464646] p-10 rounded-3xl mt-5">
              <p>Selling</p>
              <div className="flex gap-5 items-center mt-5">
                <img src={t1} alt="" className="w-[3rem]" />
                <p>Learn More</p>
              </div>
            </div>
          </div>
        </div>

        {/* part3 right */}
        <div className="w-1/2 p-10 flex items-center max-sm:w-full max-sm:px-4 max-sm:flex-col">
          <div>
            <h3 className="text-[2.7rem] max-sm:text-xl">
              Seamless Multi- <br />
              Chain Integration
            </h3>
            <p className="mt-4 text-[1rem] max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
              orci. At feugiat duis parturient amet scelerisque enim vulputate
              tortor.
            </p>
            <p className="mt-4 text-[1rem] max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
              orci. At feugiat duis parturient amet scelerisque enim vulputate
              tortor.
            </p>
            <p className="mt-4 text-[1rem] max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
              orci. At feugiat duis parturient amet scelerisque enim vulputate
              tortor.
            </p>
            <p className="mt-4 text-[1rem] max-sm:text-sm">
              Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
              orci. At feugiat duis parturient amet scelerisque enim vulputate
              tortor.
            </p>
            <button className="black_btn px-6 py-3 text-[1rem] mt-10 max-sm:px-4 max-sm:py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
