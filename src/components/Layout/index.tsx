import React from "react";
import { GlobalNav } from "../GlobalNav";
import styles from "./index.module.css";

type LayoutProps = {
  children: React.ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>
    <GlobalNav />
    <main className={styles.main}>{children}</main>
  </div>
);
