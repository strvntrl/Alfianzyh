"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { categories, projects, type Category } from "@/data/projects";

type Props = {
  /** Show only the first N projects (home page). */
  limit?: number;
  /** Show the category filter (portfolio page). */
  filterable?: boolean;
};

type Filter = "all" | Category;

export default function ProjectGrid({ limit, filterable }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const grid = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const list = limit ? projects.slice(0, limit) : projects;
  const count = (id: Filter) =>
    id === "all" ? list.length : list.filter((p) => p.category === id).length;

  // Animate the remaining cards in whenever the filter changes.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    grid.current?.querySelectorAll<HTMLElement>(".project:not(.gone)").forEach((card, i) => {
      card.animate(
        [
          { opacity: 0, transform: "translateY(24px) scale(.96)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 550, delay: i * 60, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" },
      );
    });
  }, [filter]);

  const options: { id: Filter; label: string }[] = [{ id: "all", label: "All" }, ...categories];

  return (
    <>
      {filterable && (
        <div className="filters reveal" role="group" aria-label="Filter projects">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              className={filter === option.id ? "active" : undefined}
              aria-pressed={filter === option.id}
              onClick={() => setFilter(option.id)}
            >
              {option.label} ({count(option.id)})
            </button>
          ))}
        </div>
      )}
      <div className="projects" ref={grid}>
        {list.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            compact={Boolean(limit)}
            hidden={filter !== "all" && project.category !== filter}
          />
        ))}
      </div>
    </>
  );
}
