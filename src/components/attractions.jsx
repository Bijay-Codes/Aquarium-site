import { shows } from '../data/showDetails';
import { motion } from 'framer-motion';

const parent = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16, delayChildren: 0.3
        }
    }
}

const children = {
    hidden: {
        opacity: 0, x: 16
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3, ease: 'easeInOut'
        }
    }
}


export function KeyAttractions() {
    return (
        <section className="sm:p-6 p-4 flex flex-col gap-10 text-white mt-6">
            <Heading />
            <motion.div
                variants={parent}
                initial='hidden'
                whileInView='visible'
                className="sm:grid sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] flex flex-wrap gap-6">
                <Attractions />
            </motion.div>
            <ShowMoreAnimals />
            <hr />
        </section >
    )
}

function Heading() {
    return (
        <h1 className="text-4xl font-extrabold text-primary-bg w-fit py-1">
            Key{' '}
            <span className="relative inline-block">
                <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{ originX: 0 }}
                    className="absolute inset-0 bg-primary-bg -z-10"
                />
                <span className="relative text-white px-1">Attractions</span>
            </span>
        </h1>
    );
}
function Attractions() {
    return (
        shows.map((show, i) => {
            return (
                <motion.div
                    variants={children}
                    key={show.title + i}
                    className="w-full max-w-160 h-50 relative
                 flex flex-col justify-center overflow-hidden">
                    <Images show={show} />
                    <MetaData show={show} />
                </motion.div>
            )
        })
    )
}

function Images({ show }) {
    return (
        <figure className="w-full h-full">
            <img
                src={show.img}
                alt={show.title}
                loading="lazy"
                className='object-cover w-full h-full rounded-2xl' />
        </figure>
    )
}

function MetaData({ show }) {
    return (
        <div
            className='w-full h-full rounded-2xl p-4
            flex flex-col gap-2
            absolute bottom-0 bg-black/30 hover:bg-transparent'>
            <div>
                <span className="sm:text-xl text-xl font-extrabold">{show.title} | </span>
                <span className="text-xl font-extrabold text-shadow-xs text-shadow-black">{show.time}</span>
                <p className="text-sm font-bold max-w-[80%] sm:max-w-1/2 text-shadow-xs text-shadow-black opacity-80 hover:opacity-100 text-white mt-2">
                    {show.description}
                </p>
            </div>
            <button className="text-sm underline underline-offset-4 text-shadow-sm text-shadow-black
            mt-auto self-start">Show details &gt;&gt;</button>
        </div>
    )
}
function ShowMoreAnimals() {
    return (
        <motion.button
            initial={{ x: -10, opacity: 0.8 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="bg-primary-bg
            h-fit px-3 py-0.5 md:px-4 md:py-2 self-start rounded">View all &gt;&gt;
        </motion.button>
    )
}