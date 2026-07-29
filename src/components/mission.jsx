import { proofProgrames } from "../data/proof"

export function Mission() {
    return (
        <section className="p-6 flex flex-col gap-12">
            <div>
                <h1 className="text-2xl font-extrabold">Our Mission</h1>
                <h2 className="text-xl text-surface-muted-fg sm:max-w-300">
                    We're working toward a facility where every animal is cared for and thriving,
                    while helping people understand the damage our oceans face every day.
                </h2>
            </div>
            <Proof />
        </section>
    )
}

function Proof() {
    return (
        <div className="grid grid-cols-2 max-w-330 gap-4 overflow-hidden">
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
                                More Details &gt;&gt;
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}