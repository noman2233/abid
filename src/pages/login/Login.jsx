import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import React from "react";
import "./login.css";
import InputComponents from "../../common/inputComponent/InputComponents";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login_container">
      <img src="./images/image.svg" alt="" className="login_image" />
      <div className="login_form">
        <h1>Create Your Account</h1>
        <p>Fill all the required details to create your account</p>
        <InputComponents placeholder=" Your Name" type="text" />
        <InputComponents placeholder=" Your Email" type="text" />
        <InputComponents placeholder=" Your Password" type="text" />

        <button className="login_button">Signup</button>
        <div className="already_have">
          Already have an Account? 
          <Link>
            <span>Login</span>
          </Link>
        </div>
        <h3 className="or">OR</h3>
        <h5 className="or_option">Sign Up with</h5>
        <div className="login_buttons">
          <FacebookOutlinedIcon className="social_icon" />
          <GoogleIcon className="social_icon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
