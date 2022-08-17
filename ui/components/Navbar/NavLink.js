import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function NavLink({ pathname, text, href }) {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <li>
      <Link href={href}>
        <a className={currentRoute === pathname ? styles.active : ""}>{text}</a>
      </Link>
    </li>
  );
}

NavLink.defaultProps = {
  text: "NavLink",
  href: "/",
  pathname: "",
};
