import React from "react";
import { GlobalNav } from "../../GlobalNav";
import styles from "./index.module.css";

type GlobalNavLayoutProps = {
  children: React.ReactNode;
};
export const GlobalNavLayout: React.FC<GlobalNavLayoutProps> = ({
  children,
}) => (
  <div className={styles.layout}>
    <GlobalNav />
    {children}
  </div>
);
