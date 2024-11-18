'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import Layout from '@/components/layout'

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  preferredContact: string;
  subject: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  preferredContact: 'email',
  subject: ''
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleRadioChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      preferredContact: value
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prevState => ({
      ...prevState,
      subject: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Your message has been sent successfully.' })
        setFormData(initialFormData)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">Contact Us</h1>
        {submitStatus.type && (
          <div className={`mb-4 p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="text-gray-900" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="text-gray-900" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="text-gray-900" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" value={formData.company} onChange={handleInputChange} className="text-gray-900" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Select onValueChange={handleSelectChange} value={formData.subject || undefined}>
                  <SelectTrigger className="text-gray-900 bg-white">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required className="text-gray-900 bg-white" />
              </div>
              <div className="space-y-2">
                <Label>Preferred Contact Method</Label>
                <RadioGroup value={formData.preferredContact} onValueChange={handleRadioChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-radio" />
                    <Label htmlFor="email-radio">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-radio" />
                    <Label htmlFor="phone-radio">Phone</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-300">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-green-400" />
                  <span>info@antpower.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-green-400" />
                  <span>+46-793391988</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-green-400" />
                  <span>Address: Kronborgsgränd 19, 164 46, Kista, Sweden.</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-300">Office Hours</h2>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}