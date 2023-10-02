import Image from 'next/image'

export default function Hero() {
    return (
        <section id="hero">
            <div className="w-1/2 h-auto flex justify-center">
                <Image src="/images/potrait.jpg"
                    alt="Picture of the author"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-1/2 h-1/2 rounded-lg object-contain"
                />
            </div>

            <div className="hero-text-container w-1/2">
                <h1>Hi, I&apos;m <span>Nabeel</span></h1>
                <p>A <span>Full Stack Developer</span></p>
            </div>
        </section>
    )
}