'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ArrowRight, ArrowLeft, Check, X } from 'lucide-react'

const steps = [
  { id: 'contact', title: 'Contact Information' },
  { id: 'product', title: 'Product Selection' },
  { id: 'requirements', title: 'Installation Requirements' },
  { id: 'additional', title: 'Additional Specifications' },
]

const products = [
  { id: '360kw-4ccs2', name: 'AntPower 360kW - 4 CCS2', price: 50000 },
  { id: '360kw-6ccs2', name: 'AntPower 360kW - 6 CCS2', price: 60000 },
  { id: '480kw-4ccs2', name: 'AntPower 480kW - 4 CCS2', price: 70000 },
  { id: '480kw-8ccs2', name: 'AntPower 480kW - 8 CCS2', price: 85000 },
  { id: '720kw-6ccs2', name: 'AntPower 720kW - 6 CCS2', price: 100000 },
  { id: '720kw-8ccs2', name: 'AntPower 720kW - 8 CCS2', price: 120000 },
]

export default function Component() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: 1,
    installationType: '',
    location: '',
    existingInfrastructure: '',
    additionalFeatures: [],
    comments: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState({ type: '', message: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleNextStep = () => {
    setCurrentStep(prevStep => Math.min(prevStep + 1, steps.length - 1))
  }

  const handlePrevStep = () => {
    setCurrentStep(prevStep => Math.max(prevStep - 1, 0))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatusMessage({ type: '', message: '' })

    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatusMessage({
          type: 'success',
          message: "Your quote request has been submitted successfully."
        })
        setCurrentStep(steps.length) // Move to success step
      } else {
        throw new Error('Failed to submit quote request')
      }
    } catch (error) {
      setStatusMessage({
        type: 'error',
        message: "Failed to submit quote request. Please try again later."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-green-100">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-[#0a3d1f] border-[#1a5f3c] text-green-100 placeholder:text-green-400"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-green-100">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-[#0a3d1f] border-[#1a5f3c] text-green-100 placeholder:text-green-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-green-100">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="bg-[#0a3d1f] border-[#1a5f3c] text-green-100 placeholder:text-green-400"
                  placeholder="Your company name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-green-100">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-[#0a3d1f] border-[#1a5f3c] text-green-100 placeholder:text-green-400"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="product" className="text-green-100">Select Product</Label>
              <Select name="product" onValueChange={(value) => setFormData(prev => ({ ...prev, product: value }))}>
                <SelectTrigger className="bg-[#0a3d1f] border-[#1a5f3c] text-green-100">
                  <SelectValue placeholder="Choose a product" />
                </SelectTrigger>
                <SelectContent>
                  {products.map(product => (
                    <SelectItem key={product.id} value={product.id}>{product.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity" className="text-green-100">Quantity</Label>
              <Slider
                id="quantity"
                min={1}
                max={10}
                step={1}
                value={[formData.quantity]}
                onValueChange={(value) => setFormData(prev => ({ ...prev, quantity: value[0] }))}
                className="py-4"
              />
              <div className="text-center text-green-100">{formData.quantity}</div>
            </div>
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-green-100 mb-2">Estimated Price</h3>
              <p className="text-2xl font-bold text-green-300">
                ${((products.find(p => p.id === formData.product)?.price || 0) * formData.quantity).toLocaleString()}
              </p>
              <p className="text-sm text-green-400">*Final price may vary based on additional requirements</p>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-green-100">Installation Type</Label>
              <RadioGroup
                name="installationType"
                value={formData.installationType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, installationType: value }))}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="new" id="new" className="border-green-400 text-green-400" />
                  <Label htmlFor="new" className="text-green-100">New Installation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="upgrade" id="upgrade" className="border-green-400 text-green-400" />
                  <Label htmlFor="upgrade" className="text-green-100">Upgrade Existing</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="text-green-100">Installation Location</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="bg-[#0a3d1f] border-[#1a5f3c] text-green-100 placeholder:text-green-400"
                placeholder="Address or general location description"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="existingInfrastructure" className="text-green-100">Existing Infrastructure</Label>
              <Textarea
                id="existingInfrastructure"
                name="existingInfrastructure"
                value={formData.existingInfrastructure}
                onChange={handleInputChange}
                className="bg-[#0a3d1f] border-[#1a5f3c] text-green-100 placeholder:text-green-400"
                placeholder="Describe any relevant existing electrical infrastructure"
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-green-100">Additional Features</Label>
              <div className="grid grid-cols-2 gap-4">
                {['Load Management', 'Payment System', 'Network Integration', 'Custom Branding'].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Switch
                      id={feature}
                      checked={formData.additionalFeatures.includes(feature)}
                      onCheckedChange={(checked) => {
                        setFormData(prev => ({
                          ...prev,
                          additionalFeatures: checked
                            ? [...prev.additionalFeatures, feature]
                            : prev.additionalFeatures.filter(f => f !== feature)
                        }))
                      }}
                    />
                    <Label htmlFor={feature} className="text-green-100">{feature}</Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="comments" className="text-green-100">Additional Comments</Label>
              <Textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                className="bg-[#0a3d1f] border-[#1a5f3c] text-green-100 placeholder:text-green-400"
                placeholder="Any other details or requirements you'd like to share"
              />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-green-100">Quote Request Submitted</h2>
            <p className="text-green-200">Thank you for your interest in AntPower products. Our team will review your request and get back to you shortly with a detailed quote.</p>
            <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white" onClick={() => window.location.href = '/'}>
              Return to Home
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#052612] text-green-50">
      <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-[#0a3d1f] bg-opacity-80 backdrop-blur-md rounded-full mx-4 my-2">
        <Link className="flex items-center justify-center" href="/">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-vdeE7H8FysCEOPgJAPPZpP400vMCrz.png" 
            alt="AntPower Logo" 
            width={120} 
            height={40} 
            className="mr-2" 
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {['Features', 'Products', 'Specifications', 'Contact'].map((item) => (
            <Link key={item} className="text-sm font-medium hover:text-green-300 transition-colors relative group" href={`/${item.toLowerCase()}`}>
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-100">Request a Quote</h1>
        
        {statusMessage.message && (
          <div className={`mb-4 p-4 rounded-md ${statusMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
            {statusMessage.message}
          </div>
        )}
        
        {currentStep < steps.length && (
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStep ? 'bg-green-600 text-white' : 'bg-[#0a3d1f] text-green-400'
                  }`}>
                    {index < currentStep ? <Check className="w-5 h-5" /> : index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-1 w-full ${
                      index < currentStep ? 'bg-green-600' : 'bg-[#0a3d1f]'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {steps.map((step, index) => (
                <span key={step.id} className={`text-sm ${
                  index <= currentStep ? 'text-green-300' : 'text-green-500'
                }`}>
                  {step.title}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <Card className="bg-[#0a3d1f] border-[#1a5f3c]">
          <CardHeader>
            <CardTitle className="text-2xl text-green-100">
              {currentStep < steps.length ? steps[currentStep].title : 'Quote Submitted'}
            </CardTitle>
            <CardDescription className="text-green-300">
              {currentStep < steps.length ? `Step ${currentStep + 1} of ${steps.length}` : 'Thank you for your request'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {renderStepContent()}
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {currentStep > 0 && currentStep < steps.length && (
              <Button type="button" onClick={handlePrevStep} variant="outline" className="bg-[#0d4d27] border-[#1a5f3c] text-green-100 hover:bg-[#1a5f3c]">
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
            )}
            {currentStep < steps.length - 1 && (
              <Button type="button" onClick={handleNextStep} className="ml-auto bg-green-600 hover:bg-green-700 text-white">
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button type="submit" onClick={handleSubmit} className="ml-auto bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>

      <footer className="w-full py-6 px-4 md:px-6 border-t border-[#1a5f3c] bg-[#0a3d1f] bg-opacity-80 backdrop-blur-md mt-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-vdeE7H8FysCEOPgJAPPZpP400vMCrz.png" 
              alt="AntPower Logo" 
              width={80} 
              height={24} 
            />
            <p className="text-sm text-green-300">© 2024 AntPower. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
              <Link key={item} className="text-xs hover:underline underline-offset-4 text-green-200 hover:text-green-100 transition-colors duration-200" href="#">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}