import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/utils/sendEmail'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    try {
      await sendEmail(
        process.env.RECIPIENT_EMAIL,
        'New Contact Form Submission',
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      )
      res.status(200).json({ message: 'Email sent successfully' })
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}