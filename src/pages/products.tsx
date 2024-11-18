import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Battery, Shield, Gauge, Clock, LineChart, Wifi, PenToolIcon as Tool, CloudCog } from 'lucide-react'
import Layout from '@/components/layout'  // Correct import for the Layout component

const products = [
  {
    name: "AntPower 360kW",
    description: "High-power DC fast charging for all types of electric vehicles.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-UrpqAl6Ji2MOs9WIvns4BLHT308uLP.png",
    features: [
      { icon: Zap, text: "360kW max output" },
      { icon: Battery, text: "CCS1 & CCS2 compatible" },
      { icon: Clock, text: "15-30 min charging time" },
    ],
  },
  {
    name: "AntPower 480kW",
    description: "Ultra-fast charging solution for commercial and fleet applications.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Antp-59X0ZE5lgXmG3fkQbUJsmh2uzHUr0r.png",
    features: [
      { icon: Gauge, text: "480kW max output" },
      { icon: Shield, text: "Advanced safety features" },
      { icon: LineChart, text: "Smart power management" },
    ],
  },
  {
    name: "AntPower 720kW",
    description: "Next-generation charging for high-capacity vehicles and busy stations.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P1.7-DX38YQ0KamKUFHl1Trsu1Z1FCtM4GG.png",
    features: [
      { icon: Wifi, text: "Remote monitoring" },
      { icon: Tool, text: "Modular design" },
      { icon: CloudCog, text: "Cloud-based management" },
    ],
  },
]

export default function ProductsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">
          Our Charging Solutions
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="bg-[#0a3d1f] border-green-600">
              <CardHeader>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover mb-4"
                />
                <CardTitle className="text-2xl font-bold text-green-100">{product.name}</CardTitle>
                <CardDescription className="text-green-300">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-green-200">
                      <feature.icon className="w-5 h-5 mr-2 text-green-400" />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">
                  <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-center w-full">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}