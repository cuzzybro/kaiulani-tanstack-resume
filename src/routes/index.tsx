import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "@/routes/__root";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Volunteer } from "@/components/volunteer";
import { Footer } from "@/components/footer";

function ResumePage() {
	return (
		<main>
			<Hero />
			<About />
            <Experience />
            <Volunteer />
            <Footer />
		</main>
	);
}

export const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: ResumePage,
});
