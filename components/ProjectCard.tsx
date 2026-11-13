import Image from "next/image";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import type { Project } from "@/data/projects";
import { cx } from "@/lib/cx";

type Props = {
  project: Project;
  index: number;
  /** Use the short summary instead of the full description. */
  compact?: boolean;
  hidden?: boolean;
};

export default function ProjectCard({ project, index, compact, hidden }: Props) {
  return (
    <Reveal
      as="a"
      step={index % 3}
      className={cx("card project", hidden && "gone")}
      data-tilt=""
      href={project.url}
      target="_blank"
      rel="noopener"
    >
      <div className="thumb">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={1200}
          height={716}
          sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw"
        />
        <span className="go">
          <Icon name="arrow" />
        </span>
      </div>
      <div className="body">
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag.label} className="chip">
              {tag.logos.map((logo) => (
                <Logo key={logo.id} {...logo} />
              ))}
              {tag.label}
            </span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{compact ? (project.summary ?? project.description) : project.description}</p>
        <span className="more">
          {project.category === "data" ? "View on Tableau Public" : "Visit live site"}{" "}
          <Icon name="arrow" />
        </span>
      </div>
    </Reveal>
  );
}
