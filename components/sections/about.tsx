import Skills from "@/components/sections/skills";

export default function About() {
    return (
        <section id="about" className="py-10 lg:p-10">
            <div className="grid grid-cols-1 lg:auto-rows-fr lg:grid-cols-[1fr,0.5px,1fr] xl:grid-cols-[1fr,0.5px,0.75fr]">
                <div className="flex flex-col px-20 flex-1 my-auto lg:px-10">
                    <h1 className="font-poppins font-bold text-2xl text-center text-primary lg:text-left md:text-3xl mb-2">
                        About Me
                    </h1>

                    <div className="text-secondary text-lg leading-tight text-justify md:text-xl lg:text-left xl:text-[1.35rem] 2xl:text-[1.45rem] 2xl:leading-8">
                        <p className="mb-4">
                            I&apos;m a Software Engineer based in Toronto,
                            Canada, passionate about developing software and
                            solving real-world problems. I enjoy turning ideas
                            into functional software and exploring new tools and
                            methodologies in the fast-paced tech industry.
                        </p>

                        <p className="mt-4">
                            I recently graduated from{" "}
                            <a
                                className="underline"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://torontomu.ca/"
                            >
                                Toronto Metropolitan University
                            </a>{" "}
                            with a Computer Science degree and am eager to start
                            my career in tech. I&apos;m excited to connect with
                            like-minded individuals and contribute to the
                            innovation in our digital landscape.
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
