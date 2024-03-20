import React from "react";
import { Link } from "react-router-dom";
import OTPComponent from "../../../common/OTPComponent/OTP";
import "./otp.css"
const OTP = () => {
  return (
    <div className="forgot_pass">
      <img src="./images/logo.png" alt="" />
      <h1 className="fotgot_pass_heading">New Password</h1>
      <p>Please enter your OTP sent to your Email</p>
      <div className="center">
        <OTPComponent/>
        <OTPComponent/>
        <OTPComponent/>
        <OTPComponent/>
      </div>
      <button className="login_button">Continue</button>
      <p>
        Didin't Receive code <Link to="/login">Resend in 0.5 seconds</Link>
      </p>
    </div>
  );
};

export default OTP;
