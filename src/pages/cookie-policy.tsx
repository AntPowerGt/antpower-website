import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from '@/components/layout'

export default function CookiePolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content: [
        "This Cookie Policy explains how AntPower (\"we\", \"us\", or \"our\") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
        "By continuing to use our website, you are agreeing to our use of cookies as described in this Cookie Policy."
      ]
    },
    {
      title: "2. What are Cookies?",
      content: [
        "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.",
        "Cookies set by the website owner (in this case, AntPower) are called \"first-party cookies\". Cookies set by parties other than the website owner are called \"third-party cookies\". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics)."
      ]
    },
    {
      title: "3. Why Do We Use Cookies?",
      content: [
        "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as \"essential\" or \"strictly necessary\" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes. This is described in more detail below.",
        "The specific types of first- and third-party cookies served through our website and the purposes they perform are described below:",
        <ul key="cookie-types" className="list-disc list-inside space-y-2">
          <li>Essential website cookies: These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</li>
          <li>Performance and functionality cookies: These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.</li>
          <li>Analytics and customization cookies: These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</li>
          <li>Advertising cookies: These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</li>
        </ul>
      ]
    },
    {
      title: "4. How Can You Control Cookies?",
      content: [
        "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner or cookie settings menu on our website.",
        "You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.",
        "In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit http://www.aboutads.info/choices/ or http://www.youronlinechoices.com."
      ]
    },
    {
      title: "5. Changes to This Cookie Policy",
      content: [
        "We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.",
        "The date at the top of this Cookie Policy indicates when it was last updated."
      ]
    },
    {
      title: "6. Contact Information",
      content: [
        "If you have any questions about our use of cookies or other technologies, please contact us at:",
        <p key="contact-info" className="mt-2">
          AntPower<br />
          Kronborgsgränd 19<br />
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
          Cookie Policy
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