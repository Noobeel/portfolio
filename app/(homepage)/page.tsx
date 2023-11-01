import { Hero, About, Projects, Contact } from '@/components/sections'

export default function Home() {
    return (
        <main className="h-full w-full relative">
            <div className="flex flex-col w-full h-full">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </div>
        </main>
    )
}
