import React from "react";
import Container from "../Container/Container";
import Input from "../Input/Input";
import styles from "./SignInPage.module.scss";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Link from "next/link";

const SignInPage = () => (
  <main className={styles.SignInPage}>
    <Container>
      <form action="/" className={styles.signInForm}>
        <Logo />
        <Input type="email" placeholder="Ajouter un email" name="email" />
        <Input type="password" placeholder="Mot de passe" name="password1" />
        <Input
          type="password"
          placeholder="Retappez le mot de passe"
          name="password2"
        />
        <Button>S'enregistrer</Button>

        <p>
          Déjà un compte ?{" "}
          <Link href="/login">
            <a>Connectez-vous</a>
          </Link>
        </p>
      </form>
    </Container>
  </main>
);

SignInPage.defaultProps = {};

export default SignInPage;
