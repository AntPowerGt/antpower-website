'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Zap, Shield, Gauge, ThermometerSun, Waves, Power, Cable, Timer, Scale, Ruler, ShieldAlert, Wifi, CreditCard, BarChart, Smartphone } from 'lucide-react'
import Layout from '@/components/layout'
import Link from 'next/link'

const features = [
  {
    category: 'Performance',
    items: [
      { icon: Zap, title: 'High Power Output', description: 'Deliver up to 720kW of charging power for rapid EV charging.' },
      { icon: Timer, title: 'Fast Charging', description: 'Charge vehicles in minutes, not hours, with our advanced technology.' },
      { icon: Gauge, title: 'Wide Output Range', description: 'Support various EV models with a voltage range of 150V-1000V.' },
      { icon: Power, title: 'Multiple Connectors', description: 'Charge up to 8 vehicles simultaneously with our multi-port stations.' },
    ]
  },
  {
    category: 'Reliability',
    items: [
      { icon: Shield, title: 'Robust Protection', description: 'Comprehensive protection features ensure safe and reliable operation.' },
      { icon: ThermometerSun, title: 'Wide Temperature Range', description: 'Operate efficiently in temperatures from -30°C to 70°C.' },
      { icon: Waves, title: 'IP54 Rating', description: 'Weather-resistant design for outdoor installations.' },
      { icon: Scale, title: 'Durable Construction', description: 'Built to withstand heavy use and harsh environments.' },
    ]
  },
  {
    category: 'Smart Technology',
    items: [
      { icon: Wifi, title: 'Network Integration', description: 'Seamlessly connect to charging networks for remote management.' },
      { icon: CreditCard, title: 'Payment Systems', description: 'Integrated payment solutions for easy and secure transactions.' },
      { icon: BarChart, title: 'Load Management', description: 'Intelligent power distribution to optimize charging efficiency.' },
      { icon: Smartphone, title: 'Mobile App Control', description: 'Monitor and control charging sessions from your smartphone.' },
    ]
  }
]

export default function Features() {
  const [activeCategory, setActiveCategory] = useState(features[0].category)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-green-100">AntPower Features</h1>
        <p className="text-xl text-center mb-12 text-green-300">Discover the advanced features that make AntPower charging stations the best choice for your EV charging needs.</p>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-12">
          <TabsList className="bg-green-800 border-green-700 p-1 rounded-full flex justify-center">
            {features.map((category) => (
              <TabsTrigger
                key={category.category}
                value={category.category}
                className="px-6 py-2 rounded-full data-[state=active]:bg-green-600 text-green-100 transition-all"
              >
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          {features.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="bg-green-800 border-green-700 h-full">
                      <CardHeader>
                        <feature.icon className="h-10 w-10 text-green-400 mb-2" aria-hidden="true" />
                        <CardTitle className="text-xl text-green-100">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-green-300">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="bg-green-800 border-green-700">
          <CardHeader>
            <CardTitle className="text-2xl text-green-100">Ready to Experience AntPower?</CardTitle>
            <CardDescription className="text-green-300">Take the next step in revolutionizing your EV charging infrastructure.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              <Link href="/quote-request" className="flex items-center">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="outline" className="flex-1 border-green-600 text-green-100 hover:bg-green-700">
              <Link href="/specifications" className="flex items-center">
                Download Specifications <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}