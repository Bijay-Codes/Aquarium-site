import { SocialIcons } from '../components/joinMembership'
import { m } from 'framer-motion';
export function Footer() {
    return (
        <m.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-surface-bg text-surface-fg mt-16 border-t-2 border-accent-bg/30">
            <div className="gap-6 p-6 grid grid-cols-2 max-w-180">

                <div className="flex flex-col justify-start gap-5 col-span-2 w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src="/assets/coralbay.svg" alt="Coral Bay logo" loading="lazy" />
                        </div>
                        <h2 className="text-2xl font-head font-extrabold">Coral Bay</h2>
                    </div>
                    <p className="text-sm sm:text-lg text-surface-muted-fg">
                        A home for rescued marine life — and a window into the ocean for everyone who visits.
                    </p>
                    <p className="text-xs sm:text-sm text-surface-muted-fg">
                        AZA-accredited since 2011
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-lg sm:text-xl font-head">Visit</h3>
                    <p className="text-sm sm:text-base text-surface-muted-fg">
                        1 Tidewater Way<br />
                        Coral Bay, CA 90210
                    </p>
                    <p className="text-sm sm:text-base text-surface-muted-fg">Open today 7am – 5pm</p>
                    <p className="text-sm text-surface-muted-fg">hello@coralbay-aquarium.example</p>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-lg sm:text-xl font-head">Explore</h3>
                    <nav className="flex flex-col gap-2 text-sm sm:text-base text-surface-muted-fg">
                        <a href="#attractions" className="w-fit hover:text-surface-fg hover:underline underline-offset-4">-Shows &amp; Attractions</a>
                        <a href="#mission" className="w-fit hover:text-surface-fg hover:underline underline-offset-4">-Our Mission</a>
                        <a href="#membership" className="w-fit hover:text-surface-fg hover:underline underline-offset-4">-Membership</a>
                        <a href="#hero" className="w-fit hover:text-surface-fg hover:underline underline-offset-4">-Book Tickets</a>
                    </nav>
                </div>

            </div>
            <div className="flex flex-col gap-3 max-w-130 p-6">
                <h3 className="font-bold text-lg font-head">Stay in the loop</h3>
                <p className="text-sm text-surface-muted-fg">Rescue updates, new arrivals, and event alerts — no spam.</p>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex gap-2"
                >
                    <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="min-w-0 flex-1 bg-page-bg text-page-fg placeholder:text-surface-muted-fg
                            rounded px-3 py-2 text-sm outline outline-surface-muted-fg/40 focus:outline-accent-bg
                            active:bg-accent-bg active:text-accent-fg focus:bg-accent-bg/10 focus:text-primary-bg"
                    />
                    <button
                        type="submit"
                        className="bg-primary-bg text-primary-fg text-sm font-bold px-3 py-2 rounded
                            hover:bg-primary-bg/80 shrink-0"
                    >
                        Join
                    </button>
                </form>
                <div>
                    <h3 className='text-lg font-head font-bold'>Follow us:</h3>
                    <SocialIcons />
                </div>
            </div>

            <div className="border-t border-surface-muted-bg">
                <div className="p-6 flex flex-col gap-2">
                    <div className="text-sm text-surface-muted-fg">
                        <p>Coral Bay Aquarium.</p>
                        <span>Built by </span>
                        <a
                            href="https://github.com/Bijay-Codes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:text-accent-bg"
                        >
                            Bijay-Codes
                        </a>{' '}
                        as a frontend portfolio project.
                    </div>
                </div>
                <p className="text-xs text-danger p-4 pt-0 max-w-180">
                    *Coral Bay is a fictional aquarium built for practice purposes. All names, statistics,
                    locations, and claims shown on this site (including hours, address, membership numbers,
                    and conservation figures) are made up and do not represent a real business.*
                </p>
            </div>
        </m.footer>
    )
}