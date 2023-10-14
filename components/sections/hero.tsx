import Image from 'next/image'

export default function Hero() {
    return (
        <section id="hero">
            <div className='flex flex-row items-center justify-center'>
                <div className="w-1/2 h-auto flex justify-center">
                    <Image src="/images/potrait.png"
                        alt="Picture of the author"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-1/2 h-1/2 rounded-lg object-contain"
                    />
                </div>

                <div className="w-2/5 font-poppins font-[700] text-2xl leading-tight md:text-3xl lg:text-5xl">
                    <h1>Hi, I&apos;m <span>Nabeel</span>!</h1>
                    <p>A <span>Software Engineer</span> turning ideas into reality through code</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center absolute w-max h-max bottom-2">
                <span className='mb-2 text-white text-[0.75rem] font-[600] tracking-widest'>Scroll Down</span>
                <div className="w-0 h-7 border-l-2 border-white animate-[scroll-down-hero_1.5s_ease-in-out_forwards_infinite]"></div>
            </div>
        </section>
    )
}