import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={`flex justify-center items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-80 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

Button.displayName = "Button";

export { Button };
