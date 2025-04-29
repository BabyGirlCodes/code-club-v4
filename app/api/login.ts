import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { email, password } = req.body

  const validEmail = "admin@codeclub.edu"
  const validPassword = "admin123"

  if (email === validEmail && password === validPassword) {
    return res.status(200).json({ message: "Login successful" })
  } else {
    return res.status(401).json({ message: "Invalid email or password" })
  }
}
