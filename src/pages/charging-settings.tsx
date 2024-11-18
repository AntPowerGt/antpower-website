import React, { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Layout from '@/components/layout'

export default function ChargingSettings() {
  const [chargingPower, setChargingPower] = useState(50)

  const handleSliderChange = (value: number[]) => {
    setChargingPower(value[0])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Charging power set to: ${chargingPower}kW`)
    // Here you would typically send this data to your backend
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">Charging Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
          <div className="space-y-2">
            <Label htmlFor="power-slider">Charging Power (kW)</Label>
            <Slider
              id="power-slider"
              min={0}
              max={100}
              step={1}
              value={[chargingPower]}
              onValueChange={handleSliderChange}
            />
            <p className="text-green-300 text-right">{chargingPower} kW</p>
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">
            Save Settings
          </Button>
        </form>
      </div>
    </Layout>
  )
}