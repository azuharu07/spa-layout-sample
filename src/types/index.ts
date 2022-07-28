export type User = {
  name: string;
  profile: string
}

export type Post = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

export type Posts = Post[]
