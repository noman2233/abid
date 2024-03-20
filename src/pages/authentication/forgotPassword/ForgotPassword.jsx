import React from "react";
import InputComponents from "../../../common/inputComponent/InputComponents";
import { Link } from "react-router-dom";
import "./forgotpassword.css"
const ForgotPassword = () => {
  return (
    <div className="forgot_pass">
      <img src="./images/logo.png" alt="" />
      <h1>Forgot Password</h1>
      <p>Please enter your email to reset your passwprd</p>
      <InputComponents placeholder=" Your Email" type="text" />
      <button className="login_button">Continue</button>
      <p>Back to <Link to="/login">SignIn</Link></p>
    </div>
  );
};

export default ForgotPassword;
