import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
export default function Post({username,userImg,img,caption}) {
  return (
    <div>
        {/* Post Header */}
        <div className="flex items-center">
            <img src={userImg} alt={userImg} className='h-9 rounded-full border p-1 hover:cursor-pointer'/>
            <p className='font-bold text-xs flex-1 hover:cursor-pointer'>{username}</p>
            <BsThreeDots className='text-xl hover:cursor-pointer'/>
        </div>
    </div>
  )
}
