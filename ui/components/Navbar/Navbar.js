import styles from "./Navbar.module.scss";
import NavLink from "./NavLink";
import Hamberger from "./Hamberger";
import { useState } from "react";
import Logo from "../Logo/Logo";
import UserSettings from "../UserSettings/UserSettings";
import { useContext } from "react";
import UserSettingsContext from "@/store/user-settings";
import SettingPopup from "@/ui/components/SettingPopup/SettingPopup";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { isOpenSettingsPopup } = useContext(UserSettingsContext);

  return (
    <>
      {isOpenSettingsPopup && <SettingPopup />}
      <div className={`${styles.Navbar} ${navOpen ? styles.open : ""}`}>
        <div className={styles.container}>
          {" "}
          <Logo />
          <ul className={styles.menu}>
            <NavLink text="Accueil" pathname={"/"} href="/" />
            <NavLink text="Profil" href="/me" />
            <NavLink text="Explorer" href="/explore" />
            <NavLink text="Sauvegardes" href="/saved" />
          </ul>
          <UserSettings />
        </div>
      </div>
      <Hamberger navOpen={navOpen} setNavOpen={setNavOpen} />
    </>
  );
};

export default Navbar;
