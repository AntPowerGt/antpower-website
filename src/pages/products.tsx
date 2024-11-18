'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from 'lucide-react'
import Layout from '@/components/layout'

const products = [
  {
    id: 'antpower-360kw',
    name: 'AntPower 360kW',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-8LJ0JFnMDrEIfmvAKySVd3OsbpCrsN.png',
    description: 'Robust and efficient charging solution with split configurations supporting one-to-two or one-to-three charging setups.',
    features: [
      'Up to 360kW DC output power',
      'Supports up to 8 outputs',
      '4 CCS2 connectors',
      'Intelligent power distribution',
      '>95% efficiency',
      'Comprehensive protection suite'
    ],
    specs: {
      power: '360kW',
      input: '380V AC ±15%',
      current: '548A',
      voltage: '150V-1000V DC',
      dimensions: '105 x 150 x 208 cm',
      weight: '700kg'
    },
    badge: 'Enterprise Grade'
  },
  {
    id: 'antpower-480kw',
    name: 'AntPower 480kW',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K6sXVB2qFZjOURpoyI1rDrfP7cEv2P.png',
    description: 'Enhanced power output system with multiple CCS2 configurations for rapid and efficient charging.',
    features: [
      'Up to 480kW DC output power',
      'One-to-two or one-to-four charging',
      '4 or 8 CCS2 connectors',
      'Advanced power distribution',
      '>95% efficiency',
      'Comprehensive safety features'
    ],
    specs: {
      power: '480kW',
      input: '380V AC ±15%',
      current: '730A',
      voltage: '150V-1000V DC',
      dimensions: '105 x 150 x 208 cm',
      weight: '880kg'
    },
    badge: 'Professional Grade'
  },
  {
    id: 'antpower-720kw',
    name: 'AntPower 720kW',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P2-rCLopbo0pXnbgYjppHj0ZFtXVVr8Lo.png',
    description: 'High-capacity charging system designed for large-scale applications with unparalleled power and flexibility.',
    features: [
      'Up to 720kW DC output power',
      'One-to-two or one-to-four charging',
      '4 or 8 CCS2 connectors',
      'Advanced power management',
      '>95% efficiency',
      'Complete protection suite'
    ],
    specs: {
      power: '720kW',
      input: '380V AC ±15%',
      current: '1095A',
      voltage: '150V-1000V DC',
      dimensions: '105 x 150 x 208 cm',
      weight: '1000kg'
    },
    badge: 'Premium Grade'
  }
]

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-green-300 max-w-2xl mx-auto">
            Discover our range of advanced EV charging solutions designed for every need
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product List */}
          <div className="space-y-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProduct(product)}
              >
                <Card className={`cursor-pointer transition-colors ${
                  selectedProduct.id === product.id 
                    ? 'bg-green-800/30 border-green-500' 
                    : 'bg-green-800/20 border-green-700 hover:bg-green-800/25'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="relative w-32 h-32">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                          {product.badge && (
                            <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                              {product.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-green-300 mb-4">{product.description}</p>
                        
                        <div className="flex flex-wrap gap-4">
                          <Button asChild size="sm" className="bg-green-700 hover:bg-green-600">
                            <Link href="/contact">
                              Get Quote
                            </Link>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-green-700 text-green-300 hover:bg-green-900/20"
                          >
                            <Link href={`/products/${product.id}`}>
                              <span>See More</span>
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Product Details */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="relative h-[400px] bg-green-800/20 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-contain p-8"
                  />
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
                  <p className="text-green-300">{selectedProduct.description}</p>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Key Features</h3>
                    <ul className="space-y-1">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="text-green-300 flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Specifications</h3>
                    <dl className="space-y-3">
                      {Object.entries(selectedProduct.specs).map(([key, value], index) => (
                        <div key={key} className="flex justify-between py-2 border-b border-green-800">
                          <dt className="font-medium capitalize">{key}</dt>
                          <dd className="text-green-300">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link href="/quote-request" className="flex-1">
                    <Button className="w-full bg-green-500 hover:bg-green-400 text-green-900">
                      Request Quote
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button variant="outline" className="w-full border-green-500 text-green-500 hover:bg-green-500/10">
                      Contact Sales
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}