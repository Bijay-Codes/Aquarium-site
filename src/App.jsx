import { useRef } from 'react'
import { Navbar } from './components/navbar'
import { Homepage } from './pages/home'
import { Links } from './components/Links'
import { LazyMotion, domAnimation } from 'framer-motion'
function App() {
  const ref = useRef(null);
  const openDialog = () => {
    ref.current.showModal();
  }
  const closeDialog = () => {
    console.log('click')
    ref.current.close();
  }
  return (
    <LazyMotion features={domAnimation}>
      <section className='w-full h-full relative'>
        <dialog ref={ref}
          className='hidden open:flex fixed inset-0 w-full h-full z-40 bg-transparent items-center justify-center m-auto'
          onClick={closeDialog}>
          <div className='bg-surface-bg text-surface-fg outline z-50 outline-accent-bg/40 w-screen p-6 rounded relative
          flex flex-col gap-4 max-w-130'
            onClick={(e) => e.stopPropagation()}>
            <button onClick={closeDialog} className='absolute top-2 right-2 rounded p-2 hover:text-danger/80 active:text-danger'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
            <h1 className='text-xl sm:text-2xl text-danger bg-danger/30 w-fit px-4 rounded'>Notice</h1>
            <h2>This landing page is made by <a
              href="https://github.com/Bijay-Codes"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-primary-bg"
            >
              Bijay-Codes
            </a>{' '}
              as a frontend portfolio project.
            </h2>
            <p className='text-surface-fg/80'>Coral Bay is a fictional aquarium built for practice purposes. All names, statistics,
              locations, and claims shown on this site (including hours, address, membership numbers,
              and conservation figures) are made up and do not represent a real business.
            </p>

            <hr className='opacity-40' />
            <div className='flex flex-wrap'>
              <h3 className='text-xs'>if you wish to contact me you can do so on any of these platforms</h3>
              <Links />
            </div>
          </div >
        </dialog >
        <Navbar openDialog={openDialog} />
        <Homepage openDialog={openDialog} />
      </section>
    </LazyMotion>
  )
}

export default App
