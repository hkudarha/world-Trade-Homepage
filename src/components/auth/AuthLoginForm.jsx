/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { Button2 } from "../ui/Buttons";
import { useState } from "react";
import { AuthenticatedRoutes, AuthRoutes } from "../../constants/Routes";
import PageLoader from "../ui/PageLoader";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import { loginWithUserIDApi } from "../../api/auth-api"; // API call wahi rahega, bas payload email-password ka jayega
import { emailValidator, passwordValidator } from "../../utils/inputValidator";
import TextInputPassword from "../ui/TextInputPassword";
import TextInput from "../ui/TextInput";

const AuthLoginForm = () => {
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    const emailError = emailValidator(loginPayload.email);
    if (emailError) {
      formErrors.email = emailError;
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleLoginSubmit = async () => {
    if (!validate()) return;
    if (loading) return;
    setLoading(true);

    try {
      const response = await loginWithUserIDApi({
        email: loginPayload.email.trim().toLowerCase(),
        password: loginPayload.password,
      });

      SwalSuccess.fire({
        icon: "success",
        title: "Login Success",
        text: "You have logged in successfully",
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem("role", "User");

      setTimeout(() => {
        handleNavigate();
      }, 2000);
    } catch (error) {
      console.log(error);
      SwalError.fire({
        icon: "error",
        title: "Login Failed",
        text: error?.response?.data.message || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNavigate = () => {
    navigate(AuthenticatedRoutes.USER_DASHBOARD);
    window.location.reload();
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="">
        <h5
          className="text-white text-center mx-auto text-[2.0945rem] font-semibold leading-none font-sofia"
          data-aos="fade-up"
        >
          Welcome to{" "}
          <span className="text-[#45C66F] font-semibold text-[2.0945rem] leading-none font-sofia">
            1 Trade
          </span>
        </h5>

        <div
          data-aos="fade-up"
          className="input-container justify-center flex-col items-center  bg-[#25272D] p-10 my-10 rounded-[1.875rem] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[4px]"
        >
          <TextInput
            onChange={(e) =>
              setLoginPayload({
                ...loginPayload,
                email: e.target.value,
              })
              
            }
            value={loginPayload.email}
            placeholder="Email / Username"
            // labelName=""
            error={errors.email}
            className="rounded-md border-2 border-[#313132] bg-[#2A2D37] opacity-80"
          />
          <TextInputPassword
            value={loginPayload.password}
            onChange={(e) =>
              setLoginPayload({
                ...loginPayload,
                password: e.target.value,
              })
            }
            placeholder="Password"
            // labelName="Password"
            error={errors.password}
          />

            {/* Checkbox */}
        <div className="flex items-center justify-start  space-x-2">
          <input type="checkbox" id="adult" className="accent-green-500 " />
          <label htmlFor="adult" className="text-lg !text-start font-semibold text-white">
          Remember me
          </label>
        </div>

          <Button2
            onClick={handleLoginSubmit}
            name="SIGN IN"
            disabled={loading}
            className="!bg-[#45C66F]"
          />
        </div>
        <span data-aos="fade-up" className="accontTggle text-white  text-[1.125rem] font-semibold leading-none font-sofia text-center">
          Not a member?  &nbsp;&nbsp;
          <Link
            to={AuthRoutes.REGISTER}
            className="text-[#45C66F] text-[1.125rem] font-semibold leading-none font-sofia"
          >
            Sign up
          </Link>
        </span>
      </div>
    </>
  );
};

export default AuthLoginForm;
