import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ children, color }) => {
  return (
    <button className={`${styles.Button} ${styles[color]}`}>
      {children || "Button"}
    </button>
  );
};
Button.propTypes = {};

Button.defaultProps = {
  color: "primary",
};

export default Button;
