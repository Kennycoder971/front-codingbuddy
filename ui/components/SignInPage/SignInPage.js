import { useState, useContext } from "react";
import Container from "../Container/Container";
import Input from "../Input/Input";
import styles from "./SignInPage.module.scss";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Link from "next/link";
import AuthContext from "@/store/auth";
import { useRouter } from "next/router";

const SignInPage = () => {
  const { register } = useContext(AuthContext);
  const router = useRouter();

  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  function setField(fieldName, value) {
    setFields((prevState) => ({ ...prevState, [fieldName]: value }));
  }
  async function onSubmit(fields) {
    try {
      const data = await register(fields);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main className={styles.SignInPage}>
      <Container>
        <form
          action="/"
          method="post"
          className={styles.signInForm}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(fields);
          }}
        >
          <Logo />
          <Input
            type="text"
            placeholder="Nom d'utilisateur"
            name="username"
            onChange={(e) => {
              setField("username", e.target.value);
            }}
            value={fields.username}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              setField("email", e.target.value);
            }}
            value={fields.email}
          />

          <Input
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(e) => {
              setField("password", e.target.value);
            }}
            value={fields.password}
          />
          <Input
            type="password"
            placeholder="Retappez le mot de passe"
            name="password2"
            onChange={(e) => {
              setField("password2", e.target.value);
            }}
            value={fields.password2}
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
};

SignInPage.defaultProps = {};

export default SignInPage;
