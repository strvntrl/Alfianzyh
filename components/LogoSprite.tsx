import { sprite } from "@/data/sprite";

/** Hidden SVG sprite holding every technology logo used on the site. */
export default function LogoSprite() {
  return (
    <svg
      className="sprite"
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute" }}
      dangerouslySetInnerHTML={{ __html: sprite }}
    />
  );
}
