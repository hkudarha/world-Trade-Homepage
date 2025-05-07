import React from "react";
import t1 from "../../assets/website/t1.png";
import t2 from "../../assets/website/t2.png";
import t3 from "../../assets/website/t3.png";
import t4 from "../../assets/website/t4.png";
import t5 from "../../assets/website/t5.png";
import t6 from "../../assets/website/t6.png";

const DecentralizedFuture = () => {
  return (
    <section className="bg-[#0f0f0f] flex-col justify-center relative text-white py-16 px-6 md:px-[13rem] items-center ">
      {/* Top  Heading */}
      <div className="flex-col justify-center items-center mb-10">
        <h6 className="text-center gradient-text">
          Decentralized Future
        </h6>
        <h2 className="text-[3.5rem] text-center mt-4">
          The next generation of the internet
        </h2>
        <p className="text-center text-lg mt-4 ">
          Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium orci.
          At feugiat duis parturient amet scelerisque enim vulputate tortor.
        </p>
      </div>

      {/* icons  */}
      <div className="flex gap-5 mx-auto items-center  w-max">
        <img src={t1} alt="" className="w-[4.5rem]" />
        <img src={t2} alt="" className="w-[4.5rem]" />
        <img src={t3} alt="" className="w-[4.5rem]" />
        <img src={t4} alt="" className="w-[4.5rem]" />
        <img src={t5} alt="" className="w-[4.5rem]" />
        <img src={t6} alt="" className="w-[4.5rem]" />
      </div>
      <div className="flex gap-5 mx-auto items-center mt-10 w-max">
        <img src={t1} alt="" className="w-[4.5rem]" />
        <img src={t2} alt="" className="w-[4.5rem]" />
        <img src={t3} alt="" className="w-[4.5rem]" />
        <img src={t4} alt="" className="w-[4.5rem]" />
        <img src={t5} alt="" className="w-[4.5rem]" />
        <img src={t6} alt="" className="w-[4.5rem]" />
      </div>
    </section>
  );
};

export default DecentralizedFuture;
