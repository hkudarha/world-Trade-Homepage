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
    password: "",
    referredBy: "",
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
            text: otpError?.response?.data?.message || "OTP is incorrect, please try again.",
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
      <div className="AuthLoginForm content">
        <h5 className="main-heading" data-aos="fade-up">
          Welcome
        </h5>
        <p data-aos="fade-up">
          Today is a new day. It's your day. You shape it. Sign up to start
          managing your projects.
        </p>

        <div className="input-container">
          <TextInput
            value={payload.name}
            onChange={(e) => setPayload((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Enter your name"
            labelName="Name*"
          />

          <TextInput
            value={payload.email}
            onChange={(e) => setPayload((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Enter your email"
            labelName="Email*"
          />

          <TextInput
            type="password"
            value={payload.password}
            onChange={(e) => setPayload((prev) => ({ ...prev, password: e.target.value }))}
            placeholder="Enter your password"
            labelName="Password*"
          />

          <TextInput
            value={payload.referredBy}
            onChange={(e) =>
              setPayload((prev) => ({ ...prev, referredBy: e.target.value }))
            }
            placeholder="Optional"
            labelName="Referral Code"
          />
        </div>

        <div data-aos="fade-up" className="btns">
          <Button2
            onClick={handleSubmit}
            name={"Register"}
            disabled={loading}
          />
        </div>

        <span data-aos="fade-up" className="accontTggle">
          Already have an account?{" "}
          <Link to={AuthRoutes.LOGIN}>Sign in</Link>
        </span>
      </div>
    </>
  );
};

export default AuthRegisterForm;
