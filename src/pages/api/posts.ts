// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Posts } from '../../types'

const samplePosts = [
  {
    id: 1,
    title: "サンプル記事１",
    body: "これはサンプル記事１の中身です。",
    createdAt: "2022-07-01"
  },
  {
    id: 2,
    title: "サンプル記事２",
    body: "これはサンプル記事２の中身です。",
    createdAt: "2022-07-02"
  },
  {
    id: 3,
    title: "サンプル記事３",
    body: "これはサンプル記事３の中身です。",
    createdAt: "2022-07-03"
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Posts>
) {
  res.status(200).json(samplePosts)
}
