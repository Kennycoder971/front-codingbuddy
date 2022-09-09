import React from "react";

import styles from "./PostPage.module.scss";

const PostPage = ({ post }) => {
  console.log(post);
  return <div className={styles.PostPage}> {post.text}</div>;
};

PostPage.defaultProps = {
  post: {
    text: "Hello",
    messages: 0,
    likes: 0,
  },
};

export default PostPage;
