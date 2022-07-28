import React from "react";
import styles from "./index.module.css";

type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <main className={styles.main}>{children}</main>
);
