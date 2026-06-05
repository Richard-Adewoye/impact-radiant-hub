import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moore Universal — Brand Strategy, Communications & Design" },
      {
        name: "description",
        content:
          "Where African ambition meets world-class strategy. We help founders, organisations, and institutions build brands that lead.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/moore-universal2026.html");
  }, []);
  return null;
}
