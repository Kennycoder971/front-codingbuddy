import { useState, useEffect } from "react";
import UserInfo from "../UserInfo/UserInfo";
import styles from "./Post.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SiGooglemessages } from "react-icons/si";
import { MdThumbUpAlt } from "react-icons/md";
import displayLocaleDate from "@/utils/displayLocaleDate";
import { addLikeToPost, getPostLikes, deletePostLikes } from "./helpers";
import { IconContext } from "react-icons";

const Post = ({ user, post }) => {
  return (
    <article className={styles.Post}>
      <Link href="/explore">
        <a>
          <div className={styles.top}>
            <UserInfo />

            {user?._id === post?.owner._id && (
              <div className={styles.dots}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            )}
          </div>
          <p className={styles.text}>{post?.text}</p>

          <div
            className={styles.imgContainer}
            style={{ height: "" ? "500px" : "fit-content" }}
          >
            {
              <Image
                layout="fill"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            }
          </div>
        </a>
      </Link>

      <div className={styles.bottom}>
        <ul className={styles.icons}>
          <li>
            <SiGooglemessages />
            <span>{post?.replies.length}</span>
          </li>
          <li>
            <IconContext.Provider
              value={{
                color: "" ? "var(--primary-color)" : "inherit",
                className: "global-class-name",
              }}
            >
              <MdThumbUpAlt />
            </IconContext.Provider>
            <span>{0}</span>
          </li>
        </ul>

        <div className={styles.date}>
          <time>{displayLocaleDate(post?.createdAt)}</time>
        </div>
      </div>
    </article>
  );
};

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
