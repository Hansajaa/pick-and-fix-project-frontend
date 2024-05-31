import React from "react";

function InputBox({ type, placeholder, classes }) {
  return <input className={classes} type={type} placeholder={placeholder} />;
}

export default InputBox;
