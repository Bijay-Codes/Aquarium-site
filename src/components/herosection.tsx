export function HeroSection() {
    return (
        <main className="relative flex flex-col justify-center gap-12 w-screen h-max min-h-140 text-white
        [clip-path:polygon(0%_0%,100%_0%,100%_99%,80%_100%,15%_92%,0%_94%)]">
            <figure className="w-full h-full absolute top-0">
                <img
                    src="/screenshots/main.jpg"
                    className="w-full h-full object-cover"
                    alt="aquarium-background.jpg"
                />
            </figure>
            <section className="z-10 p-6 flex flex-col gap-12 max-w-300">
                <div>
                    <h1 className="text-6xl font-extrabold text-shadow-sm text-shadow-accent-fg">The Ocean, up close</h1>
                    <h2 className="text-4xl text-shadow-sm text-shadow-accent-fg">Sharks,Otters and other 100+ species - All within arms reach at Coral Bay</h2>
                </div>
                <CTA />
                <SecondMessage />
            </section>
        </main>
    )
}

function CTA() {
    return (
        <button className="bg-accent-bg text-accent-fg 
        w-fit font-extrabold px-6 py-3 rounded text-xl">Book your Tickets</button>
    )
}

function SecondMessage() {
    return (
        <div className="flex p-6 flex-col justify-start items-start text-surface-muted-fg
         text-shadow-sm text-shadow-black text-lg">
            <p>Every ticket helps us to fund an animal resque</p>
            <button className="text-lg font-extrabold underline underline-offset-2 text-white
            hover:text-primary-bg">
                learn more &gt;&gt;
            </button>
        </div>
    )
}