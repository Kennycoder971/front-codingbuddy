import SelectTab from "../SelectTab/SelectTab";
import RecommandFriends from "./RecommandFriends";
import styles from "./PostsGrid.module.scss";
import Post from "../Post/Post";
import { useState, useMemo } from "react";
import useLoadPosts from "@/hooks/useLoadPosts";

const tabs = ["posts", "media", "j'aime"];

const PostList = ({ children }) => {
  return <>{children}</>;
};

const PostsGrid = ({ user }) => {
  const [index, setIndex] = useState(0);

  const postsList = useLoadPosts(user);

  function renderPosts(posts) {
    return posts?.map((post) => {
      return <Post user={user} key={post?._id} post={post} />;
    });
  }
  const componentsToShow = [
    <PostList>{renderPosts(postsList)}</PostList>,
    <li> 2 </li>,
    <li> 3 </li>,
  ];
  function showComponent(index) {
    setIndex(index);
  }

  return (
    <div className={styles.PostsGrid}>
      <SelectTab tabs={tabs} func={showComponent} selected={index} />

      <ul className={styles.postList}>{componentsToShow[index]}</ul>

      <RecommandFriends />
    </div>
  );
};

PostsGrid.defaultProps = {};

export default PostsGrid;
