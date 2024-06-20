import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen">
            <div className="flex flex-col items-center justify-center w-full lg:flex-row">
                <div className="w-2/3 xs:w-3/5 flex items-center justify-center md:w-1/2">
                    <Image
                        src="/images/portrait.webp"
                        alt="Picture of the author"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority={true}
                        className="rounded-lg dark:filter dark:brightness-[85%] w-full h-auto xs:w-3/5 xs:max-w-[60%] sm:min-w-[45%] sm:max-w-[50%] md:w-1/2"
                    />
                </div>

                <div className="w-full text-center p-4 font-poppins font-bold text-3xl xs:w-4/5 sm:w-3/5 md:text-3xl lg:p-0 lg:w-2/5 lg:text-left lg:text-5xl">
                    <h1>
                        Hi, I&apos;m <span>Nabeel</span>!
                    </h1>
                    <p>
                        A <span>Software Engineer</span> turning ideas into
                        reality through code
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center absolute w-max h-max bottom-2">
                <span className="mb-2 text-[0.75rem] font-semibold tracking-widest">
                    Scroll Down
                </span>
                <div className="w-0 h-7 border-l-2 border-primary animate-scroll-down-hero"></div>
            </div>
        </section>
    );
}
