import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select'
import React from 'react'

export default function Bai4() {
  return (
    <div className='m-[50px]'>
      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Môn học" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            <SelectLabel>Môn học</SelectLabel>
            <SelectItem value='HTML'>HTML</SelectItem>
            <SelectItem value='HTML'>CSS</SelectItem>
            <SelectItem value='HTML'>JS</SelectItem>
        </SelectGroup>
      </SelectContent>
      </Select>
    </div>
  )
}
