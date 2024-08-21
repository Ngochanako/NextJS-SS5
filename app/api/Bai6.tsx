import React from 'react'
import {Slider} from '@/components/ui/slider'
export default function Bai6() {
  return (
    <div className='m-[50px]'>
      <Slider value={[60]} max={100} step={1} className='w-[200px]' />
      Value:60
       <br />
       <Slider value={[80]} max={100} step={1} className='w-[200px]' />
      Value:80
    </div>
  )
}
