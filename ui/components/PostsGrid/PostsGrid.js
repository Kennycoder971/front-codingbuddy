import SelectTabs from "./SelectTabs";
import RecommandFriends from "./RecommandFriends";
import styles from "./PostsGrid.module.scss";
import { useState } from "react";

const tabs = ["posts", "re-posts", "media", "j'aime"];

const componentsToShow = [
  <li> 1 </li>,
  <li> 2 </li>,
  <li> 3 </li>,
  <li> 4 </li>,
];

const PostsGrid = () => {
  const [index, setIndex] = useState(0);

  function showComponent(index) {
    setIndex(index);
  }

  return (
    <div className={styles.PostsGrid}>
      <SelectTabs tabs={tabs} func={showComponent} />
      {componentsToShow[index]}
      <RecommandFriends />
    </div>
  );
};

PostsGrid.defaultProps = {};

export default PostsGrid;
