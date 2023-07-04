import React from "react";
import "./Button.css";

const Button = ({ label, handleClick, currentCat }) => {
  return (
    <div className={currentCat === label ? 'active component' : 'component'} onClick={() => handleClick(label)}>
      {label}
    </div>
  );
};

export default Button;
