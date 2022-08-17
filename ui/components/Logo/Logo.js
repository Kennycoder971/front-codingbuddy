import React from "react";
import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => (
  <Link href="/">
    <p className={styles.Logo}>
      codding<span></span>buddy{" "}
    </p>
  </Link>
);

export default Logo;
