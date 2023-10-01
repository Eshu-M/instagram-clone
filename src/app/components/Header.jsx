'use client'
import React, { useState } from 'react'
import {AiOutlineHeart ,AiOutlineSearch} from 'react-icons/ai'
import {TiDelete} from 'react-icons/ti'
export default function Header() {
    const [search ,setSearch]=useState([]);
  return (
    <>
    <header className='flex justify-between items-center'>
       <img onClick={()=>{'/'}} className='firstLogo' src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt="instagram logo" />
       <img onClick={()=>{'/'}} className='secondLogo' src="instagram.png" alt="instagram logo" />
       <div className='md:hidden flex'>
            <div className="flex items-center border rounded-lg mr-1 text-sm focus:ring-0 focus:border-0 bg-slate-100 pl-2 pr-2" > 
            <AiOutlineSearch className='text-gray text-2xl'/>
            <input onChange={(e)=>setSearch(e.target.value)} value={search} className='md:hidden border-0 bg-slate-100 focus:border-none focus:ring-0' type="text" placeholder='Search' />
            <TiDelete onClick={(e)=>setSearch("")} className='text-gray-500  hover:cursor-pointer text-2xl'/>
             </div>
       <AiOutlineHeart className='icons'/>
       </div>
    </header>
    </>
  )
}
