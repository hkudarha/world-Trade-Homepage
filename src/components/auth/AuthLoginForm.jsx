/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { Button2 } from "../ui/Buttons";
import { useState } from "react";
import { AuthenticatedRoutes, AuthRoutes } from "../../constants/Routes";
import PageLoader from "../ui/PageLoader";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";
import { loginWithUserIDApi } from "../../api/auth-api"; // API call wahi rahega, bas payload email-password ka jayega
import {
  emailValidator,
  passwordValidator,
} from "../../utils/inputValidator";
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
      <div className="AuthLoginForm content">
        <h5 className="main-heading" data-aos="fade-up">
          Welcome Back
        </h5>
        <p data-aos="fade-up">
          Today is a new day. It's your day. You shape it. Sign in to start managing your projects.
        </p>
        <div data-aos="fade-up" className="input-container">
          <TextInput
            onChange={(e) =>
              setLoginPayload({
                ...loginPayload,
                email: e.target.value,
              })
            }
            value={loginPayload.email}
            placeholder="Enter your Email"
            labelName="Email"
            error={errors.email}
          />
          <TextInputPassword
            value={loginPayload.password}
            onChange={(e) =>
              setLoginPayload({
                ...loginPayload,
                password: e.target.value,
              })
            }
            placeholder="Enter your Password"
            labelName="Password"
            error={errors.password}
          />
          <Button2
            onClick={handleLoginSubmit}
            name="Sign In"
            disabled={loading}
          />
        </div>
        <span data-aos="fade-up" className="accontTggle">
          Don't have an account?{" "}
          <Link to={AuthRoutes.REGISTER}>Sign up</Link>
        </span>
      </div>
    </>
  );
};

export default AuthLoginForm;
