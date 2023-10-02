import { Navbar, Hero, About, Skills, Projects, Contact } from '@/components/sections'

export default function Home() {
    return (
        <main className="h-full w-full relative">
            <Navbar />

            <div className="home-sections">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </main>
    )
}
