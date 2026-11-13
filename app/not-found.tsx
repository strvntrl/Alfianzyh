import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70svh" }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>
          Page <span className="grad">not found</span>
        </h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <div className="hero-cta">
          <Link href="/" className="btn btn-primary">
            Back to home <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
