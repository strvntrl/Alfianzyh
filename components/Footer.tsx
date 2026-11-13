import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";
import { navLinks, site } from "@/data/site";
import { delay } from "@/lib/delay";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="reveal">
            <Link href="/" className="brand">
              <Image src="/img/LOGO2.png" alt="" width={33} height={30} />
              alfianzyh<b>.</b>
            </Link>
            <p>
              Designed with passion, built for impact. Let’s stay connected, find me on social
              media!
            </p>
            <Socials />
          </div>
          <div className="reveal" style={delay(1)}>
            <h4>Pages</h4>
            <div className="foot-links">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="reveal" style={delay(2)}>
            <h4>Contact me</h4>
            <a className="mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
        <div className="giant" aria-hidden="true">
          alfianzyh
        </div>
        <div className="copy">
          <span>
            Copyright © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}
