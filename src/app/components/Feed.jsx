import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
export default function Feed() {
  return (
    <>
     <div className='flex flex-col items-center'>
        {/* Stories */}

        <Stories/>

        {/*Posts*/}
        
        <Posts/>
     </div>
    </>
  )
}
