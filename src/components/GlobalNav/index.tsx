import Link from "next/link";
import * as React from "react";
import styles from "./index.module.css";
import {
  AiOutlineHome,
  AiOutlineRightCircle,
  AiOutlineLeftCircle,
} from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { GrArticle } from "react-icons/gr";
import { useRouter } from "next/router";

type GlobalNavPresenterProps = {
  pathname: string;
  drawerIsOpen: boolean;
  handleClick: () => void;
};

const GlobalNavPresenter: React.FC<GlobalNavPresenterProps> = ({
  pathname,
  drawerIsOpen,
  handleClick,
}) => (
  <nav className={`${styles.nav} ${drawerIsOpen ? styles.open : ""}`}>
    <Link href={"/"}>
      <a className={`${styles.link} ${pathname === "/" ? styles.current : ""}`}>
        <AiOutlineHome /> {drawerIsOpen && "Home"}
      </a>
    </Link>
    <Link href={"/posts"}>
      <a
        className={`${styles.link} ${
          pathname === "/posts" ? styles.current : ""
        }`}
      >
        <GrArticle /> {drawerIsOpen && "Posts"}
      </a>
    </Link>
    <Link href="/login">
      <a className={`${styles.link} ${styles.logoutLink}`}>
        <BiLogOut /> {drawerIsOpen && "Logout"}
      </a>
    </Link>
    <button className={styles.drawerButton} onClick={handleClick}>
      {drawerIsOpen ? (
        <AiOutlineLeftCircle size={16} />
      ) : (
        <AiOutlineRightCircle size={16} />
      )}
    </button>
  </nav>
);

const GlobalNavContainer: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
  const toggleDrawer = React.useCallback(() => {
    setDrawerIsOpen((value) => !value);
  }, [setDrawerIsOpen]);

  const { pathname } = useRouter();

  return (
    <GlobalNavPresenter
      pathname={pathname}
      drawerIsOpen={drawerIsOpen}
      handleClick={toggleDrawer}
    />
  );
};

export const GlobalNav: React.FC = () => <GlobalNavContainer />;
