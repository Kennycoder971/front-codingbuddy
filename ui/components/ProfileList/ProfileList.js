import React from "react";
import styles from "./ProfileList.module.scss";
import Link from "next/link";

const ProfileList = ({ profiles }) => {
  const profileEl = profiles.map((profile) => {
    return (
      <li key={profile}>
        <Link href={"/"}>
          <a>{profile}</a>
        </Link>
      </li>
    );
  });
  return (
    <div className={styles.ProfileList}>
      <h3>Des profils qui pourraient vous intéresser :</h3>
      <ul className={styles.list}>{profileEl}</ul>
    </div>
  );
};

ProfileList.defaultProps = {
  profiles: ["Profile 1", "Profile 2", "Profile 3"],
};

export default ProfileList;
