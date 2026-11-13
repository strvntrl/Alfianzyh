import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { skillGroups } from "@/data/skills";
import { delay } from "@/lib/delay";

export default function SkillsGrid() {
  return (
    <div className="skills four">
      {skillGroups.map((group, i) => (
        <div key={group.title} className="card skill-col reveal" style={delay(i % 2)}>
          <div className="ico">
            <Icon name={group.icon} />
          </div>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item.label}>
                {item.logos.map((logo) => (
                  <Logo key={logo.id} {...logo} />
                ))}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
