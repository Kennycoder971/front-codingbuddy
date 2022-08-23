import React, { useState } from "react";
import styles from "./Input.module.scss";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div className={styles.Input}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "Ajouer un placeholder",
  value: "",
  onChange: () => {},
};

export default Input;
