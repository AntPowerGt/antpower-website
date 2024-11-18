'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Battery, Bolt, Clock, Download, Gauge, LineChart, Shield, Thermometer, Menu } from 'lucide-react'
import Layout from '@/components/layout'

const productImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1.7-DX38YQ0KamKUFHl1Trsu1Z1FCtM4GG.png",
    alt: "AntPower White Charger"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-UrpqAl6Ji2MOs9WIvns4BLHT308uLP.png",
    alt: "AntPower Green Charger with Display"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Antp-59X0ZE5lgXmG3fkQbUJsmh2uzHUr0r.png",
    alt: "AntPower Green Charger"
  }
]

export default function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Layout>
      <div className="flex flex-col min-h-screen">
        <motion.div 
          className="fixed inset-0 pointer-events-none"
          style={{ opacity, scale }}
        >
          <div className="absolute inset-0 bg-yellow-500 opacity-5 blur-3xl rounded-full w-[800px] h-[800px] -top-1/2 -left-1/2 animate-pulse"></div>
          <div className="absolute inset-0 bg-yellow-500 opacity-5 blur-3xl rounded-full w-[600px] h-[600px] -bottom-1/4 -right-1/4 animate-pulse"></div>
        </motion.div>
        <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <motion.div 
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-green-100 text-[#052612] mb-4 animate-pulse">Future-Ready Energy</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-100 to-green-300">
                    Transform Your Petrol Station into a Future-Ready Energy Hub
                  </h1>
                  <p className="max-w-[600px] text-green-200 md:text-xl">
                    High-Power EV Charging Solutions from 360kW to 720kW. Designed for seamless integration with existing
                    infrastructure.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white transition-all duration-300 shadow-lg hover:shadow-green-500/50 rounded-full">
                    <Link href="/products">
                      View Charging Solutions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-green-600 text-green-300 hover:bg-[#0a3d1f] transition-all duration-300 rounded-full">
                    <Link href="/quote-request">
                      Request Quote
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative w-full h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      alt={productImages[currentImageIndex].alt}
                      className="mx-auto aspect-square overflow-hidden rounded-xl object-contain object-center"
                      height={600}
                      width={600}
                      src={productImages[currentImageIndex].src}
                      priority={currentImageIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-green-300 w-4' : 'bg-green-600'
                      }`}
                      aria-label={`Show image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </section>
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#0a3d1f] bg-opacity-50 backdrop-blur-md rounded-3xl my-8">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">Key Benefits</h2>
                  <p className="max-w-[900px] text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Maximize your station's potential with our advanced EV charging solutions
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: LineChart, title: "Revenue Growth", description: "Create new revenue streams with high-power EV charging services" },
                  { icon: Gauge, title: "Space Efficient", description: "Compact design integrates seamlessly with existing forecourt layout" },
                  { icon: Bolt, title: "Smart Power", description: "Intelligent power distribution and remote management capabilities" },
                  { icon: Shield, title: "Future-Proof", description: "Scalable solutions that grow with increasing EV charging demand" }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-[#0d4d27] border-[#1a5f3c] shadow-lg hover:shadow-green-500/50 transition-all duration-300 group hover:-translate-y-2">
                      <CardHeader>
                        <feature.icon className="h-10 w-10 text-green-300 group-hover:scale-110 transition-transform duration-300" />
                        <CardTitle className="text-green-100">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-green-200">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-[#0a3d1f] bg-opacity-50 backdrop-blur-md rounded-3xl my-8">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">Product Range</h2>
                  <p className="max-w-[900px] text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose the perfect charging solution for your station
                  </p>
                </div>
              </div>
              <Tabs defaultValue="360kw" className="mt-8">
                <TabsList className="grid w-full grid-cols-3 bg-[#1a5f3c] rounded-full p-1">
                  {['360kw', '480kw', '720kw'].map((kw) => (
                    <TabsTrigger key={kw} value={kw} className="data-[state=active]:bg-[#2a7f5c] rounded-full transition-all duration-300 text-green-100 hover:text-white">
                      {kw.toUpperCase()} Series
                    </TabsTrigger>
                  ))}
                </TabsList>
                {['360kw', '480kw', '720kw'].map((kw) => (
                  <TabsContent key={kw} value={kw} className="mt-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      {[4, 6].map((ccs) => (
                        <Card key={`${kw}-${ccs}`} className="bg-[#0d4d27] border-[#1a5f3c] shadow-lg group hover:shadow-green-500/50 transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="text-green-100">{kw.toUpperCase()} - {ccs} CCS2</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-green-200">
                              {[
                                { icon: Battery, text: `${90 / (ccs / 4)}kW per gun average output` },
                                { icon: Clock, text: "24/7 operation capability" },
                                { icon: Thermometer, text: "-30°C to 70°C operating range" }
                              ].map((item, index) => (
                                <motion.div 
                                  key={index}
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                  <item.icon className="h-4 w-4 text-green-300 group-hover:scale-110 transition-transform duration-300" />
                                  <span>{item.text}</span>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
          <section id="specifications" className="w-full py-12 md:py-24 lg:py-32 bg-[#0a3d1f] bg-opacity-50 backdrop-blur-md rounded-3xl my-8">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">Technical Specifications</h2>
                  <p className="max-w-[900px] text-green-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Industry-leading specifications for reliable charging performance
                  </p>
                </div>
              </div>
              <div className="mt-8 overflow-hidden rounded-2xl">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#1a5f3c] ">
                      <TableHead className="text-green-100">Specification</TableHead>
                      <TableHead className="text-green-100">Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { spec: "Input Voltage", details: "380Vac±15%" },
                      { spec: "Power Factor", details: ">0.99" },
                      { spec: "Output Voltage Range", details: "150V-1000V" },
                      { spec: "Max Efficiency", details: ">95.0%" },
                      { spec: "Protection Rating", details: "IP54/IP55" },
                      { spec: "Operating Temperature", details: "-30°C to 70°C" }
                    ].map((row) => (
                      <TableRow key={row.spec} className="border-[#1a5f3c] hover:bg-[#1a5f3c]/50 transition-colors duration-200">
                        <TableCell className="text-green-200 font-medium">{row.spec}</TableCell>
                        <TableCell className="text-green-200">{row.details}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
          <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#0a3d1f] bg-opacity-50 backdrop-blur-md rounded-3xl my-8">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">Ready to Transform Your Station?</h2>
                    <p className="max-w-[600px] text-green-200 md:text-xl">
                      Get in touch with our experts to discuss your EV charging needs
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white transition-all duration-300 shadow-lg hover:shadow-green-500/50 rounded-full">
                      <Link href="/contact">
                        Contact Sales
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-green-600 text-green-300 hover:bg-[#0d4d27] transition-all duration-300 rounded-full">
                      <Link href="/specifications.pdf" target="_blank" rel="noopener noreferrer">
                        Download Specifications
                        <Download className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-green-100">Documentation</h3>
                      <p className="text-sm text-green-200">Access detailed product information and technical specifications</p>
                    </div>
                    <div className="grid gap-2">
                      {[
                        { name: 'Product Catalog', href: '/product-catalog.pdf' },
                        { name: 'Technical Documentation', href: '/technical-documentation.pdf' },
                        { name: 'Installation Guide', href: '/installation-guide.pdf' }
                      ].map((doc) => (
                        <Button key={doc.name} variant="outline" className="w-full justify-start border-green-600 text-green-300 hover:bg-[#0d4d27] transition-all duration-300 group">
                          <Link href={doc.href} target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                            <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                            {doc.name}
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}