import SelectTab from "../SelectTab/SelectTab";
import RecommandFriends from "./RecommandFriends";
import styles from "./Explore.module.scss";
import { useState } from "react";
import Search from "../Search/Search";
import HashtagList from "./HashtagList";
import ProfileList from "../ProfileList/ProfileList";
const tabs = ["Hashtags", "profils"];

const componentsToShow = [<HashtagList />, <ProfileList />, <li> 3 </li>];

const PostsGrid = () => {
  const [index, setIndex] = useState(0);

  function showComponent(index) {
    setIndex(index);
  }

  return (
    <div className={styles.PostsGrid}>
      <SelectTab tabs={tabs} func={showComponent} selected={index} />

      <ul className={styles.postList}>
        <Search />
        {componentsToShow[index]}
      </ul>

      <RecommandFriends />
    </div>
  );
};

PostsGrid.defaultProps = {};

export default PostsGrid;
