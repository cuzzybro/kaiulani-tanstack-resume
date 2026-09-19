import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Volunteer } from "@/components/volunteer";
import { experiences } from "@/data/Experiences";

describe("resume sections", () => {
  it("renders the hero identity and contact actions", () => {
    render(<Hero />);

    const heading = screen.getByRole("heading", { name: /ka'iulani/i });
    expect(heading).toHaveTextContent("Ka'iulani");
    expect(heading).toHaveTextContent("James-Kawamura");
    expect(screen.getByRole("link", { name: /let's connect/i })).toHaveAttribute(
      "href",
      "mailto:kaiulani.jk@gmail.com",
    );
    expect(screen.getByRole("link", { name: /explore experience/i })).toHaveAttribute(
      "href",
      "#experience",
    );
    expect(screen.getByText("Licensed Driver")).toBeInTheDocument();
  });

  it("renders the about section with its identifying anchor", () => {
    render(<About />);

    const section = document.getElementById("about");
    expect(section).toBeInTheDocument();
    expect(within(section!).getByRole("heading", { name: /people-first.*always learning/i })).toBeInTheDocument();
    expect(within(section!).getByText(/8\+ years of quality customer service/i)).toBeInTheDocument();
  });

  it("renders every experience and its details", () => {
    render(<Experience />);

    const section = document.getElementById("experience");
    expect(section).toBeInTheDocument();
    expect(within(section!).getByText("Experience")).toBeInTheDocument();

    for (const experience of experiences) {
      expect(within(section!).getByRole("heading", { name: experience.role })).toBeInTheDocument();
      expect(within(section!).getByText(experience.company)).toBeInTheDocument();
      expect(within(section!).getByText(experience.dates)).toBeInTheDocument();

      for (const detail of experience.details) {
        expect(within(section!).getByText(detail)).toBeInTheDocument();
      }
    }
  });

  it("renders volunteer stories and the footer contact details", () => {
    render(
      <>
        <Volunteer />
        <Footer />
      </>,
    );

    expect(screen.getByRole("heading", { name: /showing upcounts/i })).toBeInTheDocument();
    expect(screen.getByText(/provided personal care for my disabled mother/i)).toBeInTheDocument();
    expect(screen.getByText(/youth counselor at annual church multi-area youth events/i)).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toHaveTextContent("Australia / New Zealand");
    expect(screen.getByRole("contentinfo")).toHaveTextContent("Ka'iulani James-Kawamura");
  });
});