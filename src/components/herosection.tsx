export function HeroSection() {
    return (
        <main className="relative flex flex-col justify-center gap-12 w-screen h-max min-h-140">
            <figure className="w-full h-full absolute top-0">
                <img
                    src="/screenshots/main.jpg"
                    className="w-full h-full object-cover"
                    alt="aquarium-background.jpg"
                />
            </figure>
            <section className="z-10 p-6 flex flex-col gap-12">
                <h1 className="text-4xl font-extrabold text-shadow-sm text-shadow-black">The Ocean, up close</h1>
                <h2 className="text-3xl font-bold text-shadow-sm text-shadow-black">Sharks,Otters and other 100+ species - All within arms reach at Coral Bay</h2>
                <CTA />
                <SecondMessage />
            </section>
        </main>
    )
}

function CTA() {
    return (
        <button className="bg-sky-500 
        w-fit font-extrabold p-2 rounded text-xl">Book your Tickets</button>
    )
}

function SecondMessage() {
    return (
        <div className="flex p-6 flex-col justify-start items-start text-slate-100
         text-shadow-sm text-shadow-black">
            <p>We aim to create a better environment for animals</p>
            <button className="text-sm underline underline-offset-2 text-white">view details &gt;</button>
        </div>
    )
}