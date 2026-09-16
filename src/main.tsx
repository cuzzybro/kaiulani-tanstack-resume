import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "./styles.css";
import { router } from "@/routes/router";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
