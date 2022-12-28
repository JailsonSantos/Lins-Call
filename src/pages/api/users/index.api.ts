// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { setCookie } from 'nookies'
import { prisma } from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  if (userExists) {
    return res.status(400).json({ message: 'Username already exists.' })
  }

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  setCookie({ res }, '@linscall:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days => 1M, 1H, 1D, 7D
    path: '/',
  })

  return res.status(201).json(user)
}