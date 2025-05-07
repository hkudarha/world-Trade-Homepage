// BitcoinChart.jsx
import React from "react";
import b1 from "../../assets/website/Group 1321317423.png";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaChevronDown } from "react-icons/fa";

const data = [
  { name: "Mon", value: 41000 },
  { name: "Tue", value: 34500 },
  { name: "Wed", value: 50000 },
  { name: "Thu", value: 62500 },
  { name: "Thu", value: 47500 },
  { name: "Thu", value: 32500 },
  { name: "Fri", value: 61800 },
  { name: "Sat", value: 43000 },
  { name: "Sun", value: 62458 },
];

const DecentralizedFuture2 = () => {
  return (
    <>
      {/* section1  */}
      <section className="bg-[#151515] overflow-x-hidden relative text-white py-16 px-6 md:px-[13rem] ">
        {/* Top  Heading */}
        <div className="flex-col justify-center items-center mb-10">
          <h6 className="gradient-text text-center">Decentralized Future</h6>
          <h2 className="text-[3.5rem] text-center mt-4">
            Real-time exchange rates
          </h2>
          <p className="text-center text-lg mt-4 ">
            Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
            orci. At <br /> feugiat duis parturient amet scelerisque enim
            vulputate tortor.
          </p>
        </div>
        <div className="bg-[#1E1E1E] mx-auto mb-10 rounded-2xl p-10 sm:p-16 w-[400px] md:w-[500px]">
          {/* Header */}
          <div className="flex  justify-between items-center mb-4">
            <div className="flex items-center gap-5">
              <img src={b1} alt="" className="w-[4rem]" />

              <p className="text-white font-semibold text-lg">
                1 BTC = $ 32,458.00
              </p>
            </div>
            <div className="custom-gradient-button flex justify-between items-center">
              This Week <FaChevronDown className="ml-2 text-sm" />
            </div>
          </div>

          {/* Chart */}
          <div className="h-[25rem] w-full mx-auto overflow-hidden relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#429461" stopOpacity={0.6} />
                    <stop offset="90%" stopColor="#439063" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#00FF5F"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* section 2  */}
      <section className="bg-[#1D1E1E] w-full relative text-white py-16 px-6 md:px-[13rem] overflow-hidden">
        <div className="">
          <h6 className="gradient-text">DEIGITAL EXPERIENCE</h6>
          <h2 className="text-[3.5rem] text-start mt-4">
            Join the web3 <br />
            revolution with Next3Gen
          </h2>
          <p className="text-start text-lg mt-4 ">
            Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium
            orci. At <br /> feugiat duis parturient amet scelerisque enim
            vulputate tortor.
          </p>

          <div className="mt-5 flex  items-center gap-5 w-full">
            <button className="custom-gradient-button">
              Get Started For Free
            </button>

            <button className="px-7 text-[1.5rem] py-4 rounded-full bg-[#222222] text-white  font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DecentralizedFuture2;
