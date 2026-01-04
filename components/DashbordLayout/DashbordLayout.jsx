'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/assets/logo.svg'
import { Menu, X } from 'lucide-react';
import Outlet from './Outlet';
import Sidbar from './Sidbar';


const DashbordLayout = () => {

    const [sidebar, setsidebar] = useState(false);
  return (
    <div className='flex flex-col items-start justify-start h-screen'>
     <nav className='flex justify-between items-center border-b border-b-gray-200 border-solid w-full px-3 py-2'>
        <Image src={logo} alt='logo' width={220} height={220}/>
        {
            sidebar ? <X onClick={()=> setsidebar(false)} className='w-6 h-6 text-gray-300 sm:hidden'/> : <Menu onClick={()=> setsidebar(true)} className='h-6 w-6 text-gray-300 sm:hidden'/>
        }
     </nav>
     <div className='flex-1 w-full flex h-100vh'>
        <Sidbar sidebar={sidebar} setsidebar={setsidebar} />
        <div className='flex-1 bg-[#f4f7fb]'>
           <Outlet />
        </div>
     </div>
    </div>
  )
}

export default DashbordLayout
