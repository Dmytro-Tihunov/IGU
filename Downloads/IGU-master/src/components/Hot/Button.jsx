import React from "react";
import "./Button.css";

const Button = ({ label }) => {
  let classes = "component";
  if(label === "Education" || label === "Entertainment") {
    classes += " wide-button";
  }
  return (
    <div className={classes}>
      {label}
    </div>
  );
};


export default Button;
