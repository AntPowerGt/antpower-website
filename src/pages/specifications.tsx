'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye, Search } from "lucide-react"
import Layout from '@/components/layout'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const specifications = [
  { 
    id: '360kw-4ccs2', 
    name: 'AntPower 360kW - 4 CCS2', 
    type: 'pdf', 
    size: '2.4 MB', 
    lastUpdated: '2024-03-15',
    preview: {
      power: '360KW',
      maxCurrent: '548A',
      efficiency: '>95.0%',
      temperature: '-30°C~70°C',
      protection: 'IP54/IP55',
      outputs: '4*CCS2'
    }
  },
  { 
    id: '360kw-6ccs2', 
    name: 'AntPower 360kW - 6 CCS2', 
    type: 'pdf', 
    size: '2.6 MB', 
    lastUpdated: '2024-03-15',
    preview: {
      power: '360KW',
      maxCurrent: '548A',
      efficiency: '>95.0%',
      temperature: '-30°C~70°C',
      protection: 'IP54/IP55',
      outputs: '6*CCS2'
    }
  },
  { 
    id: '480kw-4ccs2', 
    name: 'AntPower 480kW - 4 CCS2', 
    type: 'pdf', 
    size: '2.8 MB', 
    lastUpdated: '2024-03-16',
    preview: {
      power: '480KW',
      maxCurrent: '730A',
      efficiency: '>95.0%',
      temperature: '-30°C~70°C',
      protection: 'IP54',
      outputs: '4*CCS2'
    }
  },
  { 
    id: '480kw-8ccs2', 
    name: 'AntPower 480kW - 8 CCS2', 
    type: 'pdf', 
    size: '3.0 MB', 
    lastUpdated: '2024-03-16',
    preview: {
      power: '480KW',
      maxCurrent: '730A',
      efficiency: '>95.0%',
      temperature: '-30°C~70°C',
      protection: 'IP54',
      outputs: '8*CCS2'
    }
  },
  { 
    id: '720kw-4ccs2', 
    name: 'AntPower 720kW - 4 CCS2', 
    type: 'pdf', 
    size: '3.2 MB', 
    lastUpdated: '2024-03-17',
    preview: {
      power: '720KW',
      maxCurrent: '1095A',
      efficiency: '>95.0%',
      temperature: '-30°C~70°C',
      protection: 'IP54',
      outputs: '4*CCS2'
    }
  },
  { 
    id: '720kw-8ccs2', 
    name: 'AntPower 720kW - 8 CCS2', 
    type: 'pdf', 
    size: '3.4 MB', 
    lastUpdated: '2024-03-17',
    preview: {
      power: '720KW',
      maxCurrent: '1095A',
      efficiency: '>95.0%',
      temperature: '-30°C~70°C',
      protection: 'IP54',
      outputs: '8*CCS2'
    }
  },
  { 
    id: 'installation-guide', 
    name: 'Installation Guide', 
    type: 'pdf', 
    size: '5.6 MB', 
    lastUpdated: '2024-03-10',
    preview: {
      description: 'Comprehensive guide for installing AntPower charging stations.',
      contents: 'Safety precautions, Site preparation, Mounting instructions, Electrical connections, Commissioning'
    }
  },
  { 
    id: 'maintenance-manual', 
    name: 'Maintenance Manual', 
    type: 'pdf', 
    size: '4.8 MB', 
    lastUpdated: '2024-03-12',
    preview: {
      description: 'Detailed manual for maintaining AntPower charging stations.',
      contents: 'Routine checks, Cleaning procedures, Troubleshooting, Spare parts list, Service schedules'
    }
  },
  { 
    id: 'safety-guidelines', 
    name: 'Safety Guidelines', 
    type: 'pdf', 
    size: '1.2 MB', 
    lastUpdated: '2024-03-05',
    preview: {
      description: 'Essential safety information for operating AntPower charging stations.',
      contents: 'Electrical safety, Emergency procedures, Personal protective equipment, Regulatory compliance'
    }
  },
  { 
    id: 'technical-overview', 
    name: 'Technical Overview', 
    type: 'pdf', 
    size: '3.7 MB', 
    lastUpdated: '2024-03-18',
    preview: {
      description: 'Comprehensive technical overview of AntPower charging solutions.',
      contents: 'System architecture, Communication protocols, Power management, Charging algorithms, Integration options'
    }
  },
]

export default function SpecificationsDownload() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTab, setSelectedTab] = useState('all')
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([])

  const filteredSpecs = specifications.filter(spec => 
    spec.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedTab === 'all' || (
      selectedTab === 'product' && spec.name.includes('AntPower') ||
      selectedTab === 'guide' && !spec.name.includes('AntPower')
    ))
  )

  const handleCheckboxChange = (specId: string) => {
    setSelectedSpecs(prev => 
      prev.includes(specId) 
        ? prev.filter(id => id !== specId)
        : [...prev, specId]
    )
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-100">
          Download Specifications
        </h1>
        
        <Card className="bg-[#0a3d1f] border-green-600 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-green-100">Search and Filter</CardTitle>
            <CardDescription className="text-green-200">Find the specifications you need quickly and easily.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-300" />
              <Input
                type="search"
                placeholder="Search specifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#052612] border-green-600 text-green-100 placeholder:text-green-400"
              />
            </div>
            <Tabs value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="bg-[#052612] border-green-600">
                <TabsTrigger value="all" className="data-[state=active]:bg-green-600 text-green-100">All</TabsTrigger>
                <TabsTrigger value="product" className="data-[state=active]:bg-green-600 text-green-100">Product Specs</TabsTrigger>
                <TabsTrigger value="guide" className="data-[state=active]:bg-green-600 text-green-100">Guides & Manuals</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-[#0a3d1f] border-green-600">
          <CardHeader>
            <CardTitle className="text-2xl text-green-100">Available Specifications</CardTitle>
            <CardDescription className="text-green-200">Select the documents you want to download.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-green-600">
                  <TableHead className="w-[50px] text-green-100"></TableHead>
                  <TableHead className="text-green-100">Name</TableHead>
                  <TableHead className="text-green-100">Type</TableHead>
                  <TableHead className="text-green-100">Size</TableHead>
                  <TableHead className="text-green-100">Last Updated</TableHead>
                  <TableHead className="text-right text-green-100">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSpecs.map((spec) => (
                  <TableRow key={spec.id} className="border-green-600">
                    <TableCell>
                      <Checkbox
                        id={`select-${spec.id}`}
                        checked={selectedSpecs.includes(spec.id)}
                        onCheckedChange={() => handleCheckboxChange(spec.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium text-green-100">{spec.name}</TableCell>
                    <TableCell className="text-green-200">{spec.type.toUpperCase()}</TableCell>
                    <TableCell className="text-green-200">{spec.size}</TableCell>
                    <TableCell className="text-green-200">{spec.lastUpdated}</TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-green-300 hover:text-green-100 hover:bg-green-800">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#0a3d1f] border-green-600">
                          <DialogHeader>
                            <DialogTitle className="text-green-100">{spec.name} Specifications</DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            {'power' in spec.preview ? (
                              <>
                                <div className="space-y-2">
                                  <p className="text-green-200">Power Output: <span className="text-green-100">{spec.preview.power}</span></p>
                                  <p className="text-green-200">Max Current: <span className="text-green-100">{spec.preview.maxCurrent}</span></p>
                                  <p className="text-green-200">Efficiency: <span className="text-green-100">{spec.preview.efficiency}</span></p>
                                </div>
                                <div className="space-y-2">
                                  <p className="text-green-200">Temperature Range: <span className="text-green-100">{spec.preview.temperature}</span></p>
                                  <p className="text-green-200">Protection Rating: <span className="text-green-100">{spec.preview.protection}</span></p>
                                  <p className="text-green-200">Output Ports: <span className="text-green-100">{spec.preview.outputs}</span></p>
                                </div>
                              </>
                            ) : (
                              <div className="col-span-2 space-y-2">
                                <p className="text-green-200">{spec.preview.description}</p>
                                <p className="text-green-100 mt-2">Contents:</p>
                                <p className="text-green-200">{spec.preview.contents}</p>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-green-600 mt-4 pt-4">
            <p className="text-green-200">{selectedSpecs.length} item(s) selected</p>
            <Button 
              onClick={() => window.open('/product-catalog.pdf', '_blank')}
              disabled={selectedSpecs.length === 0}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Selected
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  )
}