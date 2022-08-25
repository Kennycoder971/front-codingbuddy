import React, { useState } from "react";
import styles from "./Input.module.scss";

const Input = ({ type, placeholder, value, onChange, name }) => {
  return (
    <div className={styles.Input}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "Ajouer un placeholder",
  value: "",
  name: "",
  onChange: () => {},
};

export default Input;
