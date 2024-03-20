import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import "./inputComponent.css";
const InputComponents = ({ type, placeholder }) => {
  return (
    <div className="input_component">
      <Person2OutlinedIcon className="login_icon" />
      <input type={type} placeholder={placeholder} className="input_field" />
    </div>
  );
};

export default InputComponents;
