'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function Header() {
let [isvisibility,setvisibility] = useState(false)
const toggleVisibility = ()=>{
    setvisibility(!isvisibility)
}
const closeMenu = ()=>{
    setvisibility(!isvisibility)
}
    return (
      <nav className='w-[100%]  h-14 text-center text-[#533B4D] flex justify-between pl-[20px] pr-[20px] md:justify-around items-center md:p-[0]'>
        <div className="logo font-bold text-[20px] md:text-[30px]">Farman's Blog</div>
        <div className="navigations md:flex gap-10 text-[18px] font-medium hidden">
            <Link href={'/'} className='hover:text-[#000] hover:text-[18.2px]'>Home</Link>
            <Link href={'Blog/'} className='hover:text-[#000] hover:text-[18.2px]'>Blogs</Link>
            <Link href={'About/'} className='hover:text-[#000] hover:text-[18.2px]'>About</Link>
            <Link href={'Contact/'} className='hover:text-[#000] hover:text-[18.2px]'>Contact</Link>
        </div>
        {isvisibility ?
         <i className={`ri-close-line md:hidden z-40 cursor-pointer text-[29px] text-white`} onClick={toggleVisibility}></i> :
         <i className={`ri-menu-line md:hidden z-40 cursor-pointer text-[25px]`} onClick={toggleVisibility}></i> 
        }
        {isvisibility && <div className="absolute bg-[#533B4D] text-white w-[50vw] top-0 right-0 h-[100vh] flex flex-col items-center justify-center gap-[30px]  ">
            <Link href={'/'} onClick={toggleVisibility} className='hover:scale-[1.03]'>Home</Link>
            <Link href={'Blog/'} onClick={toggleVisibility} className='hover:scale-[1.03] '>Blogs</Link>
            <Link href={'About/'} onClick={toggleVisibility} className='hover:scale-[1.03] '>About</Link>
            <Link href={'Contact/'} onClick={toggleVisibility} className='hover:scale-[1.03] '>Contact</Link>
        </div>}
        
      </nav>
  )
}
