import type { Experience } from "#/types/common";

export const experiences: Experience[] = [
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

export type Experiences = typeof experiences;
export default experiences;