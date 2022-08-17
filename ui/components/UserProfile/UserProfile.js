import React from "react";
import styles from "./UserProfile.module.scss";
import Image from "next/image";
import Container from "../Container/Container";
import Button from "../Button/Button";

const UserProfile = ({ follower, following }) => (
  <main className={styles.UserProfile}>
    <Image
      width={1000}
      height={250}
      layout="responsive"
      src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />

    <div className={styles.userInfo}>
      <div className={styles.photo}>
        <Image
          width={120}
          height={120}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
      <div className={styles.userData}>
        <ul className={styles.infos}>
          <li>
            <strong className={styles.username}>Xander Schwarz</strong>
          </li>
          <li>
            <p>
              {" "}
              <strong>{follower}</strong> follower
            </p>
          </li>
          <li>
            <p>
              {" "}
              <strong>{following}</strong> following
            </p>
          </li>
        </ul>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et
          voluptate autem illo voluptatem aliquid maiores velit laboriosam
          laudantium, veniam impedit magni laborum asperiores magnam
          voluptatibus rerum minus.
        </div>
      </div>
      <Button>Ajouter</Button>
    </div>
  </main>
);

UserProfile.defaultProps = {
  username: "user",
  follower: 100,
  following: 100,
  description: "Lorem ipsum dolor sit amet",
};

export default UserProfile;
