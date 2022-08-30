import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./Post.module.scss";
import Image from "next/image";
import { SiGooglemessages } from "react-icons/si";
import { MdThumbUpAlt } from "react-icons/md";
import displayLocaleDate from "@/utils/displayLocaleDate";

const Post = ({ user, post }) => (
  <article className={styles.Post}>
    <div className={styles.top}>
      <UserInfo userName={user?.username || "Anonyme"} />
      <div className={styles.dots}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <p className={styles.text}>{post?.text}</p>

    <div className={styles.imgContainer}>
      <Image
        layout="fill"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </div>
    <div className={styles.bottom}>
      <ul className={styles.icons}>
        <li>
          <SiGooglemessages />
          <span>{post?.replies.length}</span>
        </li>
        <li>
          <MdThumbUpAlt />
          <span>{post?.likes.length}</span>
        </li>
      </ul>

      <div className={styles.date}>
        <time>{displayLocaleDate(post?.createdAt)}</time>
      </div>
    </div>
  </article>
);

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
