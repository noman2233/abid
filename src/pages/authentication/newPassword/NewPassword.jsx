import React from "react";
import InputComponents from "../../../common/inputComponent/InputComponents";
import { Link } from "react-router-dom";
import "../newPassword/NewPassword"
const NewPassword = () => {
  return (
    <div className="forgot_pass">
      <img src="./images/logo.png" alt="" />
      <h1 className="fotgot_pass_heading">New Password</h1>
      <p>Please enter your email to reset your passwprd</p>
      <InputComponents placeholder="New Password" type="text" />
      <InputComponents placeholder="Coinfirm new passwpord" type="text" />
      <button className="login_button">Reset Password</button>
      <p>Back to <Link to="/login">SignIn</Link></p>
    </div>
  );
};

export default NewPassword;
