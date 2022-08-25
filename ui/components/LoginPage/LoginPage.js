import React from "react";
import Container from "../Container/Container";
import Input from "../Input/Input";
import styles from "./LoginPage.module.scss";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Link from "next/link";

const LoginPage = () => (
  <main className={styles.LoginPage}>
    <Container>
      <form action="/" className={styles.loginForm}>
        <Logo />
        <Input type="email" placeholder="Ajouter un email" />
        <Input type="password" placeholder="Mot de passe" />
        <Button>Se connecter</Button>
        <p>
          Pas encore de compte ?{" "}
          <Link href="/sign-in">
            <a>Enregistrez vous</a>
          </Link>
        </p>
      </form>
    </Container>
  </main>
);

LoginPage.defaultProps = {};

export default LoginPage;
