import Icon from "@/components/Icon";
import { socials } from "@/data/site";

export default function Socials({ label }: { label?: string }) {
  return (
    <div className="socials">
      {label && <span>{label}</span>}
      {socials.map((s) => (
        <a key={s.href} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
          <Icon name={s.icon} />
        </a>
      ))}
    </div>
  );
}
