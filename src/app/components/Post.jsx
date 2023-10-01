import React from 'react'
import {BsThreeDots,BsBookmark} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {TbMessageCircle2} from 'react-icons/tb'
import {FiSend} from 'react-icons/fi'
export default function Post({username,userImg,img,caption}) {
  return (
    <div className=' '>
        {/* Post Header */}
        <div className="flex items-center">
            <img src={userImg} alt={userImg} className='h-9 rounded-full border p-1 hover:cursor-pointer mr-2'/>
            <p className='font-bold text-xs flex-1 hover:cursor-pointer '>{username}</p>
            <BsThreeDots className='text-xl hover:cursor-pointer'/>
        </div>
        {/*Post*/}

        <img className='h-[80vh] object-cover mt-3 mb-3' src={img} alt={caption} />

        {/*Post Buttons*/}

         <div className="flex">
            <div className="flex flex-1 space-x-2">
            <AiOutlineHeart className='postButtons'/>
            <TbMessageCircle2 className='postButtons'/>
            <FiSend className='postButtons'/>
            </div>
            <BsBookmark className='postButtons'/>
         </div>
    </div>
  )
}
