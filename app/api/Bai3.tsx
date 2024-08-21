import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import Link from 'next/link'

import React from 'react'

export default function Bai3() {
  return (
    <div className='m-[50px]'>
      <Breadcrumb>
         <BreadcrumbList>
            <BreadcrumbItem>
               <BreadcrumbLink>
                  Home
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
               <BreadcrumbLink>
               Components
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
         </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb>
         <BreadcrumbList>
            <BreadcrumbItem>
               <BreadcrumbLink>
                  Home
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
               <BreadcrumbLink>
               List Product
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
         </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb>
         <BreadcrumbList>
            <BreadcrumbItem>
               <BreadcrumbLink>
                  Home
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
               <BreadcrumbLink>
               List order
               </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
               <BreadcrumbLink>
               Order detail
               </BreadcrumbLink>
            </BreadcrumbItem>
         </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
