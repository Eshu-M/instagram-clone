import Image from 'next/image'
import SideBar from './components/SideBar'

export default function Home() {
  return (
    <div className='flex'>
    <section className='bg-white h-[100vh] max-h-[100vh] w-64 p-5 border-r-2 border-gray-100 pt-10 pl-6  left-0 sticky'>
      <header>
       <img className='h-8 w-22' src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png" alt="instagram logo" />
      </header>
       <SideBar/>
    </section>
    <section>

    </section>
    </div>
  )
}
