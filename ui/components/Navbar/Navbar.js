import styles from "./Navbar.module.scss";
import Container from "../Container/Container";
import NavLink from "./NavLink";
import UserInfo from "../UserInfo/UserInfo";
import Hamberger from "./Hamberger";
import { useState } from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className={`${styles.Navbar} ${navOpen ? styles.open : ""}`}>
        <Container>
          {" "}
          <Logo />
          <ul>
            <NavLink text="Accueil" pathname={"/"} />
            <NavLink text="Profil" />
            <NavLink text="Explorer" />
            <NavLink text="Sauvegardes" />
          </ul>
          <UserInfo />
        </Container>
      </div>
      <Hamberger navOpen={navOpen} setNavOpen={setNavOpen} />
    </>
  );
};

export default Navbar;
