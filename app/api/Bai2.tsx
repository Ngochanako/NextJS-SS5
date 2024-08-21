import { Input } from '@/components/ui/input'
import React from 'react'

export default function Bai2() {
  return (
    <div className='m-[50px] flex flex-col gap-[10px] w-[300px]'>
      <Input type='text' placeholder='Rikkei'/>
      <Input type='number' placeholder='10'/>
      <Input type='file'/>
    </div>
  )
}
