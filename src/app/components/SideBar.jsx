import React from 'react'
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
  return (
    <>
    <div className='flex flex-col mt-7'>
      <div className='sideMenu '>
         <GoHomeFill className='icons'/>
         <h1>Home</h1>
      </div>
      <div className='sideMenu'>
         <BsSearch className='icons'/>
         <h1 >Search</h1>
      </div>
      <div className='sideMenu'>
         <ImCompass2 className='icons'/>
         <h1 >Explore</h1>
      </div>
      <div className='sideMenu'>
         <TfiVideoClapper className='icons'/>
         <h1>Reels</h1>
      </div>
      <div className='sideMenu'>
         <LuSend className='icons'/>
         <h1 >Message</h1>
      </div>
      <div className='sideMenu'>
         <AiOutlineHeart className='icons'/>
         <h1 >Notification</h1>
      </div>
      <div className='sideMenu'>
         <SiAddthis className='icons'/>
         <h1 >Create</h1>
      </div>
      <div className='sideMenu'>
         <CgProfile className='icons'/>
         <h1 >Profile</h1>
      </div>
      
    </div>
    <div className="flex flex-col mt-5 absolute bottom-0 mb-5">
    <div className='sideMenu'>
         <HiAtSymbol className='icons'/>
         <h1 >Treads</h1>
      </div>
      <div className='sideMenu'>
         <AiOutlineMenu className='icons'/>
         <h1 >More</h1>
      </div>
    </div>
    </>
  )
}
