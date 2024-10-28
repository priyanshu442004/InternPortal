"use client";
import React from 'react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Upload, Search } from "lucide-react"
import { format } from "date-fns"

const AdminEditIntern = () => {
  const [date, setDate] = useState<Date>('')
  return (
    
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className='flex justify-between items-center flex-row w-[95%] mt-[2vw] bg-white pl-3 pr-8 pt-2 pb-2'>
            <h2 className='text-lg font-semibold'>
            Add New Intern
            </h2>
            <div className='flex flex-row space-x-4'>
    <button className='border rounded-[5px] border-[#0804ac] pl-2 pr-2 pt-1 pb-1 text-[#0804ac] font-semibold'>Cancel</button>
    <button className='border rounded-[5px] bg-[#0804ac] border-blue-900 pl-3 pr-3 pt-1 pb-1 text-white font-semibold'>Save</button>
            </div>
        </div>

        
        <div className="space-y-4 mb-8">
          <h2 className="font-bold text-lg text-blue-700">Enter Intern ID to Update Details</h2>
          <div className="flex items-center space-x-2">
            <Input id="internId" className="w-1/2" placeholder="D1A36" />
            <Button className="p-2">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

       
        <div className="space-y-6">
          <h2 className="font-bold text-blue-700 text-lg">Personal Details:</h2>

          <div className="space-y-2">
            <Label htmlFor="forename">Forename</Label>
            <Input id="forename" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactNo">Contact</Label>
            <Input id="contactNo" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label>Date of Joining</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

         
          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup defaultValue="male" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="px-4 py-2 border rounded-full bg-gray-200">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="px-4 py-2 border rounded-full bg-gray-200">Female</Label>
              </div>
            </RadioGroup>
          </div>

          
          <div className="space-y-2">
            <Label>Status</Label>
            <div className="flex space-x-4">
              <Button variant="outline" className="rounded-full bg-green-100 text-green-600">Working</Button>
              <Button variant="outline" className="rounded-full bg-blue-100 text-blue-600">Left</Button>
              <Button variant="outline" className="rounded-full bg-red-100 text-red-600">Terminated</Button>
              <Button variant="outline" className="rounded-full bg-yellow-100 text-yellow-600">On Leave</Button>
            </div>
          </div>
        </div>

       
        <div className="space-y-6 mt-6">
          <h2 className="font-bold text-blue-700 text-lg">Upload Documents</h2>
          {["Offer Letter", "Certificate", "Letter Of Recommendation"].map((doc) => (
            <div key={doc} className="flex items-center justify-between">
              <span>{doc}</span>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span>Upload Documents</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminEditIntern




