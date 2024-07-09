import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, handleOnClick, type, className }) => {
  return (
    <button
      type={type}
      className={`py-1 px-4 rounded-md border-2 border-transparent
           hover:border-blue-500 hover:text-blue-500 bg-blue-500 hover:bg-transparent text-white font-semibold transition duration-200 ease-in-out flex justify-center items-center text-sm sm:text-base ${className}`}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  className: "",
};

export default Button;
