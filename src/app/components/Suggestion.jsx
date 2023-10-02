import React from 'react'

export default function Suggestion({username ,img}) {
  return (
    <div className='flex items-center ml-10 mb-3 mt-1'>
         <img src={img} alt='' className='h-12 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out'/>
         <div className="ml-3 flex-1">
         <p className='text-xs font-bold'>{username}</p>
         <p className='text-xs'>{username}</p>
         </div>
         <button className='text-white bg-blue-500 pt-1 pb-1 pl-4 pr-4 rounded-lg text-sm hover:cursor-pointer shadow-md'>Follow</button>
    </div>
  )
}
