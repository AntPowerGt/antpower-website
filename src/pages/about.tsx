'use client'

import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, Rocket, Globe, Award } from 'lucide-react'
import Layout from '@/components/layout'

const teamMembers = [
  { name: "Sarah Johnson", role: "CEO & Co-founder", image: "/placeholder.svg?height=200&width=200" },
  { name: "Michael Chen", role: "CTO & Co-founder", image: "/placeholder.svg?height=200&width=200" },
  { name: "Emily Rodriguez", role: "Head of Product", image: "/placeholder.svg?height=200&width=200" },
  { name: "David Kim", role: "Head of Engineering", image: "/placeholder.svg?height=200&width=200" },
  { name: "Lisa Patel", role: "Head of Sales", image: "/placeholder.svg?height=200&width=200" },
  { name: "Alex Thompson", role: "Head of Customer Success", image: "/placeholder.svg?height=200&width=200" },
]

const milestones = [
  { year: 2018, event: "AntPower founded by Sarah Johnson and Michael Chen" },
  { year: 2019, event: "Launch of first 150kW DC fast charger" },
  { year: 2020, event: "Expansion into European market" },
  { year: 2021, event: "Introduction of 350kW ultra-fast charging technology" },
  { year: 2022, event: "Partnership with major automotive manufacturers" },
  { year: 2023, event: "Launch of 1MW charging solution for heavy-duty vehicles" },
  { year: 2024, event: "Global expansion with offices in 10 countries" },
]

export default function AboutUs() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">About AntPower</h1>
        <p className="text-xl text-center mb-12 text-green-300">Powering the future of sustainable transportation</p>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <Card className="bg-[#0a3d1f] border-green-600">
            <CardHeader>
              <CardTitle className="text-2xl text-green-100">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 mb-6">
                We're dedicated to revolutionizing the world's charging infrastructure, making it more efficient, sustainable, and accessible for everyone's benefit.
              </p>
              <p className="text-gray-600 mb-4">AntPower's mission is to accelerate the world's transition to sustainable energy through innovative EV charging solutions.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#0a3d1f] border-green-600">
            <CardHeader>
              <CardTitle className="text-2xl text-green-100">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 mb-6">
                AntPower's commitment to excellence drives us to continuously improve and innovate in the EV charging space.
              </p>
              <p className="text-gray-600">AntPower's commitment to excellence drives us to continuously improve and innovate in the EV charging space.</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#0a3d1f] border-green-600 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-green-100">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Rocket, title: "Innovation", description: "Constantly pushing the boundaries of EV charging technology" },
              { icon: Users, title: "Collaboration", description: "Working together with partners to create a sustainable ecosystem" },
              { icon: Globe, title: "Sustainability", description: "Committed to reducing carbon footprint in everything we do" },
              { icon: Award, title: "Excellence", description: "Striving for the highest quality in our products and services" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <value.icon className="h-12 w-12 text-green-400 mb-2" />
                <h3 className="font-semibold text-green-100 mb-1">{value.title}</h3>
                <p className="text-green-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[#0a3d1f] border-green-600 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-green-100">Our Team</CardTitle>
            <CardDescription className="text-green-300">Meet the people driving AntPower's innovation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-green-100">{member.name}</h3>
                  <p className="text-green-300">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0a3d1f] border-green-600">
          <CardHeader>
            <CardTitle className="text-2xl text-green-100">Our Journey</CardTitle>
            <CardDescription className="text-green-300">Key milestones in AntPower's history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-24 font-bold text-green-400">{milestone.year}</div>
                  <div className="flex-grow pl-4 border-l border-green-600">
                    <p className="text-green-200">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-100">Join Us in Shaping the Future of EV Charging</h2>
          <p className="text-lg text-gray-600 mb-6">
            AntPower's vision extends beyond conventional boundaries.
          </p>
          <p className="text-lg text-gray-600">
            Let's shape the future of charging together.
          </p>
          <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white">
            <Link href="/contact" className="flex items-center">
              View Career Opportunities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  )
}