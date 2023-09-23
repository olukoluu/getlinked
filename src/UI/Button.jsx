import React from "react";

const Button = ({ text, style, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        background:
          "linear-gradient(270deg, #AC3AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)", 
      }}
      className={`${style} z-30 w-fit p-2 px-6 text-sm rounded-sm text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
