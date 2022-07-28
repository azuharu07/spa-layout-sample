import * as React from "react";

import { GlobalNavLayout } from "../components/layouts/GlobalNavLayout";
import { User } from "../types";
import type { NextPageWithLayout } from "./_app";

export const getStaticProps = async () => {
  const data: User = await fetch("http://localhost:3000/api/user").then(
    (response) => response.json(),
  );

  return {
    props: {
      user: data,
    },
  };
};

type HomeProps = {
  user: User;
};

const Home: NextPageWithLayout<HomeProps> = ({ user }) => (
  <>
    <h1>{user.name}</h1>
    <h3>自己紹介</h3>
    <p>{user.profile}</p>
  </>
);

Home.getLayout = (page: React.ReactElement) => (
  <GlobalNavLayout>{page}</GlobalNavLayout>
);

export default Home;
