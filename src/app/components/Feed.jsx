import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

export default function Feed() {
  return (
    <>
     <section className='flex flex-col items-center'>
        {/* Stories */}

        <Stories/>

        {/*Posts*/}
        
        <Posts/>
     </section>

     <section>
        {/*Mini Profile */}

        {/* Suggestions */}
     </section>
    </>
  )
}
