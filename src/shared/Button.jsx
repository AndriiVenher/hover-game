import React from "react";

const Button = ({ onClick, text, cName }) => {
  return (
    <button onClick={onClick} className={cName}>
      {text}
    </button>
  );
};

export default Button;
