import { shows } from "../data/showDetails"
export function KeyAttractions() {
    return (
        <section className="p-6 flex flex-col gap-9">
            <h1 className="text-2xl">Key Attractions</h1>
            <div className="flex flex-wrap gap-6">
                <Attractions />
            </div>
            <ShowMoreAnimals />
        </section >
    )
}

function Attractions() {
    return (
        shows.map((show, i) => {
            return (
                <div className="w-150 h-50 relative
                 flex flex-col justify-center overflow-hidden">
                    <Images show={show} />
                    <MetaData show={show} />
                </div>
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
            flex flex-col gap-6
            absolute bottom-0 bg-black/30 hover:bg-transparent'>
            <div>
                <h1 className="text-xl font-extrabold">{show.title}</h1>
                <h2 className="text-sm font-extrabold text-shadow-xs text-shadow-black">{show.time}</h2>
                <p className="text-md font-bold max-w-1/2 text-shadow-xs text-shadow-black">
                    {show.description}
                </p>
            </div>
            <button className="text-sm underline underline-offset-4 text-shadow-sm text-shadow-black
            self-start mt-auto">More details &gt;&gt;</button>
        </div>
    )
}
function ShowMoreAnimals() {
    return (
        <button className="bg-slate-900 h-fit px-4 py-2 self-center rounded">View all</button>
    )
}