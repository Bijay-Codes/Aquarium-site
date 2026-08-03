import { m } from 'framer-motion'
import { proofProgrames } from "../data/proof"
import { Heading } from '../util/slectedText'
export function Mission() {
    return (
        <section className="p-6 flex flex-col gap-12">
            <m.div
                initial={{ x: 24 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                <Heading text={'Our'} selectedText={'Mission'} />
                <h2 className="text-xl text-surface-muted-fg sm:max-w-300 mt-2">
                    We're working toward a facility where every animal is cared for and thriving,
                    while helping people understand the damage our oceans face every day.
                </h2>
            </m.div>
            <Proof />
            <m.div
                initial={{ opacity: 0.4, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeIn' }}
                className="bg-primary-bg/10 outline outline-primary-bg border-primary-bg mt-auto rounded 
            max-w-200 border-l-6 p-6">
                <p>
                    1.2 million gallons run through our closed-loop filtration system — no ocean water is ever discharged untreated,
                    and the facility runs on 40% recycled seawater.
                </p>
                <p>
                    AZA-accredited since 2011 — one of only 4 aquariums in the region held to that standard.
                </p>
            </m.div>
            <hr className="opacity-30 w-full" />
        </section>
    )
}
const parent = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4, delayChildren: 0.2
        }
    }
}
const children = {
    hidden: { opacity: 0, x: -6 },
    visible: { opacity: 1, x: 0 }
}
function Proof() {
    return (
        <m.div
            variants={parent}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeIn' }}
            className="flex flex-wrap sm:grid sm:grid-cols-2 max-w-330 gap-4 overflow-hidden">
            {proofProgrames.map(programme => {
                return (
                    <m.div
                        variants={children}
                        className="flex flex-col overflow-hidden rounded-xl border border-primary-bg"
                        key={programme.title + programme.img}>
                        <img
                            src={programme.img}
                            alt={programme.title}
                            loading="lazy"
                            className="w-full h-60 object-cover"
                        />
                        <div className="bg-surface-muted-bg px-4 py-2 flex flex-col flex-1 gap-2">
                            <h2 className="text-xl z-10">{programme.title}</h2>
                            <p className="flex-1 z-10">{programme.description}</p>
                            <button className="text-sm underline underline-offset-4 w-fit py-2 z-10">
                                learn more &gt;&gt;
                            </button>
                        </div>
                    </m.div>
                )
            })}
        </m.div>
    )
}

