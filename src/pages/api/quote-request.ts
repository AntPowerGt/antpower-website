import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { 
      name, 
      email, 
      company, 
      phone, 
      product, 
      quantity, 
      installationType, 
      location, 
      existingInfrastructure, 
      additionalFeatures, 
      comments 
    } = req.body

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: 'info@antpower.se',
        subject: `New Quote Request from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Company: ${company}
          Phone: ${phone}
          Product: ${product}
          Quantity: ${quantity}
          Installation Type: ${installationType}
          Location: ${location}
          Existing Infrastructure: ${existingInfrastructure}
          Additional Features: ${additionalFeatures.join(', ')}
          Comments: ${comments}
        `,
        html: `
          <h1>New Quote Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Installation Type:</strong> ${installationType}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Existing Infrastructure:</strong> ${existingInfrastructure}</p>
          <p><strong>Additional Features:</strong> ${additionalFeatures.join(', ')}</p>
          <p><strong>Comments:</strong> ${comments}</p>
        `,
      })

      res.status(200).json({ message: 'Quote request submitted successfully' })
    } catch (error) {
      console.error('Failed to send email:', error)
      res.status(500).json({ message: 'Failed to submit quote request' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}