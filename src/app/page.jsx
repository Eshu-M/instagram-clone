import SideBar from './components/SideBar'
import Header from './components/Header'
import Feed from './components/Feed'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='flex flex-col md:flex md:flex-row min-h-screen'>
      {/*Header , stories and the feed in the small screen*/}
    <section className='md:hidden border-b w-full sticky top-0'>
      <header className='p-5 border-b'>
        <Header/>
      </header>
      <section className='md:hidden'>
            <Feed/>
      </section>
    </section>
    {/*Side Bar*/}
    <section className='z-30 bg-white h-[100vh] max-h-[100vh] max-w-[16%] p-5 border-r-2 border-gray-100 pt-10 pl-6 sticky left-0 top-0 md:inline-block hidden'>
       <Header/>
       <SideBar/>
    </section>
    {/*stories and  feed section*/}
    <section className='hidden md:inline-flex max-w-[84%] justify-center'>
          <section className='flex-1'>
            <Feed/>
          </section>
          <section className='max-w-[24%]'>

          </section>
      </section>

      {/*Footer in the small screen*/}
      <section className='md:hidden max-h-[5%] w-full sticky bottom-0 bg-white border-t'>
        <Footer/>
      </section>
    </main>
  )
}
