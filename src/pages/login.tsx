import type { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";

const Login: NextPage = () => {
  const { push } = useRouter();

  const handleClick = () => push("/");

  return (
    <div className={styles.loginForm}>
      <input className={styles.input} placeholder="username" />
      <input type="password" className={styles.input} placeholder="password" />
      <button className={styles.loginButton} onClick={handleClick}>
        ログイン
      </button>
    </div>
  );
};

export default Login;
