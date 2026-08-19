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
          className='hidden open:flex fixed inset-0 w-full h-full z-40 bg-transparent items-center justify-center m-auto
          p-6'
          onClick={closeDialog}>
          <div className='bg-surface-bg text-surface-fg outline z-50 outline-accent-bg/40 min-h-80 max-w-130 p-4 rounded-2xl
          flex flex-col gap-4'
            onClick={(e) => e.stopPropagation()}>
            <h1 className='text-2xl text-danger-fg bg-danger w-fit px-4 rounded-xl'>Notice</h1>
            <h2>This landing page is made by <a
              href="https://github.com/Bijay-Codes"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-accent-bg"
            >
              Bijay-Codes
            </a>{' '}
              as a frontend portfolio project.
            </h2>
            <p className='text-surface-fg/80'>Coral Bay is a fictional aquarium built for practice purposes. All names, statistics,
              locations, and claims shown on this site (including hours, address, membership numbers,
              and conservation figures) are made up and do not represent a real business.
            </p>

            <hr />
            <h3>if you wish to contact me you can do so on any of these platforms</h3>
            <div className='flex flex-wrap'>
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
