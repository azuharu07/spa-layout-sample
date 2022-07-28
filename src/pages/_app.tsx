import * as React from "react";

import "../styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/layouts/MainLayout";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>,
  );
}

export default MyApp;
