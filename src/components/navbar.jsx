import { useTheme } from '../hooks/useTheme'
export function Navbar() {
    const { theme, toggle } = useTheme();
    return (
        <nav className="w-screen h-16 bg-surface-muted-bg p-2 z-50">
            <section className="flex w-full gap-4 items-center">
                <Logo />
                <div className="flex flex-col text-page-fg">
                    <h1>Coral Bay</h1>
                    <h2 className='font-bold'>Open today 7am - 5pm</h2>
                </div>
                <MenuCTA />
                <Menu />
                <ThemeSwitcher toggle={toggle} theme={theme} />
            </section>
        </nav>
    )
}

function Logo() {
    return (
        <div className="w-10 h-10 aspect-square rounded-full">
            <img src="assets/coralbay.svg" alt="logo.svg" loading='lazy' />
        </div>
    )
}

function ThemeSwitcher({ toggle, theme }) {
    return (
        <button onClick={toggle} className='w-10 h-10 p-3'>
            {theme === 'dark' ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
            }
        </button>
    )
}

function Menu() {
    return (
        <div className="bg-primary-bg text-primary-fg
            w-10 h-10 aspect-square rounded p-2
            inline-flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </div>

    )
}

function MenuCTA() {
    return (
        <div className="ml-auto flex gap-4 text-lg">
            <button className="bg-accent-bg text-accent-fg
            px-6 py-1 rounded font-extrabold">Tickets</button>
            <button className="px-4 rounded">Shows</button>
        </div>
    )
}