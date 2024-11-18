import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from '@/components/layout'

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: [
        "AntPower is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our products, or interact with our services.",
        "By using our services, you consent to the data practices described in this policy. If you do not agree with the data practices described in this policy, you should not use our services."
      ]
    },
    {
      title: "2. Information We Collect",
      content: [
        "We collect several types of information from and about users of our services, including:",
        <ul key="collect-info" className="list-disc list-inside space-y-2">
          <li>Personal information (such as name, email address, phone number) that you voluntarily provide when registering or contacting us</li>
          <li>Usage data (such as IP address, browser type, pages visited) automatically collected when you interact with our website</li>
          <li>Charging session data (such as location, duration, energy consumed) when you use our EV charging products</li>
          <li>Payment information when you make purchases or subscribe to our services</li>
        </ul>
      ]
    },
    {
      title: "3. How We Use Your Information",
      content: [
        "We use the information we collect about you for various purposes, including:",
        <ul key="use-info" className="list-disc list-inside space-y-2">
          <li>Providing, maintaining, and improving our services</li>
          <li>Processing transactions and sending related information</li>
          <li>Responding to your comments, questions, and requests</li>
          <li>Sending you technical notices, updates, security alerts, and support messages</li>
          <li>Monitoring and analyzing trends, usage, and activities in connection with our services</li>
          <li>Personalizing and improving the services and providing content or features that match user profiles or interests</li>
        </ul>
      ]
    },
    {
      title: "4. Data Sharing and Disclosure",
      content: [
        "We may share your information in the following situations:",
        <ul key="share-info" className="list-disc list-inside space-y-2">
          <li>With service providers who perform services on our behalf</li>
          <li>To comply with legal obligations or respond to lawful requests</li>
          <li>To protect the rights, property, or safety of AntPower, our users, or others</li>
          <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
        </ul>,
        "We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent."
      ]
    },
    {
      title: "5. Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.",
        "While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security."
      ]
    },
    {
      title: "6. Your Rights and Choices",
      content: [
        "Depending on your location, you may have certain rights regarding your personal information, including:",
        <ul key="rights" className="list-disc list-inside space-y-2">
          <li>The right to access, correct, or delete your personal information</li>
          <li>The right to object to or restrict certain processing of your data</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent at any time, where processing is based on your consent</li>
        </ul>,
        "To exercise these rights or for any questions about this Privacy Policy, please contact us using the information provided in the \"Contact Information\" section."
      ]
    },
    {
      title: "7. Changes to This Privacy Policy",
      content: [
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date at the top of this Privacy Policy.",
        "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
      ]
    },
    {
      title: "8. Contact Information",
      content: [
        "If you have any questions about this Privacy Policy, please contact us at:",
        <p key="contact-info" className="mt-2">
          AntPower<br />
          Kronborgsgränd 19,<br />
          164 46, Kista,<br />
          Sweden<br />
          Email: privacy@antpower.com<br />
          Phone: +46-793391988
        </p>
      ]
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">
          Privacy Policy
        </h1>
        {sections.map((section, index) => (
          <Card key={index} className="bg-[#0a3d1f] border-green-600 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-100">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-green-200 space-y-4">
              {section.content.map((paragraph, pIndex) => (
                <React.Fragment key={pIndex}>
                  {typeof paragraph === 'string' ? <p>{paragraph}</p> : paragraph}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Layout>
  )
}