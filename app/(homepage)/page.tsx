import { Navbar, Hero, About, Skills, Projects, Contact, Socials } from '@/components/sections'

export default function Home() {
    return (
        <main className="h-full w-full relative">
            <Socials />
            <Navbar />

            <div className="flex flex-col w-full h-full">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </main>
    )
}
