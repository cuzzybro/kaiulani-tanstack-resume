

export function About() {

    return (
        <section className="mx-auto grid max-w-310 grid-cols-[1fr_3fr] gap-[8vw] px-[6vw] py-[10vw] max-[700px]:block max-[700px]:px-[5vw] max-[700px]:py-[18vw]" id="about">
            <div className="flex items-center gap-7 font-mono text-[0.67rem] uppercase tracking-[0.12em] text-muted max-[700px]:mb-14">
                01 <span className="font-sans text-[0.72rem] font-extrabold tracking-[0.08em] text-ink">About</span>
            </div>
            <div className="grid grid-cols-2 gap-[8vw] max-[700px]:block">
                <h2 className="m-0 text-[clamp(2.3rem,4.4vw,5.2rem)] leading-[0.94] tracking-[-0.09em]">
                    People-first.
                    <br />
                    <em className="font-display font-medium not-italic tracking-[-0.07em]">Always learning.</em>
                </h2>
                <div className="border-l border-ink/16 pl-12 max-[700px]:mt-12 max-[700px]:pl-6">
                    <p className="mb-5 text-[1.05rem] leading-[1.65] max-[700px]:text-[0.95rem]">
                        I am an approachable and adaptable professional with 8+ years of
                        quality customer service experience.
                    </p>
                    <p className="mb-5 text-[1.05rem] leading-[1.65] max-[700px]:text-[0.95rem]">
                        Skilled in working both independently and within teams, I am
                        organized, reliable, and detail-oriented in resolving concerns.
                    </p>
                    <p className="mb-5 text-[1.05rem] leading-[1.65] max-[700px]:text-[0.95rem]">
                        With a strong work ethic, I thrive under pressure, multitask
                        effectively, and consistently meet deadlines.
                    </p>
                </div>
            </div>
        </section>

    )
}