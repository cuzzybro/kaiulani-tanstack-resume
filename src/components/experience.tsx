import { experiences } from "@/data/Experiences";

export function Experience() {
    return (
        			<section className="max-w-none bg-sage px-[6vw] py-[10vw] max-[700px]:px-[5vw] max-[700px]:py-[18vw]" id="experience">
				<div className="mx-auto flex max-w-310 items-center gap-7 font-mono text-[0.67rem] uppercase tracking-[0.12em] text-muted max-[700px]:mb-14">
					02 <span className="font-sans text-[0.72rem] font-extrabold tracking-[0.08em] text-ink">Experience</span>
				</div>
				<div className="mx-auto mt-[6vw] max-w-310">
					{experiences.map((experience, index) => (
						<article className="grid grid-cols-[60px_1fr] gap-[3vw] border-t border-ink/16 px-0 py-8.5 pb-10 max-[700px]:grid-cols-[35px_1fr] max-[700px]:gap-3.75" key={experience.role}>
							<div className="pt-2 font-mono text-[0.7rem] text-muted">0{index + 1}</div>
							<div>
								<div className="flex items-start justify-between max-[700px]:block">
									<div>
										<h3 className="mb-2 text-[clamp(1.25rem,2vw,2rem)] tracking-[-0.06em]">{experience.role}</h3>
										<p className="font-mono text-[0.65rem] uppercase text-muted">{experience.company}</p>
									</div>
									<time className="pt-3 font-mono text-[0.65rem] uppercase text-muted max-[700px]:mt-4 max-[700px]:block">{experience.dates}</time>
								</div>
								<p className="my-8 mb-4 max-w-120 text-[0.92rem] leading-normal max-[700px]:mt-6">
									{experience.description}
								</p>
								<ul className="m-0 flex list-none flex-wrap gap-x-5.5 gap-y-2 p-0 max-[700px]:block">
									{experience.details.map((detail) => (
										<li className="text-[0.75rem] leading-[1.4] before:mr-1.75 before:text-coral before:content-['↳'] max-[700px]:mb-2" key={detail}>{detail}</li>
									))}
								</ul>
							</div>
						</article>
					))}
				</div>
			</section>
    )
}