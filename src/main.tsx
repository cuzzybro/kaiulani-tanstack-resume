import { createRoot } from "react-dom/client";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import "./styles.css";

const experiences = [
  {
    role: "Warehousing Nightfill",
    company: "The Warehouse",
    dates: "2024 - 2025",
    description:
      "A steady, customer-focused presence behind the scenes and on the shop floor.",
    details: [
      "Restock shelves following and implementing a planogram",
      "Create a welcoming space for customers",
      "Maintain a clean and tidy store environment",
      "Ensure products are priced accurately and promotions are clearly marked",
      "Direct customers to the best deals",
    ],
  },
  {
    role: "Baker's Assistant",
    company: "Kai Kitchen (Part time)",
    dates: "2014 - 2024",
    description:
      "A decade of hands-on service, production, and shift leadership.",
    details: [
      "Front of house, sales and customer service",
      "Baking goods",
      "Supervising shifts",
    ],
  },
  {
    role: "Theatre Attendant",
    company: "Reading Cinemas",
    dates: "2014 - 2021",
    description:
      "A fast-paced role built around people, performance, and a great guest experience.",
    details: [
      "Sales and customer service",
      "Training staff and supervision",
      "Meeting targets and key performance indicators",
    ],
  },
  {
    role: "Session Musician / Vocalist",
    company: "Self employed",
    dates: "Ongoing",
    description:
      "Creating a considered, collaborative atmosphere for live and recorded work.",
    details: ["Session backing vocals and guitar", "Private solo events"],
  },
];

function ResumeLayout() {
  return (
    <>
      <header className="topbar">
        <Link to="/" className="wordmark">
          KJ<span>.</span>
        </Link>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#volunteer">Volunteer</a>
        </nav>
        <a className="download-link" href="mailto:kaiulani.jk@gmail.com">
          Get in touch <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>
      <Outlet />
    </>
  );
}

function ResumePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="name">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> Resume / 2025
            </p>
            <h1 id="name">
              Ka'iulani
              <br />
              <em>James-Kawamura</em>
            </h1>
            <p className="hero-intro">
              Approachable, adaptable, and ready to make good work feel
              effortless.
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href="mailto:kaiulani.jk@gmail.com"
              >
                Let's connect <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#experience">
                Explore experience <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="hero-note">
            <div className="note-mark">
              <Sparkles size={19} />
            </div>
            <p>
              "Self-motivated and inquisitive, I embrace change and seek
              opportunities for improvement."
            </p>
            <span className="note-line" />
            <span className="note-caption">A little about how I work</span>
          </div>
        </div>
        <div className="contact-strip">
          <a href="tel:0435377195">
            <Phone size={16} /> 0435 377 195
          </a>
          <span className="contact-divider" />
          <span className="license">Licensed Driver</span>
          <span className="contact-divider" />
          <a href="mailto:kaiulani.jk@gmail.com">
            <Mail size={16} /> kaiulani.jk@gmail.com
          </a>
        </div>
      </section>
      <section className="section about-section" id="about">
        <div className="section-label">
          01 <span>About</span>
        </div>
        <div className="about-content">
          <h2>
            People-first.
            <br />
            <em>Always learning.</em>
          </h2>
          <div className="about-text">
            <p>
              I am an approachable and adaptable professional with 8+ years of
              quality customer service experience.
            </p>
            <p>
              Skilled in working both independently and within teams, I am
              organized, reliable, and detail-oriented in resolving concerns.
            </p>
            <p>
              With a strong work ethic, I thrive under pressure, multitask
              effectively, and consistently meet deadlines.
            </p>
          </div>
        </div>
      </section>
      <section className="section experience-section" id="experience">
        <div className="section-label">
          02 <span>Experience</span>
        </div>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.role}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>
                  <time>{experience.dates}</time>
                </div>
                <p className="experience-description">
                  {experience.description}
                </p>
                <ul>
                  {experience.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section volunteer-section" id="volunteer">
        <div className="section-label">
          03 <span>Volunteer / Leadership</span>
        </div>
        <div className="volunteer-content">
          <h2>
            Showing up
            <br />
            <em>counts.</em>
          </h2>
          <div className="volunteer-list">
            <article>
              <span>01</span>
              <p>
                Provided personal care for my disabled mother while she did not
                qualify for government health assistance, 2021 - 2024.
              </p>
            </article>
            <article>
              <span>02</span>
              <p>
                Youth Counselor at annual church multi-area youth events held
                across different states in Australia and New Zealand.
              </p>
            </article>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div>
          <p className="footer-kicker">Open to the next chapter</p>
          <h2>
            Let's make
            <br />
            <em>something good.</em>
          </h2>
        </div>
        <div className="footer-contact">
          <p>
            <MapPin size={18} /> Australia / New Zealand
          </p>
          <a href="mailto:kaiulani.jk@gmail.com">
            kaiulani.jk@gmail.com <ArrowUpRight size={16} />
          </a>
        </div>
        <p className="copyright">
          Ka'iulani James-Kawamura <span>© 2025</span>
        </p>
      </footer>
    </main>
  );
}

const rootRoute = createRootRoute({ component: ResumeLayout });
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: ResumePage,
});
const router = createRouter({
  basepath: import.meta.env.BASE_URL.replace(/\/$/, ""),
  routeTree: rootRoute.addChildren([indexRoute]),
});

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
