

export function Volunteer() {
    return (
        <section className="grid max-w-none grid-cols-[1fr_3fr] gap-[8vw] bg-ink px-[6vw] py-[10vw] text-paper max-[700px]:block max-[700px]:px-[5vw] max-[700px]:py-[18vw]" id="volunteer">
            <div className="flex items-center gap-7 font-mono text-[0.67rem] uppercase tracking-[0.12em] text-[#a6b0a9] max-[700px]:mb-14">
                03 <span className="font-sans text-[0.72rem] font-extrabold tracking-[0.08em] text-paper">Volunteer / Leadership</span>
            </div>
            <div className="grid grid-cols-2 gap-[8vw] max-[700px]:block">
                <h2 className="m-0 text-[clamp(2.3rem,4.4vw,5.2rem)] leading-[0.94] tracking-[-0.09em] text-coral">
                    Showing up
                    <br />
                    <em className="font-display font-medium not-italic tracking-[-0.07em]">counts.</em>
                </h2>
                <div className="border-l border-paper/24 pl-12 max-[700px]:mt-12 max-[700px]:pl-6">
                    <article className="grid grid-cols-[30px_1fr] gap-5 border-b border-paper/24 pb-6.5">
                        <span className="font-mono text-[0.65rem] text-coral">01</span>
                        <p className="m-0 text-[0.98rem] leading-[1.6]">
                            Provided personal care for my disabled mother while she did not
                            qualify for government health assistance, 2021 - 2024.
                        </p>
                    </article>
                    <article className="grid grid-cols-[30px_1fr] gap-5 border-b border-paper/24 pb-6.5 pt-6.5">
                        <span className="font-mono text-[0.65rem] text-coral">02</span>
                        <p className="m-0 text-[0.98rem] leading-[1.6]">
                            Youth Counselor at annual church multi-area youth events held
                            across different states in Australia and New Zealand.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}