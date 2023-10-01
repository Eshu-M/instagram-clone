import Image from 'next/image'
import SideBar from './components/SideBar'
import Header from './components/Header'

export default function Home() {
  return (
    <div className='flex flex-row'>
      <div className='md:hidden p-5 border-b w-full'>
        <Header/>
      </div>
    <section className='bg-white h-[100vh] max-h-[100vh] w-fit xl:w-[16%] p-5 border-r-2 border-gray-100 pt-10 pl-6  left-0 sticky md:inline-block hidden'>
       <Header/>
       <SideBar/>
    </section>
    <section>

    </section>
    </div>
  )
}
