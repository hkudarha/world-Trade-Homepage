/* eslint-disable react/prop-types */
import sideImg from "../../assets/auth/sideImg.png";
import bgVideo from "../../assets/website/bgVideo.mp4";
import "../../styles/auth/AuthMain.css";
import img from "../../assets/Rectangle 001.png";
import logo from "../../assets/trade_logo.png";
import rade from "../../assets/rade.png";

/* eslint-disable react/no-unescaped-entities */
const AuthMain = ({ inner }) => {
  return (
    <div className="AuthMain1 w-full h-full p-10 bg-[#141518]">
      <div className="w-full h-full border-2 rounded-[2.5rem] border-[#06C755] bg-[#141518]">
        <div data-aos="fade-right" className="AuthMain">
          <div className="auth-inner  p-10">
            {/* left  */}
            <div className="w-1/2 h-full  p-20  flex items-center justify-center relative">
              <img
                src={img}
                alt="side img"
                className="w-full bg-cover rounded-3xl side-main-img"
              />

              <div className="flex absolute  items-center w-1/3">
                <img src={logo} alt="T_image" className="w-[6rem] absolute" />
                <img
                  src={rade}
                  alt="Rade"
                  className="w-[14rem] mt-4 ml-[3.5rem]"
                />
              </div>
            </div>
            <div className="w-1/2 mx-auto h-full flex items-center justify-center ">
              <div className="container-box">{inner}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthMain;
