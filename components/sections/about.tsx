import Skills from "@/components/sections/skills";

export default function About() {
    return (
        <section id="about" className="py-10 lg:p-10">
            <div className="grid grid-cols-1 lg:auto-rows-fr lg:grid-cols-[1fr,0.5px,1fr] xl:grid-cols-[1fr,0.5px,0.75fr]">
                <div className="flex flex-col px-5 flex-1 md:px-10">
                    <h1 className="font-poppins font-bold text-2xl text-center text-primary lg:text-left md:text-3xl mb-2">
                        About Me
                    </h1>

                    <div className="text-secondary text-lg leading-tight md:text-xl xl:text-[1.35rem] 2xl:text-[1.45rem] 2xl:leading-8">
                        <p>
                            I&apos;m a Software Engineer based in Toronto,
                            Canada with a passion for developing software and
                            finding solutions to real-world problems. I find
                            immense joy in the process of transforming ideas
                            into tangible, functional software, constantly
                            pushing the boundaries of what&apos;s possible. The
                            fast-paced nature of technology excites me, and I am
                            always on the lookout for opportunities to explore
                            and implement new tools and methodologies.
                            <br />
                            <br />
                            Having recently graduated from{" "}
                            <a
                                className="underline"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://torontomu.ca/"
                            >
                                Toronto Metropolitan University
                            </a>{" "}
                            with a degree in Computer Science, I am looking to
                            start my career in the tech industry. My aspiration
                            is not only to excel in my individual pursuits but
                            also to contribute meaningfully to the broader tech
                            ecosystem. As I take my first steps into the
                            professional arena, I am excited about the prospect
                            of connecting with like-minded individuals,
                            exchanging ideas, and contributing to the innovation
                            that drives our ever-evolving digital landscape.
                        </p>
                    </div>
                </div>

                <div className="hidden lg:block w-0.5 rounded-full bg-gray-300 dark:bg-gray-700" />

                <div className="flex items-start justify-center w-full px-5 flex-1 lg:px-10">
                    <Skills />
                </div>
            </div>
        </section>
    );
}
