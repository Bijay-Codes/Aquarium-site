import { m } from 'framer-motion';

const parent = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14, delayChildren: 0.2
        }
    }
};
const children = {
    hidden: {
        opacity: 0, y: 16
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3, ease: 'easeInOut'
        }
    }
}

export function HeroSection() {
    return (
        <m.main
            variants={parent}
            initial='hidden'
            animate='visible'

            className="relative flex flex-col justify-center gap-12 w-full min-h-140 lg:min-h-160 text-white
            .hero-section">
            <figure
                className="w-full h-full absolute top-0">
                <img
                    src="/screenshots/main.webp"
                    className="w-full h-full object-cover"
                    alt="aquarium-background.webp"
                    fetchPriority="high"
                    loading="eager"
                />
            </figure>
            <section className="z-10 p-6 lg:p-14 flex flex-col gap-12 max-w-300">
                <div>
                    <m.h1
                        variants={children}
                        className="md:text-6xl text-4xl font-extrabold text-shadow-sm text-shadow-accent-fg mb-2 font-head">
                        The Ocean, up close
                    </m.h1>
                    <m.h2
                        variants={children}
                        className="md:text-4xl text-3xl text-shadow-sm text-shadow-accent-fg">
                        Sharks, Otters and other 100+ species - All within arms reach at Coral Bay
                    </m.h2>
                </div>
                <CTA />
                <SecondMessage />
            </section>
        </m.main>
    )
}

function CTA() {
    return (
        <m.button
            variants={children}
            whileHover={{
                y: 2,
                background: 'linear-gradient(120deg, var(--color-accent-bg), var(--color-primary-bg))'
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className="bg-accent-bg text-accent-fg font-head
        w-fit font-extrabold md:px-6 md:py-3 px-3 py-2 rounded text-xl">Book your Tickets
        </m.button>
    )
}

function SecondMessage() {
    return (
        <m.div
            variants={children}
            className="flex md:p-6 flex-col justify-start items-start
         text-white/80 text-shadow-sm text-shadow-black text-lg">
            <p>
                Every ticket helps us to fund an animal rescue
            </p>
            <button
                className="text-sm font-extrabold underline underline-offset-2 text-white/80 hover:text-white">
                learn more &gt;&gt;
            </button>
        </m.div>
    )
}