import { motion } from 'framer-motion';

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
        <motion.main
            variants={parent}
            initial='hidden'
            animate='visible'

            className="relative flex flex-col justify-center gap-12 w-full min-h-140 text-white
            [clip-path:polygon(0%_0%,100%_0%,100%_99%,80%_100%,16%_98%,0%_94%)]">
            <figure
                className="w-full h-full absolute top-0">
                <motion.img
                    src="/screenshots/main.webp"
                    className="w-full h-full object-cover"
                    alt="aquarium-background.webp"
                />
            </figure>
            <section className="z-10 p-6 flex flex-col gap-12 max-w-300">
                <div>
                    <motion.h1
                        variants={children}
                        className="md:text-6xl text-4xl font-extrabold text-shadow-sm text-shadow-accent-fg mb-2">
                        The Ocean, up close
                    </motion.h1>
                    <motion.h2
                        variants={children}
                        className="md:text-4xl text-3xl text-shadow-sm text-shadow-accent-fg">
                        Sharks, Otters and other 100+ species - All within arms reach at Coral Bay
                    </motion.h2>
                </div>
                <CTA />
                <SecondMessage />
            </section>
        </motion.main>
    )
}

function CTA() {
    return (
        <motion.button
            variants={children}
            whileHover={{
                y: 2,
                background: 'linear-gradient(120deg, var(--color-accent-bg), var(--color-primary-bg))'
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className="bg-accent-bg text-accent-fg 
        w-fit font-extrabold md:px-6 md:py-3 px-3 py-2 rounded text-xl">Book your Tickets
        </motion.button>
    )
}

function SecondMessage() {
    return (
        <motion.div
            variants={children}
            className="flex md:p-6 flex-col justify-start items-start
         text-white/80 text-shadow-sm text-shadow-black text-lg">
            <p>
                Every ticket helps us to fund an animal rescue
            </p>
            <button
                className="sm:text-lg text-sm font-extrabold underline underline-offset-2 text-white/80 hover:text-white">
                learn more &gt;&gt;
            </button>
        </motion.div>
    )
}