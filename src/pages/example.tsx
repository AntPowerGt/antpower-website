import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ExamplePage() {
  return (
    <div className="p-4 bg-[#052612]">
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a product" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="360kw">360kW Charger</SelectItem>
          <SelectItem value="480kw">480kW Charger</SelectItem>
          <SelectItem value="720kw">720kW Charger</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}