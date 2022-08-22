import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./Post.module.scss";
import Image from "next/image";
import { SiGooglemessages } from "react-icons/si";
import { MdThumbUpAlt } from "react-icons/md";
import { AiOutlineRetweet } from "react-icons/ai";

const Post = () => (
  <article className={styles.Post}>
    <div className={styles.top}>
      <UserInfo userName={"Sandra"} />
      <div className={styles.dots}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <p className={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio suscipit
      modi illum amet assumenda dignissimos repellendus iure dolore sit et!
    </p>

    <div className={styles.imgContainer}>
      <Image
        width={500}
        height={500}
        layout="fill"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </div>
    <div className={styles.bottom}>
      <ul className={styles.icons}>
        <li>
          <SiGooglemessages />
          <span>10</span>
        </li>
        <li>
          <MdThumbUpAlt />
          <span>32</span>
        </li>
        <li>
          <AiOutlineRetweet />
          <span>4</span>
        </li>
      </ul>

      <div className={styles.date}>
        <time>10 Mai 2022</time>
      </div>
    </div>
  </article>
);

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
