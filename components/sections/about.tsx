import Skills from "@/components/skills"

export default function About() {
    return (
        <section id="about">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,0.5px,1fr] md:auto-rows-fr">
                <div className="flex flex-col px-10 flex-1">
                    <h1 className="font-poppins font-[700] text-xl leading-tight md:text-2xl lg:text-4xl mb-5">
                        About Me
                    </h1>

                    <p className="font-[400] text-lg leading-tight text-justify md:text-xl lg:text-2xl mb-1">
                        I&apos;m a Software Engineer based in Toronto, Canada with a passion for developing software and finding solutions to real-world problems. Having recently graduated from Toronto Metropolitan University with a degree in Computer Science, I&apos;m looking to start my career in the tech industry.
                    </p>
                    
                    <br/>
                    
                    <p className="font-[400] text-lg leading-tight text-justify md:text-xl lg:text-2xl mb-1">
                        I absolutely love using technology to make cool stuff while exploring and implementing new skills and keeping up with the latest tech trends.
                    </p>
                </div>

                <div className="hidden md:block w-0.5 bg-gray-300 dark:bg-gray-700" />

                <div className="flex flex-col items-center px-10 flex-1">
                    <div className="w-full">
                        <Skills />
                    </div>
                </div>
            </div>
        </section>
    )
}