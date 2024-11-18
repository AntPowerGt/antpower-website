import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Layout from '@/components/layout'

export default function TermsOfService() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-[#0a3d1f] border-green-600">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">
              Terms of Service
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-green-300 mb-4">1. Acceptance of Terms</h2>
            <p className="text-lg text-gray-600 mb-6">
              By accessing and using AntPower&apos;s website and services, you agree to these terms.
            </p>

            <h2 className="text-2xl font-semibold text-green-300 mb-4">2. Use of Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              AntPower&apos;s intellectual property is protected by law.
            </p>

            <h2 className="text-2xl font-semibold text-green-300 mb-4">3. Payment and Billing</h2>
            <p className="text-lg text-gray-600 mb-6">
              AntPower&apos;s services are provided &quot;as is&quot; without warranty.
            </p>

            <h2 className="text-2xl font-semibold text-green-300 mb-4">4. Limitation of Liability</h2>
            <p className="text-green-100 mb-4">
              AntPower shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
            </p>

            <h2 className="text-2xl font-semibold text-green-300 mb-4">5. Modifications to Terms</h2>
            <p className="text-green-100 mb-4">
              AntPower reserves the right to modify these Terms of Service at any time. We will notify users of any significant changes. Your continued use of our services after such modifications will constitute your acknowledgment and agreement to the modified terms.
            </p>

            <h2 className="text-2xl font-semibold text-green-300 mb-4">6. Governing Law</h2>
            <p className="text-green-100 mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which AntPower is registered, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-semibold text-green-300 mb-4">7. Contact Information</h2>
            <p className="text-green-100 mb-4">
              If you have any questions about these Terms of Service, please contact us at legal@antpower.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}