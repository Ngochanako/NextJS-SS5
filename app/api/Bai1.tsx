import { Button } from '@/components/ui/button'
import React from 'react'

export default function Bai1() {
  return (
    <div className='flex gap-[50px] m-[50px]'>
      <Button variant={'destructive'}>Destructive</Button>
      <Button variant={'sucess'}>Primary</Button>
      <Button variant={'secondary'}>Primary</Button>
      <Button variant={'sucess'} size={'lg'}>Large</Button>
      <Button variant={'sucess'} size={'sm'}>Small</Button>
    </div>
  )
}
