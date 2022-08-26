import React from "react";
import styles from "./Container.module.scss";
import { useContext } from "react";
import UserSettingsContext from "@/store/user-settings";
import SettingPopup from "@/ui/components/SettingPopup/SettingPopup";

const Container = ({ children }) => {
  const { isOpenSettingsPopup } = useContext(UserSettingsContext);

  return (
    <>
      <div className={styles.Container}>{children}</div>
      {isOpenSettingsPopup && <SettingPopup />}
    </>
  );
};

export default Container;
