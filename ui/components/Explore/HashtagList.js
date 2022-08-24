import React from "react";
import Link from "next/link";
import styles from "./Explore.module.scss";

export default function HashtagList({ hashtags }) {
  const listHashtags = hashtags.map((el) => {
    return (
      <li key={el}>
        <Link href={"/"}>
          <a>{el}</a>
        </Link>{" "}
      </li>
    );
  });
  return (
    <div className={styles.wrapper}>
      <h3>Des hashtags qui pourraient vous intéresser </h3>
      <ul className={styles.hashtagList}>{listHashtags}</ul>
    </div>
  );
}

HashtagList.defaultProps = {
  hashtags: ["#hashtag1", "#hashtag2", "#hashtag3"],
};
