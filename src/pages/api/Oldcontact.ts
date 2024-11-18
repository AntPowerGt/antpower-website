import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/utils/sendEmail'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    try {
      const recipientEmail = process.env.RECIPIENT_EMAIL
      if (!recipientEmail) {
        throw new Error('RECIPIENT_EMAIL environment variable is not set')
      }

      await sendEmail(
        recipientEmail,
        'New Contact Form Submission',
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      )

      res.status(200).json({ message: 'Email sent successfully' })
    } catch (err) {
      console.error('Error sending email:', err)
      res.status(500).json({ error: 'Failed to send email' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}