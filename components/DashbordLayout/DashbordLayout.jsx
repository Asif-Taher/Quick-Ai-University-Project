'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/assets/logo.svg'
import { Menu, X } from 'lucide-react';

const DashbordLayout = () => {

    const [sidebar, setsidebar] = useState(false);
  return (
    <div className='flex flex-col items-start justify-start h-screen'>
     <nav className='flex justify-between border-b border-b-gray-200 border-solid w-full px-3 py-2'>
        <Image src={logo} alt='logo' width={220} height={220}/>
        {
            sidebar ? <X className='w-6 h-6 text-gray-300 sm:hidden'/> : <Menu className='h-6 w-6 text-gray-300 sm:hidden'/>
        }
     </nav>
    </div>
  )
}

export default DashbordLayout
