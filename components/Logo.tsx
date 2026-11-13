import type { LogoRef } from "@/data/types";

/** Technology logo, drawn from the shared sprite in <LogoSprite />. */
export default function Logo({ id, color }: LogoRef) {
  return (
    <svg
      className="logo"
      aria-hidden="true"
      data-color={color}
      style={color ? { color } : undefined}
    >
      <use href={`#${id}`} />
    </svg>
  );
}
