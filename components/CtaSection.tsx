import Link from "next/link";
import Icon from "@/components/Icon";

export default function CtaSection() {
  return (
    <section>
      <div className="container">
        <div className="card cta-box reveal zoom">
          <div className="orbit" />
          <span className="eyebrow">Let&apos;s collaborate</span>
          <h2>
            Have a project <span className="grad">in mind?</span>
          </h2>
          <p>
            I&apos;m always open to collaborations, freelance opportunities, or creative
            discussions. Feel free to reach out anytime!
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in touch <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
