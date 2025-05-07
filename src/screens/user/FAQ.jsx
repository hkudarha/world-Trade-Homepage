import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import countrybgimg2 from "../../assets/countrybgimg2.png";

const faqs = [
  {
    question: "The expense windows adapted sir. Wrong widen drawn.",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
  },
  {
    question: "Six curiosity day assurance bed necessary?",
    answer:
      "Unlike volatile assets like Bitcoin or Ethereum, NexoCoin is a stablecoin — designed to maintain a consistent value, offering a reliable option for trading, hedging, and DeFi use cases.",
  },
  {
    question: "Produce say the ten moments parties?",
    answer:
      "Details about its stability mechanism are crucial — whether it is pegged to fiat currencies or backed by assets. Always research to understand how NexoCoin maintains its consistent value.",
  },
  {
    question: "Simple innate summer fat appear basket his desire joy?",
    answer:
      "Currently, NexoCoin is exclusively available for trading on the official NexoInvest platform: www.nexoinvest.org.",
  },
  {
    question: "Outward clothes promise at gravity do excited?",
    answer:
      "Before investing, it's important to check for transparency, the team's credibility, platform security, and the regulatory status of NexoCoin in your region.",
  },
  
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#151515] sm:min-h-screen py-14 sm:py-0 flex items-center justify-center px-4  relative">
      <div className="w-full max-w-6xl">
        <h6 className="text-center gradient-text">Fequently asked questions</h6>
        <h2 className="text-white text-[4rem] font-bold text-center mb-8">
        Question and answers
        </h2>
        <p  className="text-center text-lg my-4 ">Lorem ipsum dolor sit amet consectetur. Diam et quis sit pretium orci. At feugiat duis parturient amet scelerisque enim vulputate tortor. </p>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 relative z-50">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full bg-[#31323c] hover:bg-black text-white text-left p-4 rounded-lg flex text-[1.5rem] justify-between items-center transition duration-300"
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="bg-black text-white text-[1.2rem] p-4 rounded-b-lg transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
        {/* <img
          src={countrybgimg2}
          className="absolute bottom-0 right-0 z-10 w-[70rem]"
          alt=""
        /> */}
      </div>
    </div>
  );
}
