import React, { useState } from "react";
import styles from "./UserProfile.module.scss";
import Image from "next/image";
import Button from "../Button/Button";
import { AiFillSetting } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useContext } from "react";
import UserSettingsContext from "@/store/user-settings";
import Avatar from "../../svg/avatar.svg";

const UserProfile = ({ user }) => {
  // Open the popup to modify user settings
  const { toggleSettingsPopup } = useContext(UserSettingsContext);

  return (
    <main className={styles.UserProfile}>
      {
        <Image
          width={1000}
          height={250}
          layout="responsive"
          src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      }

      <div className={styles.userInfo}>
        <div className={styles.photo}>
          {user?.profilePicture ? (
            <Image
              width={150}
              height={150}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          ) : (
            <Avatar />
          )}
        </div>
        <div className={styles.userData}>
          <ul className={styles.infos}>
            <li>
              <strong className={styles.username}>{user?.username}</strong>
            </li>
            <li>
              <p>
                {" "}
                <strong>{user?.followers?.length}</strong> follower
              </p>
            </li>
            <li>
              <p>
                {" "}
                <strong>{user?.following?.length}</strong> following
              </p>
            </li>
          </ul>
          <div className={styles.description}>
            {user?.bio || <p>Pas encore de description</p>}
          </div>
        </div>

        {
          <div
            className={styles.settingsIcon}
            onClick={(e) => toggleSettingsPopup(true)}
          >
            <IconContext.Provider value={{ size: "1.5em" }}>
              <AiFillSetting />
            </IconContext.Provider>
          </div>
        }
      </div>
    </main>
  );
};

UserProfile.defaultProps = {
  user: {
    username: "user",
    follower: 100,
    following: 100,
    description: "Lorem ipsum dolor sit amet",
  },
};

export default UserProfile;
