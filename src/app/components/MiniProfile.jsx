import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center m-10'>
         <img src='https://cdn-icons-png.flaticon.com/512/3106/3106773.png' alt='' className='h-12 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out'/>
         <div className="ml-3 flex-1">
         <p className='text-xs font-bold'>UserName</p>
         <p className='text-xs'>Name</p>
         </div>
         <button className='text-blue-500 text-sm hover:cursor-pointer'>Switch</button>
    </div>
  )
}
