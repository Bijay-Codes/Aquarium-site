export function Navbar() {
    return (
        <nav className="w-screen h-16 bg-blue-900 p-2 z-50">
            <section className="flex w-full gap-4 items-center">
                <div className="w-6 h-6 aspect-square rounded-full bg-sky-600"></div>
                <div className="flex flex-col">
                    <h1>Coral Bay</h1>
                    <h2>Open today 7am - 5pm</h2>
                </div>
                <div className="ml-auto flex gap-4">
                    <button className="bg-sky-400 h-fit py-1 px-2 rounded">Tickets</button>
                    <button className="bg-sky-100 text-black py-1 h-fit px-2 rounded">Shows</button>
                    <div className="bg-sky-50 w-8 h-8 aspect-square rounded"></div>
                </div>
            </section>
        </nav>
    )
}