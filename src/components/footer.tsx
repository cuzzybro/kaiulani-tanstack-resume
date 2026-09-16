import { MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="grid grid-cols-[1.5fr_1fr] gap-16 bg-coral px-[6vw] pb-7 pt-[9vw] max-[700px]:block max-[700px]:px-[5vw] max-[700px]:pb-5.5 max-[700px]:pt-[18vw]">
            <div>
                <p className="mb-8 font-mono text-[0.67rem] uppercase tracking-[0.12em]">Open to the next chapter</p>
                <h2 className="text-[clamp(2.7rem,6vw,6rem)] leading-[0.94] tracking-[-0.09em]">
                    Let's make
                    <br />
                    <em className="font-display font-medium not-italic tracking-[-0.07em]">something good.</em>
                </h2>
            </div>
            <div className="self-end border-b border-ink pb-4.5 max-[700px]:mt-16">
                <p className="flex items-center gap-2.5 font-mono text-[0.7rem]">
                    <MapPin size={18} /> Australia / New Zealand
                </p>
            </div>
            <p className="col-span-full mt-12 font-mono text-[0.6rem] max-[700px]:mt-16">
                Ka'iulani James-Kawamura <span className="float-right">© 2025</span>
            </p>
        </footer>
    )
}