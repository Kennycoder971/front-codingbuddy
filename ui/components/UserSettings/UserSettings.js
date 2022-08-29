import { useState } from "react";
import styles from "./UserSettings.module.scss";
import Image from "next/image";
import { useContext } from "react";
import UserSettingsContext from "@/store/user-settings";
import AuthContext from "@/store/auth";
const UserSettings = ({ userImage }) => {
  // Open the popup to modify user settings
  const { toggleSettingsPopup } = useContext(UserSettingsContext);

  // Authentication context
  const { logout } = useContext(AuthContext);

  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropdownElNames = [
    "Modifier mon profil",
    "paramètres",
    "Se déconnecter",
  ];

  const dropdownElems = dropdownElNames.map((el, index) => {
    return (
      <li
        tabIndex={0}
        onClick={(e) => {
          setIsDropdownActive(false);
          if (index === 0) {
            toggleSettingsPopup(true);
          }

          // Allow dropdown in navbar to log user out
          if (index === dropdownElems.length - 1) {
            logout();
          }
        }}
        key={el}
      >
        {el}
      </li>
    );
  });

  return (
    <div className={styles.UserSettings}>
      <figure
        tabIndex={0}
        className={styles.imgContainer}
        onClick={(e) => setIsDropdownActive(!isDropdownActive)}
      >
        <Image
          width={40}
          height={40}
          layout="fixed"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <span>Sandra Wololo</span>
      </figure>

      <ul
        className={`${styles.dropdown} ${
          isDropdownActive ? styles.active : ""
        }`}
      >
        {dropdownElems}
      </ul>
    </div>
  );
};

UserSettings.defaultProps = {
  userImage: "",
};

export default UserSettings;
