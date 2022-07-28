import type { NextPage, NextPageContext } from "next";
import { User } from "../types";

export const getStaticProps = async (context: NextPageContext) => {
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

const Home: NextPage<HomeProps> = ({ user }) => (
  <>
    <h1>{user.name}</h1>
    <h3>自己紹介</h3>
    <p>{user.profile}</p>
  </>
);

export default Home;
