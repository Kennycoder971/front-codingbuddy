import { useState } from "react";
import styles from "./UserSettings.module.scss";
import Image from "next/image";
import Link from "next/link";

const UserSettings = ({ userImage }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
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
        <li tabIndex={0}>Modifier mon profil</li>
        <li tabIndex={0}>Paramètres</li>
        <li tabIndex={0}>Se déconnecter</li>
      </ul>
    </div>
  );
};

UserSettings.defaultProps = {
  userImage: "",
};

export default UserSettings;
