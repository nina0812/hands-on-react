import React from 'react';
import "./Button.scss";

const Button = ({name, children }) => {
  return (
    <button className={name}>{children}</button>
  );
}

export default Button;
