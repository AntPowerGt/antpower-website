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
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-8LJ0JFnMDrEIfmvAKySVd3OsbpCrsN.png",
    alt: "AntPower 360kW DC Fast Charger - Front View"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K6sXVB2qFZjOURpoyI1rDrfP7cEv2P.png",
    alt: "AntPower 360kW Complete System Setup"
  }
]

const keyFeatures = [
  "Simultaneous charging of two vehicles",
  "Ultra-fast charging with up to 360 kW output",
  "Intelligent power distribution",
  "Remote management via app, Ethernet, 4G, or Wi-Fi",
  "Modular design for easy maintenance and upgrades"
]

const specifications = [
  { name: "Rated Power", value: "360 kW" },
  { name: "Maximum Current", value: "200A/250A per connector" },
  { name: "Efficiency", value: "Up to 95%" },
  { name: "Input Voltage", value: "400 VAC ±10%" },
  { name: "Output Voltage", value: "200-1000 VDC" },
  { name: "Protection Rating", value: "IP55" },
  { name: "Operating Temperature", value: "-30°C to 55°C" },
  { name: "Display", value: "7-inch or 15.6-inch color touch screen" },
  { name: "Dimensions (WDH)", value: "800mm * 700mm * 1800mm" }
]

const certifications = ["CE", "ANATEL", "IEC 61851-1:2019", "IEC61851-21-2:2021"]

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
                  <Badge className="mb-4 bg-green-100 text-green-900 hover:bg-green-100">New Release</Badge>
                  <h1 className="text-4xl font-bold text-green-100">AntPower 360kW DC Fast Charger</h1>
                  <p className="mt-4 text-xl text-green-200">All-in-One Charging Solution</p>
                </div>
                <p className="text-green-200">
                  With its modular design comprising six 60 kW units, the charging infrastructure offers you unparalleled 
                  flexibility and future-proofing. Compact and efficient charging solution ideal for small to medium stations. 
                  Single power cabinet design with CCS2 connectors delivering reliable fast charging for standard EVs.
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

            {/* Certifications */}
            <Card className="mt-8 bg-[#0a3d1f] border-green-600">
              <CardHeader>
                <CardTitle className="text-2xl text-green-100">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <Badge key={cert} variant="secondary" className="bg-green-900/50 text-green-100">
                      {cert}
                    </Badge>
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