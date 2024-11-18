'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChargingPile, Zap } from "lucide-react"
import Layout from '@/components/layout'
import Link from 'next/link'

const productImages = [
  {
    src: "/images/480kw.png",
    alt: "AntPower 480kW Charger",
    title: "AntPower 480kw",
    description: "Advanced EV charging with smart power management"
  },
  {
    src: "/images/360kw.png",
    alt: "AntPower 360kW Charger",
    title: "AntPower 360kw",
    description: "Premium charging solution with interactive display"
  },
  {
    src: "/images/720kw.png",
    alt: "AntPower 720kW Charger",
    title: "AntPower 720kw",
    description: "Intelligent charging for the future"
  }
]

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Charging",
    description: "Up to 350kW DC charging capability"
  },
  {
    icon: <ChargingPile className="w-6 h-6" />,
    title: "Advanced Safety",
    description: "Multiple safety protocols and certifications"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Smart Management",
    description: "Real-time monitoring and power optimization"
  },
  {
    icon: <ChargingPile className="w-6 h-6" />,
    title: "High Efficiency",
    description: "98% charging efficiency rating"
  }
]

const testimonials = [
  {
    name: "John ",
    role: "Fleet Manager",
    company: "Green Transport Co.",
    content: "AntPower chargers have revolutionized our fleet management. The reliability and speed are unmatched.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Sustainability Director",
    company: "EcoTech Solutions",
    content: "The smart features and power management capabilities have exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    company: "Future Mobility Inc.",
    content: "Outstanding product quality and exceptional customer support. Highly recommended!",
    rating: 5
  }
]

export default function LandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef)
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Layout>
      <div className="relative min-h-screen gradient-bg">
        {/* Animated Sunlight Effect */}
        <div className="sunlight-effect" />

        {/* Hero Section */}
        <motion.section
          className="relative pt-20 pb-16 md:pt-32 md:pb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Powering the Future of
                <span className="text-green-400"> Electric Mobility</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Don&apos;t miss out on the future of EV charging. Join us in revolutionizing the industry.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-500">
                  <Link href="/products">Explore Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-green-500 text-green-400 hover:bg-green-900/20">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Product Showcase */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {productImages.map((product, index) => (
                <motion.div
                  key={product.title}
                  className="relative group float-animation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                >
                  <div className="relative rounded-lg overflow-hidden bg-green-900/20 p-6">
                    <div className="aspect-square relative mb-4">
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                    <p className="text-green-300">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-green-300 max-w-2xl mx-auto">
              Experience the next generation of EV charging technology with our innovative features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-green-800/20 border-green-700 hover:bg-green-800/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-green-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-green-800/20 -mx-6 lg:-mx-8 px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-green-300 max-w-2xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-green-800/20 border-green-700">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-green-500 rounded-full" />
                      ))}
                    </div>
                    <p className="text-green-300 mb-4">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-green-400">{testimonial.role}</p>
                      <p className="text-sm text-green-400">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="py-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Charging Infrastructure?</h2>
          <p className="text-green-300 max-w-2xl mx-auto mb-8">
            Join the future of sustainable energy with AntPower's advanced charging solutions
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-green-500 hover:bg-green-400 text-green-900">
                View Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Contact Sales
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </Layout>
  )
}