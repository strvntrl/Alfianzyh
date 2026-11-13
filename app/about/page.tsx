import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import Icon from "@/components/Icon";
import SkillsGrid from "@/components/SkillsGrid";
import { delay } from "@/lib/delay";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container split">
          <div>
            <span className="eyebrow reveal">About me</span>
            <h1 className="reveal" style={{ ...delay(1), fontSize: "clamp(2.2rem,5vw,4rem)" }}>
              I’m Muhammad Alfiansyah, a{" "}
              <span className="grad">Full-Stack Web2, Web3 & System</span> Developer
            </h1>
            <p className="reveal" style={delay(2)}>
              Undergraduate Student of Information Systems at State University of Surabaya. Data
              Analyst & Business Intelligence. Focused on Information Systems Management & Digital
              Humanism.
            </p>
            <div className="hero-cta reveal" style={delay(3)}>
              <Link href="/contact" className="btn btn-primary">
                Get in touch <Icon name="arrow" />
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                See my work
              </Link>
            </div>
          </div>
          <div className="photo-frame reveal right" style={delay(2)}>
            <Image
              src="/img/opt/profile4.webp"
              alt="Muhammad Alfiansyah"
              width={1000}
              height={990}
            />
            <div className="badge">
              <Icon name="pin" className="line-ico" />
              <span>
                Surabaya<small>Indonesia</small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="reveal left sticky-col">
            <span className="eyebrow">My story</span>
            <h2>
              From a first line of <span className="grad">HTML</span> to professional industry
            </h2>
            <div className="duo" style={{ marginTop: "36px" }}>
              <figure>
                <Image
                  src="/img/opt/story-portrait.webp"
                  alt="Muhammad Alfiansyah standing and pointing toward the camera"
                  width={1000}
                  height={1500}
                />
              </figure>
              <figure>
                <Image
                  src="/img/opt/code.webp"
                  alt="Laptop showing code in an editor"
                  width={1000}
                  height={920}
                />
              </figure>
            </div>
          </div>
          <div className="timeline">
            <article className="card t-item reveal">
              <span className="chip">Chapter 01</span>
              <h3>My story</h3>
              <p>
                I first discovered my interest in programming back in junior high school. The very
                first programming language I learned was HTML. It fascinated me how lines of code
                could shape what we see on a screen. However, I had to put that interest on hold
                during high school due to a tight schedule and not having a proper device to
                practice coding on my own.
              </p>
              <p>
                As I approached graduation, I decided to start learning again from scratch. Even
                though I still didn’t have a laptop at that time, I was eager to learn so I began
                watching tutorials on YouTube and taking notes to prepare myself.
              </p>
            </article>
            <article className="card t-item reveal">
              <span className="chip">Chapter 02</span>
              <h3>Growing with Code and Digital Skills</h3>
              <p>
                Back in high school, I also enjoyed editing short videos, usually nature-themed.
                Sometimes I was given the responsibility to edit video assignments, which continued
                into my college years. These experiences taught me how important visuals and
                storytelling are in delivering a message.
              </p>
              <p>
                In college, my interest in web development grew stronger. Beyond that, I became
                drawn to data and Information Systems Management, as I believe that great technology
                should be supported by strong, structured management and by decisions grounded in
                data.
              </p>
            </article>
            <article className="card t-item reveal">
              <span className="chip">Chapter 03</span>
              <h3>Where I am now</h3>
              <p>
                Today I have hands-on experience as a Full-Stack Web2/Web3 and System Developer for
                professional industry. What started as watching tutorials and taking notes has
                turned into shipping software that real teams and real production floors rely on.
              </p>
              <p>
                As a Front End Web Developer Intern at Minilemon Technology, I translated UI/UX
                designs into responsive interfaces, integrated APIs, and adapted the application
                through a backend migration from Convex to Prisma ORM. As a System Developer Intern
                at PT. Exedy Prima Indonesia, I built a Clutch Disc Production Monitoring Dashboard,
                a Production Monitoring & Control (PMC) System, and a Production Report System
                integrated with Microsoft SQL Server.
              </p>
              <p>
                Alongside that, I build Web3 products — DeFi interfaces on Robinhood Chain and
                transaction tooling for autonomous agents on Solana — and turn raw data into
                dashboards that support decision-making. I’m now focusing on Information Systems
                Management and Digital Humanism: building systems that address organizational needs
                while keeping the people who use them at the center.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Experience</span>
              <h2>
                Where I’ve <span className="grad">worked</span>
              </h2>
            </div>
            <p>
              Hands-on experience across the software development lifecycle, from requirements
              analysis to deployment and data visualization.
            </p>
          </div>
          <div className="timeline">
            <article className="card t-item reveal">
              <span className="chip">March 2026 – July 2026 · Surabaya</span>
              <h3>System Developer Intern</h3>
              <p className="org">PT. Exedy Prima Indonesia</p>
              <ul className="checks">
                <li>
                  Developed a Clutch Disc Production Monitoring Dashboard to provide real-time
                  production data visualization and support operational monitoring.
                </li>
                <li>
                  Built a Production Monitoring & Control (PMC) System to streamline production
                  monitoring, control processes, and production data management.
                </li>
                <li>
                  Developed a Production Report System to digitize production recording and
                  reporting processes, improving efficiency and data organization.
                </li>
                <li>
                  Integrated web applications with Microsoft SQL Server databases to ensure accurate
                  data management and reporting.
                </li>
                <li>
                  Implemented new features based on business requirements while maintaining,
                  optimizing, and enhancing existing systems.
                </li>
              </ul>
            </article>
            <article className="card t-item reveal">
              <span className="chip">July 2025 – April 2026 · Surabaya</span>
              <h3>Front End Web Developer Intern</h3>
              <p className="org">Minilemon Technology</p>
              <ul className="checks">
                <li>
                  Translated UI/UX designs into responsive and consistent frontend interfaces
                  aligned with the established design system.
                </li>
                <li>
                  Applied modern frontend development workflows using Git and GitHub, including
                  branching, pull requests, and merge conflict resolution.
                </li>
                <li>
                  Integrated APIs and adapted the application to backend architecture migration from
                  Convex to Prisma ORM.
                </li>
                <li>
                  Contributed to the development of UI guidelines and responsive design
                  documentation.
                </li>
                <li>
                  Resolved UI bugs, improved design consistency, and enhanced overall user interface
                  quality.
                </li>
                <li>
                  Collaborated closely with UI/UX designers and backend developers in a
                  cross-functional team environment.
                </li>
              </ul>
            </article>
          </div>
          <div className="two" style={{ marginTop: "22px" }}>
            <article className="card edu reveal">
              <div className="ico">
                <Icon name="cap" />
              </div>
              <span className="chip">August 2023 – Now · Surabaya</span>
              <h3>State University of Surabaya</h3>
              <p className="org">Information System · GPA 3.83 / 4.00</p>
              <p>
                Developed competencies in web development, business requirements analysis,
                implementation testing, computer networking, information systems management, IT
                service management, and IT risk management. Currently focusing on Information
                Systems Management, with a particular interest in leveraging data to support
                decision-making and improve organizational performance.
              </p>
            </article>
            <article className="card edu reveal" style={delay(1)}>
              <div className="ico">
                <Icon name="award" />
              </div>
              <span className="chip">Certification · 2025</span>
              <h3>Celerates Acceleration Mastery Program (CAMP)</h3>
              <p className="org">Data Analyst & Business Intelligence · Batch 3</p>
              <p>
                An intensive MBKM Independent Study program covering data cleaning, data
                transformation, ETL processes, data warehousing, and data visualization — with
                practical work in business-oriented data analysis and interactive dashboard
                development.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Toolbox</span>
              <h2>
                My skills & <span className="grad">software</span>
              </h2>
            </div>
            <p>The tools and technologies I use to analyze, design, build, test, and visualize.</p>
          </div>
          <SkillsGrid />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
