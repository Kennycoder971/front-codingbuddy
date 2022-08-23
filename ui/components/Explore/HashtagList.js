import React from "react";
import Link from "next/link";
import styles from "./Explore.module.scss";

export default function HashtagList({ hashtags }) {
  const listHashtags = hashtags.map((el) => {
    return (
      <li key={el}>
        <Link href={"/"}>{el}</Link>{" "}
      </li>
    );
  });
  return (
    <div className={styles.wrapper}>
      <h3>Des Hashtags</h3>
      <ul className={styles.hashtagList}>{listHashtags}</ul>
    </div>
  );
}

HashtagList.defaultProps = {
  hashtags: ["#hashtag1", "#hashtag2", "#hashtag3"],
};
