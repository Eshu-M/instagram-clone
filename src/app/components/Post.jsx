'use client'
import React, { useState } from 'react'
import {BsThreeDots,BsBookmark} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {TbMessageCircle2} from 'react-icons/tb'
import {FiSend} from 'react-icons/fi'
import {GoSmiley} from 'react-icons/go'
export default function Post({username,userImg,img,caption}) {
  const [search,setSearch]=useState("")
  return (
    <div className='border-b pb-2 mb-3'>
        {/* Post Header */}
        <div className="flex items-center">
            <img src={userImg} alt={userImg} className='h-11 rounded-full border p-1 hover:cursor-pointer mr-2'/>
            <p className='font-bold text-xs flex-1 hover:cursor-pointer '>{username}</p>
            <BsThreeDots className='text-xl hover:cursor-pointer'/>
        </div>
        {/*Post*/}

        <img className='h-[80vh] object-cover mt-3 mb-3 rounded-sm' src={img} alt={caption} />

        {/*Post Buttons*/}

         <div className="flex">
            <div className="flex flex-1 space-x-2">
            <AiOutlineHeart className='postButtons'/>
            <TbMessageCircle2 className='postButtons'/>
            <FiSend className='postButtons'/>
            </div>
            <BsBookmark className='postButtons'/>
         </div>

         {/*Caption section*/}
         <div className='flex items-center mt-3'>
          <p className='font-bold text-xs mr-3 hover:cursor-pointer '>{username}</p>
          <p className='font-sm-bold text-xs flex-1 hover:cursor-pointer '>{caption}</p>
         </div>
         {/*Comment section*/}
          <div className="flex items-center mt-3">
            <input onChange={(e)=>setSearch(e.target.value)} value={search} className='flex-1 border-none text-sm focus:ring-0 focus:border-none' type="text" placeholder='Add a comment'/>
            <GoSmiley className='text-gray-400'/>
          </div>
    </div>
  )
}
