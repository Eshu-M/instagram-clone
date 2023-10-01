'use client'
import React, { useState } from 'react'
import {GoHomeFill} from 'react-icons/go'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineHeart ,AiOutlineMenu} from 'react-icons/ai'
import {SiAddthis} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
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
         <CgProfile className='icons'/>
         <h1 className='optionNames'>Profile</h1>
      </div>
    </div>
      <div className='mt-10 absolute bottom-0 mb-5 flex flex-col menuOption'>

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