import SelectTabs from "./SelectTabs";
import RecommandFriends from "./RecommandFriends";
import styles from "./PostsGrid.module.scss";
import Post from "../Post/Post";
import { useState } from "react";

const tabs = ["posts", "re-posts", "media", "j'aime"];

const componentsToShow = [<Post />, <li> 2 </li>, <li> 3 </li>];

const PostsGrid = () => {
  const [index, setIndex] = useState(0);

  function showComponent(index) {
    setIndex(index);
  }

  return (
    <div className={styles.PostsGrid}>
      <SelectTabs tabs={tabs} func={showComponent} selected={index} />

      <ul className={styles.postList}>{componentsToShow[index]}</ul>

      <RecommandFriends />
    </div>
  );
};

PostsGrid.defaultProps = {};

export default PostsGrid;
