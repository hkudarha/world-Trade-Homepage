/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button2 } from "../ui/Buttons";
import { useEffect, useState } from "react";
import { AuthenticatedRoutes, AuthRoutes } from "../../constants/Routes";
import PageLoader from "../ui/PageLoader";
import { SwalError } from "../../utils/custom-alert";
import { registerUser, verifyOtp } from "../../api/auth-api";
import Swal from "sweetalert2";
import TextInput from "../ui/TextInput";

const AuthRegisterForm = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    referredBy: "",
    lastname: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const referralCode = params.get("referral") || "";
    setPayload((prev) => ({ ...prev, referredBy: referralCode }));
  }, [search]);

  const handleNavigate = () => {
    navigate(AuthenticatedRoutes.USER_DASHBOARD);
    window.location.reload();
  };

  const handleSubmit = async () => {
    if (loading) return;
    try {
      setLoading(true);

      // ✅ Register user
      const response = await registerUser({
        name: payload.name,
        lastname: payload.lastname,

        mobile: payload.mobile,
        email: payload.email.trim().toLowerCase(),
        password: payload.password.trim(),
        referredBy: payload.referredBy?.trim(), // Optional chaining if referredBy might be undefined
      });

      // ✅ OTP sent message
      await Swal.fire({
        icon: "success",
        title: "OTP Sent Successfully!",
        text: "Check your email for the OTP.",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      // ✅ Loop until OTP is verified
      let verified = false;
      while (!verified) {
        const { value: otp } = await Swal.fire({
          title: "Enter OTP",
          input: "text",
          inputLabel: "Check your email and enter the OTP",
          inputPlaceholder: "Enter OTP here",
          showCancelButton: true,
          inputAttributes: {
            maxlength: 6,
            autocapitalize: "off",
            autocorrect: "off",
          },
        });

        if (!otp) {
          SwalError.fire({
            icon: "error",
            title: "No OTP entered",
            text: "Please enter the OTP to complete registration!",
          });
          return;
        }

        try {
          // ✅ Try verifying OTP
          const otpResponse = await verifyOtp({
            email: payload.email,
            otp: otp,
          });

          // ✅ Store token & role
          localStorage.setItem("token", otpResponse.token);
          localStorage.setItem("role", "User");

          await Swal.fire({
            icon: "success",
            title: "Registration Complete!",
            text: "You have been successfully registered and verified!",
            timer: 2000,
            timerProgressBar: true,
          });

          verified = true;
          handleNavigate();
        } catch (otpError) {
          // ❌ Invalid OTP
          SwalError.fire({
            icon: "error",
            title: "Invalid OTP",
            text:
              otpError?.response?.data?.message ||
              "OTP is incorrect, please try again.",
          });
          // Loop continues
        }
      }
    } catch (error) {
      console.error(error);
      SwalError.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.message || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="mx-auto">
      <h5
          className="text-white text-center my-[3rem]  mx-auto text-[2.0945rem] font-semibold leading-none font-sofia"
          data-aos="fade-up"
        >
          Welcome to{" "}
          <span className="text-[#45C66F] font-semibold text-[2.0945rem] leading-none font-sofia">
            1 Trade
          </span>
        </h5>
        {/* <p data-aos="fade-up">
          Today is a new day. It's your day. You shape it. Sign up to start
          managing your projects.
        </p> */}

        <div className="bg-[#1e1f26] mx-auto p-4 rounded-[2rem] mb-20">
          <p className="text-center text-[1.5rem]">Enter Account Details</p>

          <div className="input-container">
            <TextInput
              value={payload.name}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter First Name"
              // labelName="Name*"
            />
            <TextInput
              value={payload.lastname}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter Last Name"
              // labelName=" Last Name*"
            />

            <TextInput
              value={payload.email}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter Email"
              // labelName="Email*"
            />
            <div className="flex gap-3 justify-center items-center bg-[#1e1f26] rounded-md">
              <span className=" px-[1.2rem] py-[1rem] rounded-[1rem] text-[1.3rem] font-medium text-textPrimary bg-[#2a2b32]">
                +91
              </span>
              <TextInput
                value={payload.mobile}
                onChange={(e) =>
                  setPayload((prev) => ({ ...prev, mobile: e.target.value }))
                }
                placeholder="Enter Mobile Number"
                className="!w-[29.5rem]"
              />
            </div>

            <TextInput
              type="password"
              value={payload.password}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder=" Create Password"
              className="!bg-[#2b2e39]"
              // labelName="Password*"
            />

            <TextInput
              type="password"
              value={payload.password}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Enter Confirm Password"
              className="!bg-[#2b2e39]"
              // labelName="Password*"
            />

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="adult" className="accent-green-500" />
              <label
                htmlFor="adult"
                className="text-lg font-semibold text-white"
              >
                I am an adult
              </label>
            </div>

            {/* <TextInput
    value={payload.referredBy}
    onChange={(e) =>
      setPayload((prev) => ({ ...prev, referredBy: e.target.value }))
    }
    placeholder="Optional"
    // labelName="Referral Code"
  /> */}
          </div>

          <div className="btns w-full mt-4">
            <Button2
              onClick={handleSubmit}
              name={"Register"}
              disabled={loading}
              className="!bg-green-500"
            />
          </div>

        </div>
          <span className="accontTggle  ">
            Already have an account? <Link to={AuthRoutes.LOGIN}>Sign in</Link>
          </span>
      </div>
    </>
  );
};

export default AuthRegisterForm;
