import React, { useState } from "react";
import styles from "./SettingPopup.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useContext } from "react";
import UserSettingsContext from "@/store/user-settings";

const SettingPopup = () => {
  const { toggleSettingsPopup } = useContext(UserSettingsContext);

  return (
    <>
      <div
        className={styles.overlay}
        onClick={(e) => toggleSettingsPopup(false)}
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
