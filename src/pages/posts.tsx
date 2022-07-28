import type { NextPage, NextPageContext } from "next";
import * as React from "react";
import { Posts } from "../types";
import styles from "../styles/posts.module.css";

export const getStaticProps = async (context: NextPageContext) => {
  const data: Posts = await fetch("http://localhost:3000/api/posts").then(
    (response) => response.json(),
  );
  return {
    props: {
      posts: data,
    },
  };
};

type PostsProps = {
  posts: Posts;
};

const Posts: NextPage<PostsProps> = ({ posts }) => (
  <>
    <h1>Posts</h1>
    <div className={styles.postList}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h3 className={styles.title}>{post.title}</h3>
          <span className={styles.createAt}>{post.createdAt}</span>
        </div>
      ))}
    </div>
  </>
);

export default Posts;
