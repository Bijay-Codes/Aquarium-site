import { m } from 'framer-motion'
import { proofProgrames } from "../data/proof"
import { Heading } from '../util/slectedText'
export function Mission() {
    return (
        <section className="p-6 flex flex-col gap-12">
            <div>
                {/* <h1 className="">Our Mission</h1> */}
                <Heading text={'Our'} selectedText={'Mission'} />
                <h2 className="text-xl text-surface-muted-fg sm:max-w-300">
                    We're working toward a facility where every animal is cared for and thriving,
                    while helping people understand the damage our oceans face every day.
                </h2>
            </div>
            <Proof />
            <div className="bg-primary-bg/10 outline outline-primary-bg border-primary-bg mt-auto rounded 
            max-w-200 border-l-6 p-6">
                <p>
                    1.2 million gallons run through our closed-loop filtration system — no ocean water is ever discharged untreated,
                    and the facility runs on 40% recycled seawater.
                </p>
                <p>
                    AZA-accredited since 2011 — one of only 4 aquariums in the region held to that standard.
                </p>
            </div>
            <hr className="opacity-30 w-full" />
        </section>
    )
}

function Proof() {
    return (
        <div className="flex flex-wrap sm:grid sm:grid-cols-2 max-w-330 gap-4 overflow-hidden">
            {proofProgrames.map(programme => {
                return (
                    <div
                        className="flex flex-col overflow-hidden rounded-xl"
                        key={programme.title + programme.img}
                    >
                        <img
                            src={programme.img}
                            alt={programme.title}
                            loading="lazy"
                            className="w-full h-60 object-cover"
                        />
                        <div className="bg-surface-muted-bg px-4 py-2 flex flex-col flex-1 gap-2">
                            <h2 className="text-xl">{programme.title}</h2>
                            <p className="flex-1">{programme.description}</p>
                            <button className="text-sm underline underline-offset-4 w-fit py-2">
                                read more...
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

