// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../types'

const sampleUser =
{
  name: "サンプル 太郎",
  profile: "これはサンプル太郎の自己紹介文です",
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json(sampleUser)
}
