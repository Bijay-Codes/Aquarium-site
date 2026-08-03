import { useTheme } from '../hooks/useTheme';
import { m } from 'framer-motion';
export function Navbar() {
    const { theme, toggle } = useTheme();
    return (
        <m.nav
            initial={{ y: -5, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="h-16 sm:h-20 flex items-center sm:px-6 px-3 dark:bg-surface-bg">
            <section className="flex w-full gap-2 sm:gap-4 items-center">
                <Logo />
                <div className="flex flex-col text-page-fg">
                    <h1 className='sm:text-2xl text-lg font-head'>Coral Bay</h1>
                    <h2 className='font-bold sm:text-lg text-xs'>Open today 7am - 5pm</h2>
                </div>
                <div className='ml-auto flex gap-3'>
                    <MenuCTA />
                    <ThemeSwitcher toggle={toggle} theme={theme} />
                    <Menu />
                </div>
            </section>
        </m.nav>
    )
}

function Logo() {
    return (
        <div className="sm:w-12 sm:h-12 h-9 aspect-square rounded-full">
            <img src="assets/coralbay.svg" alt="logo.svg" loading='lazy' />
        </div>
    )
}

function ThemeSwitcher({ toggle, theme }) {
    return (
        <button onClick={toggle} className='w-7 h-7 p-1.5 sm:w-10 sm:h-10 sm:p-2.5 bg-surface-muted-bg outline outline-accent-fg/50 rounded-full sm:rounded-lg hover:bg-page-fg hover:text-page-bg'>
            {theme === 'dark' ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='scale-75' viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
            }
        </button>
    )
}

function Menu() {
    return (
        <div className="bg-primary-bg text-primary-fg
            hover:bg-primary-bg/70 hover:text-primary-fg active:bg-accent-bg active:text-accent-fg
            w-7 h-7 sm:h-10 sm:w-10 aspect-square rounded p-1 sm:p-2
            inline-flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </div>

    )
}

function MenuCTA() {
    return (
        <div className="ml-auto gap-6 sm:text-xl text-sm sm:flex hidden sm:items-center">
            <button className="font-extrabold hover:scale-102 hover:bg-page-fg hover:text-page-bg px-2 py-0.5 h-fit rounded">
                Tickets
            </button>
            <button className="rounded hover:scale-102 hover:bg-page-fg hover:text-page-bg px-2 py-0.5 h-fit">Shows</button>
        </div>
    )
}