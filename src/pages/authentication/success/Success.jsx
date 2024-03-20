import React from "react";
import "./success.css";
const Success = () => {
  return (
    <div className="center_success">
      <img src="./images/success.png" alt="" />
      <p>Your password has been reset.Go back to login screen</p>
      <button className="login_button">Back to login screen</button>
    </div>
  );
};

export default Success;
