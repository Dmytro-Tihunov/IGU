import React from "react";
import "./Button.css";

const Button = ({ label, type, handleClick, currentCat }) => {
  return (
    <div className={currentCat === type ? 'active component' : 'component'} onClick={() => handleClick(type)}>
      {label}
    </div>
  );
};

export default Button;
