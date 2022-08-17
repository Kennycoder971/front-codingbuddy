import styles from "./Navbar.module.scss";

export default function Hamberger({ setNavOpen, navOpen }) {
  return (
    <div className={styles.Hamberger} onClick={(e) => setNavOpen(!navOpen)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
}
