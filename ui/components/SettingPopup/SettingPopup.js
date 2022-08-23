import React, { useState } from "react";
import styles from "./SettingPopup.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

const SettingPopup = ({ isPopupActive, setPopupActive }) => {
  return (
    <>
      <div
        className={styles.overlay}
        onClick={(e) => setPopupActive(!isPopupActive)}
      ></div>

      <div className={styles.SettingPopup}>
        <form>
          <Input />
          <Input />
          <Input />
          <Button>Sauvegarder</Button>
        </form>
      </div>
    </>
  );
};

SettingPopup.defaultProps = {};

export default SettingPopup;
