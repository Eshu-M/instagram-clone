'use client'
import React, { useState } from 'react'
import {GoHomeFill} from 'react-icons/go'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHeart ,AiOutlineMenu} from 'react-icons/ai'
import {SiAddthis} from 'react-icons/si'
import {ImCompass2} from 'react-icons/im'
import {TfiVideoClapper} from 'react-icons/tfi'
import {LuSend} from 'react-icons/lu'
export default function Footer() {
    const [selectedOption ,setSelectedOption]=useState('')
   function isSelected(option){
      setSelectedOption(option)
   }
  return (
    <>

<div className='flex flex-row p-2 justify-between footerMenuOption '>
      <div onClick={()=>isSelected('Option1')} className={selectedOption === 'Option1' ? 'sideMenuItemsSelected footerMenu' : 'footerMenu'}>
         <GoHomeFill className='icons'/>
      </div>
      <div onClick={()=>isSelected('Option3')} className={selectedOption === 'Option3' ? 'sideMenuItemsSelected footerMenu' : 'footerMenu'}>
         <ImCompass2 className='icons'/>
      </div>
      <div onClick={()=>isSelected('Option4')} className={selectedOption === 'Option4' ? 'sideMenuItemsSelected footerMenu' : 'footerMenu'}>
         <TfiVideoClapper className='icons'/>
      </div>
      <div onClick={()=>isSelected('Option5')} className={selectedOption === 'Option5' ? 'sideMenuItemsSelected footerMenu' : 'footerMenu'}>
         <LuSend className='icons'/>
      </div>
      <div onClick={()=>isSelected('Option7')} className={selectedOption === 'Option7' ? 'sideMenuItemsSelected footerMenu' : 'footerMenu'}>
         <SiAddthis className='icons'/>
      </div>
      <div onClick={()=>isSelected('Option8')} className={selectedOption === 'Option8' ? 'sideMenuItemsSelected footerMenu' : 'footerMenu'}>
         <img src='https://cdn-icons-png.flaticon.com/512/3106/3106773.png' alt='' className='h-8 rounded-full border p-1 mt-1 mb-1'/>
      </div>
    </div>
    </>
  )
}
