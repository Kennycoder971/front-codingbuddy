import React from "react";
import styles from "./UserInfo.module.scss";
import Image from "next/image";
import Link from "next/link";

const UserInfo = ({ userName, pathName }) => (
  <div className={styles.UserInfo}>
    <figure>
      <Link href={pathName}>
        <div>
          <Image
            width={40}
            height={40}
            layout="fixed"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <figcaption>{userName}</figcaption>
        </div>
      </Link>
    </figure>
  </div>
);

UserInfo.defaultProps = {
  userName: "User",
  pathName: "/",
};

export default UserInfo;
