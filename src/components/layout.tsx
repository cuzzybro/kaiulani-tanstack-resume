import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function ResumeLayout() {
  return (
    <>
      <header className="relative z-2 flex items-center justify-between bg-paper px-[6vw] py-6.5 max-[700px]:px-[5vw] max-[700px]:py-5">
        <Link to="/" className="text-[1.35rem] font-extrabold tracking-[-0.08em]">
          KJ<span className="text-coral">.</span>
        </Link>
        <nav className="ml-[8%] flex gap-8.5 max-[700px]:hidden" aria-label="Main navigation">
          <a className="text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink" href="#about">About</a>
          <a className="text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink" href="#experience">Experience</a>
          <a className="text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink" href="#volunteer">Volunteer</a>
        </nav>
        <a className="flex items-center gap-1.75 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] max-[700px]:text-[0.6rem]" href="mailto:kaiulani.jk@gmail.com">
          Get in touch <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>
      <Outlet />
    </>
  );
}