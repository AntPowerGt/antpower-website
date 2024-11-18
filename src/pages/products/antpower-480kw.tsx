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
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'features' | 'specs'>('features')

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12 px-4 sm:px-6 lg:px-8"
      >
        {/* Product Header */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">AntPower 480kW</h1>
            <p className="text-xl text-green-300 mb-6">Advanced DC Charging Solution</p>
            <Badge variant="secondary" className="bg-green-800/40 text-green-300 mb-8">
              Professional Grade
            </Badge>
          </motion.div>

          {/* Product Image Carousel */}
          <div className="relative mb-16 rounded-2xl overflow-hidden bg-green-900/20 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="aspect-[16/9] relative rounded-xl overflow-hidden"
              >
                <Image
                  src={productImages[activeImageIndex].src}
                  alt={productImages[activeImageIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            
            {productImages.length > 1 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeImageIndex ? 'bg-green-500' : 'bg-green-800'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg bg-green-900/20 p-1">
              <button
                onClick={() => setActiveTab('features')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'features' ? 'bg-green-800 text-green-100' : 'text-green-300'
                }`}
              >
                Key Features
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'specs' ? 'bg-green-800 text-green-100' : 'text-green-300'
                }`}
              >
                Specifications
              </button>
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'features' ? (
              <motion.div
                key="features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {keyFeatures.map((feature, index) => (
                  <Card key={index} className="bg-green-800/20 border-green-700">
                    <CardContent className="p-6">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-green-100"
                      >
                        {feature}
                      </motion.p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="specs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card className="bg-green-800/20 border-green-700">
                  <Table>
                    <TableBody>
                      {specifications.map((spec, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium text-green-300">{spec.name}</TableCell>
                          <TableCell className="text-right text-green-100">{spec.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button className="w-full sm:w-auto" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Datasheet
            </Button>
            <Link href="/contact">
              <Button variant="secondary" className="w-full sm:w-auto" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  )
}