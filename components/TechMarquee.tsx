import Logo from "@/components/Logo";
import { techStack } from "@/data/tech";

/** Endless scrolling strip of technologies. The list is rendered twice for a seamless loop. */
export default function TechMarquee() {
  return (
    <div className="marquee" aria-label="Tech stack">
      <div className="track">
        {[0, 1].map((copy) =>
          techStack.map((tech) => (
            <span key={`${copy}-${tech.label}`} aria-hidden={copy === 1 || undefined}>
              {tech.logos.map((logo) => (
                <Logo key={logo.id} {...logo} />
              ))}
              {tech.label}
            </span>
          )),
        )}
      </div>
    </div>
  );
}
