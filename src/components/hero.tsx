import { ArrowUpRight, Sparkles } from "lucide-react";


export function Hero() {

    return (
        <section className="relative overflow-hidden bg-coral px-[6vw] pt-[9.5vw] after:absolute after:right-[-16vw] after:top-[-24vw] after:h-[42vw] after:w-[42vw] after:rounded-full after:border after:border-ink/16 after:content-[''] max-[700px]:px-[5vw] max-[700px]:pt-[18vw] max-[700px]:after:right-[-40vw] max-[700px]:after:top-[-26vw] max-[700px]:after:h-[80vw] max-[700px]:after:w-[80vw]" aria-labelledby="name">
            <div className="relative z-1 mx-auto grid max-w-310 grid-cols-[minmax(0,1.4fr)_minmax(240px,0.6fr)] gap-[9vw] max-[700px]:block">
                <div>
                    <p className="mb-18 flex items-center gap-2.25 font-mono text-[0.67rem] uppercase tracking-[0.12em] max-[700px]:mb-[3.2rem]">
                        <span className="block h-1.75 w-1.75 rounded-full bg-ink" /> Resume / 2025
                    </p>
                <h1 className="mb-[2.3rem] max-w-212.5 text-[clamp(3.5rem,8vw,8.8rem)] font-extrabold leading-[0.86] tracking-[-0.09em] max-[700px]:text-[clamp(3.4rem,16vw,6rem)]" id="name">
                    Ka'iulani
                    <br />
                    <em className="font-display font-medium not-italic tracking-[-0.07em]">James-Kawamura</em>
                </h1>
                <p className="max-w-110 text-[clamp(1rem,1.6vw,1.3rem)] leading-normal">
                    Approachable, adaptable, and ready to make good work feel
                    effortless.
                </p>
                <div className="mb-32 mt-12 flex items-center gap-7 max-[700px]:mb-18 max-[700px]:mt-10 max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-5.5">
                    <a
                        className="inline-flex items-center gap-3 bg-ink px-5 py-4.25 text-[0.75rem] font-extrabold tracking-[0.03em] text-paper"
                        href="mailto:kaiulani.jk@gmail.com"
                    >
                        Let's connect <ArrowUpRight size={17} />
                    </a>
                    <a className="border-b border-ink pb-1.5 text-[0.75rem] font-extrabold" href="#experience">
                        Explore experience <ArrowUpRight size={15} />
                    </a>
                </div>
            </div>
            <div className="self-end pb-32 max-[700px]:border-t max-[700px]:border-ink/22 max-[700px]:py-12">
                <div className="mb-6.5 flex h-11.5 w-11.5 items-center justify-center bg-ink text-coral">
                    <Sparkles size={19} />
                </div>
                <p className="max-w-75 font-display text-[clamp(1.35rem,2.1vw,2rem)] leading-[1.18]">
                    "Self-motivated and inquisitive, I embrace change and seek
                    opportunities for improvement."
                </p>
                <span className="my-8.75 block h-px w-12 bg-ink" />
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em]">A little about how I work</span>
            </div>
        </div>
        <div className="relative z-1 mx-auto flex max-w-310 items-center gap-6 border-t border-ink/22 py-5.5 max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-3.25 max-[700px]:py-5">
            <span className="hidden h-0.75 w-0.75 bg-ink opacity-50" />
            <span className="font-mono text-[0.65rem]">Licensed Driver</span>
            <span className="hidden h-0.75 w-0.75 bg-ink opacity-50" />
        </div>
    </section>

)}