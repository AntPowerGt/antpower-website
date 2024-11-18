'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Layout from '@/components/layout'

const productImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P2-kFiaeOe4wTtr5ZE1TMzMnTIKYpCoVN.png",
    alt: "AntPower 480kW Power Cabinet - Front View"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Antp-CGmxHltdSgJKT5YhOorR0OmwVhvGtO.png",
    alt: "AntPower Charging Terminal - White"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1.7-gHQglIaLaDx4DOYo3BU1u61SmM7tsK.png",
    alt: "AntPower Charging Terminal - Green"
  }
]

const keyFeatures = [
  "Split one-to-two or one-to-four charging configurations",
  "Up to 8 output channels for simultaneous charging",
  "Intelligent power distribution system",
  "Advanced safety protection features",
  "Remote management capabilities",
  "High efficiency over 95%"
]

const specifications = [
  { name: "Input Voltage", value: "380V AC ±15%" },
  { name: "Output Voltage Range", value: "150-1000V DC" },
  { name: "Maximum Current", value: "730A" },
  { name: "Maximum Output Power", value: "480kW" },
  { name: "Power Cabinet Weight", value: "880kg" },
  { name: "Terminal Unit Weight", value: "130kg" },
  { name: "Protection Rating", value: "IP54 (Power Cabinet), IP55 (Terminals)" },
  { name: "Display", value: "7-inch color touch screen" },
  { name: "Operating Temperature", value: "-30°C to 70°C" }
]

const safetyFeatures = [
  "Over-voltage protection",
  "Under-voltage protection",
  "Short circuit protection",
  "Reverse connection protection",
  "Temperature protection",
  "Ground fault protection",
  "Insulation fault protection"
]

export default function ProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 py-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Product Images */}
              <div className="relative aspect-square bg-[#0a3d1f] rounded-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                  >
                    <Image
                      src={productImages[currentImageIndex].src}
                      alt={productImages[currentImageIndex].alt}
                      width={600}
                      height={600}
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4 bg-green-100 text-green-900 hover:bg-green-100">High Capacity</Badge>
                  <h1 className="text-4xl font-bold text-green-100">AntPower 480kW Charging System</h1>
                  <p className="mt-4 text-xl text-green-200">Advanced Split Charging Solution</p>
                </div>
                <p className="text-green-200">
                  The Antpower 480kW charging system delivers robust and efficient EV charging capabilities designed for 
                  high-demand applications. It offers advanced split one-to-two or one-to-four charging configurations, 
                  supporting up to 8 output channels for simultaneous usage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">
                    <Link href="/quote-request">
                      <Mail className="mr-2 h-4 w-4" />
                      Request Quote
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-green-600 text-green-300 hover:bg-green-900/20">
                    <Download className="mr-2 h-4 w-4" />
                    Download Specs
                  </Button>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <Card className="mt-12 bg-[#0a3d1f] border-green-600">
              <CardHeader>
                <CardTitle className="text-2xl text-green-100">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-green-200">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="mt-8 bg-[#0a3d1f] border-green-600">
              <CardHeader>
                <CardTitle className="text-2xl text-green-100">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {specifications.map((spec) => (
                      <TableRow key={spec.name} className="border-green-600">
                        <TableCell className="font-medium text-green-200">{spec.name}</TableCell>
                        <TableCell className="text-green-200">{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Safety Features */}
            <Card className="mt-8 bg-[#0a3d1f] border-green-600">
              <CardHeader>
                <CardTitle className="text-2xl text-green-100">Safety Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {safetyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center text-green-200">
                      <div className="h-2 w-2 rounded-full bg-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </Layout>
  )
}