import { useContext, useState } from "react";
import Container from "../Container/Container";
import Input from "../Input/Input";
import styles from "./LoginPage.module.scss";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Link from "next/link";
import AuthContext from "@/store/auth";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  function setField(fieldName, value) {
    setFields((prevState) => ({ ...prevState, [fieldName]: value }));
  }

  async function onSubmit(fields) {
    try {
      const response = await login(fields);
      location.assign("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className={styles.LoginPage}>
      <Container>
        <form
          action="/"
          className={styles.loginForm}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(fields);
          }}
        >
          <Logo />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setField("email", e.target.value);
            }}
            value={fields.email}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => {
              setField("password", e.target.value);
            }}
            value={fields.password}
          />
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
};

LoginPage.defaultProps = {};

export default LoginPage;
