import React from "react";
import styles from "./Search.module.scss";
import Link from "next/link";

export default function SearchDropdown({ elements }) {
  const listElements = elements.map((el) => {
    return (
      <li key={el}>
        <Link href={"/"}>{el}</Link>{" "}
      </li>
    );
  });

  return <ul className={styles.SearchDropdown}>{listElements}</ul>;
}

SearchDropdown.defaultProps = {
  elements: ["Element 1", "Element 2", "Element 3"],
};
