import React from "react";
import "./Button.css";

const Button = ({ label }) => {
  let classes = "component";
  if(label === "Education" || label === "Entertainment") {
    classes += " wide-button";
  }
  return (
    <div className={classes}>
      <div className="overlap-group">
        <div className="rectangle"></div>
        <div className="div"></div>
        <div className="VIDEO">{label}</div>
      </div>
    </div>
  );
};


export default Button;
