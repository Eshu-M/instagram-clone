'use client'
import React, { useState } from 'react'
import {GoHomeFill} from 'react-icons/go'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHeart ,AiOutlineMenu} from 'react-icons/ai'
import {SiAddthis} from 'react-icons/si'
import {ImCompass2} from 'react-icons/im'
import {TfiVideoClapper} from 'react-icons/tfi'
import {LuSend} from 'react-icons/lu'
import {HiAtSymbol} from 'react-icons/hi'
export default function SideBar() {
   const [selectedOption ,setSelectedOption]=useState('')
   function isSelected(option){
      setSelectedOption(option)
   }
  return (
    <>
    <div className='flex flex-col mt-7 menuOption'>
      <div onClick={()=>isSelected('Option1')} className={selectedOption === 'Option1' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <GoHomeFill className='icons'/>
         <h1 className='optionNames'>Home</h1>
      </div>
      <div onClick={()=>isSelected('Option2')} className={selectedOption === 'Option2' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <BsSearch className='icons'/>
         <h1 className='optionNames'>Search</h1>
      </div>
      <div onClick={()=>isSelected('Option3')} className={selectedOption === 'Option3' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <ImCompass2 className='icons'/>
         <h1 className='optionNames'>Explore</h1>
      </div>
      <div onClick={()=>isSelected('Option4')} className={selectedOption === 'Option4' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <TfiVideoClapper className='icons'/>
         <h1 className='optionNames'>Reels</h1>
      </div>
      <div onClick={()=>isSelected('Option5')} className={selectedOption === 'Option5' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <LuSend className='icons'/>
         <h1 className='optionNames'>Message</h1>
      </div>
      <div onClick={()=>isSelected('Option6')} className={selectedOption === 'Option6' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <AiOutlineHeart className='icons'/>
         <h1 className='optionNames'>Notification</h1>
      </div>
      <div onClick={()=>isSelected('Option7')} className={selectedOption === 'Option7' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <SiAddthis className='icons'/>
         <h1 className='optionNames'>Create</h1>
      </div>
      <div onClick={()=>isSelected('Option8')} className={selectedOption === 'Option8' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <img src='https://cdn-icons-png.flaticon.com/512/3106/3106773.png' alt='' className='h-8 rounded-full border p-1 mt-1 mb-1'/>
         <h1 className='optionNames'>Profile</h1>
      </div>
    </div>
    <div className='md:mt-10 md:absolute md:bottom-0 md:mb-5 md:flex md:flex-col md:menuOption hidden'>

      <div onClick={()=>isSelected('Option9')} className={selectedOption === 'Option9' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <HiAtSymbol className='icons'/>
         <h1 className='optionNames'>Treads</h1>
      </div>
      <div onClick={()=>isSelected('Option10')} className={selectedOption === 'Option10' ? 'sideMenuItemsSelected sideMenu' : 'sideMenu'}>
         <AiOutlineMenu className='icons'/>
         <h1 className='optionNames'>More</h1>
      </div>
   </div>
    </>
  )
}