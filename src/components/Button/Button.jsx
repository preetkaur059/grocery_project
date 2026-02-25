import React from 'react'

const Button = ({ content, className = "", onClick, disabled }) => {

  const baseStyle = "px-8 py-3 rounded-lg md:text-lg text-md transition-all duration-300";

  const enabledStyle = "bg-gradient-to-b from-orange-400 to-orange-500 text-white hover:scale-105 hover:from-orange-500 hover:to-orange-600 cursor-pointer";

  const disabledStyle = "bg-gray-600 text-white cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${disabled ? disabledStyle : enabledStyle} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
