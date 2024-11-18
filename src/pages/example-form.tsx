import React from 'react'
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Layout from '@/components/layout'

export default function ExampleForm() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">Example Form</h1>
        <form className="space-y-6 max-w-md mx-auto">
          <div className="space-y-2">
            <Label htmlFor="power-slider">Charging Power</Label>
            <Slider id="power-slider" defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="fast-charge" />
            <Label htmlFor="fast-charge">Enable Fast Charging</Label>
          </div>
          <div className="space-y-2">
            <Label>Preferred Charging Speed</Label>
            <RadioGroup defaultValue="normal">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="slow" id="slow" />
                <Label htmlFor="slow">Slow (Economy)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="normal" id="normal" />
                <Label htmlFor="normal">Normal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fast" id="fast" />
                <Label htmlFor="fast">Fast (Premium)</Label>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </Layout>
  )
}