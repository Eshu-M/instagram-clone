import SideBar from './components/SideBar'
import Header from './components/Header'
import Feed from './components/Feed'

export default function Home() {
  return (
    <main className='flex flex-row min-h-screen'>
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
    <section className='z-30 bg-white h-[100vh] max-h-[100vh] w-fit xl:w-[16%] p-5 border-r-2 border-gray-100 pt-10 pl-6 sticky left-0 top-0 md:inline-block hidden'>
       <Header/>
       <SideBar/>
    </section>
    {/*stories and  feed section*/}
    <section className='hidden md:inline-flex'>
          <section>
            <Feed/>
          </section>
      </section>
    </main>
  )
}
