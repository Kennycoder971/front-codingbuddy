import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./Post.module.scss";
import Image from "next/image";

const Post = () => (
  <article className={styles.Post}>
    <div className={styles.top}>
      <UserInfo userName={"Sandra"} />
      <div className="dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <p className={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit
      modi illum amet assumenda dignissimos repellendus iure dolore sit et!
    </p>

    <Image
      width={800}
      height={550}
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    />
    <div className={bottom}>
      <ul className={styles.icons}></ul>
    </div>
  </article>
);

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
