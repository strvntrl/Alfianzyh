import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import CtaSection from "@/components/CtaSection";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import ProjectGrid from "@/components/ProjectGrid";
import Socials from "@/components/Socials";
import TechMarquee from "@/components/TechMarquee";
import Typed from "@/components/Typed";
import { projects } from "@/data/projects";
import { delay } from "@/lib/delay";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="status reveal">
              <i></i>Undergraduate Student of Information Systems
            </div>
            <h1 className="reveal" style={delay(1)}>
              <small>Hello there, I’m</small>Muhammad <span className="grad">Alfiansyah</span>
            </h1>
            <div className="typed-line reveal" style={delay(2)}>
              <Typed
                words={[
                  "Full-Stack Web2 & Web3 Developer",
                  "System Developer",
                  "Data Analyst & Business Intelligence",
                  "Information Systems Management",
                ]}
              />
            </div>
            <p className="lead reveal" style={delay(3)}>
              Full-Stack Web2, Web3, & System Developer · Data Analyst & Business Intelligence ·
              Information Systems Management & Digital Humanism.
            </p>
            <div className="hero-cta reveal" style={delay(4)}>
              <Link href="/contact" className="btn btn-primary">
                Get in touch <Icon name="arrow" />
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                View my work
              </Link>
            </div>
            <div className="reveal" style={delay(5)}>
              <Socials label="Find me" />
            </div>
          </div>
          <div className="portrait reveal zoom" style={delay(2)}>
            <div className="halo"></div>
            <div className="ring"></div>
            <Image
              src="/img/opt/pp.webp"
              alt="Portrait of Muhammad Alfiansyah"
              width={900}
              height={1026}
              priority
            />
            <div className="float-chip c1">
              <Logo id="i-react" color="#61DAFB" />
              <Logo id="i-nextdotjs" /> Full-Stack Web
            </div>
            <div className="float-chip c2">
              <Logo id="i-tableau" color="#E97627" /> Data & BI
            </div>
            <div className="float-chip c3">
              <Logo id="i-solana" color="#9945FF" /> Web3
            </div>
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true"></div>
      </section>
      <TechMarquee />
      <section id="services">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">What I do</span>
              <h2>
                What I can <span className="grad">do for you</span>
              </h2>
            </div>
            <p>From web2 and web3 applications to production systems and business dashboards.</p>
          </div>
          <div className="bento">
            <article className="card service reveal" style={delay(0)}>
              <span className="num">01</span>
              <div className="ico">
                <Icon name="code" />
              </div>
              <h3>Full-Stack Web Development</h3>
              <p>
                I build responsive web applications across the software development lifecycle — from
                requirements analysis and system design to implementation, testing, and deployment —
                using React.js, Next.js, Tailwind CSS, PHP, and Laravel.
              </p>
            </article>
            <article className="card service reveal" style={delay(1)}>
              <span className="num">02</span>
              <div className="ico">
                <Icon name="cube" />
              </div>
              <h3>Web3 Development</h3>
              <p>
                I build Web3 products end to end — Solidity and Rust/Anchor smart contracts, wallet
                flows with viem, wagmi and Solana web3.js, and DeFi interfaces on Robinhood Chain
                and Solana.
              </p>
            </article>
            <article className="card service reveal" style={delay(2)}>
              <span className="num">03</span>
              <div className="ico">
                <Icon name="server" />
              </div>
              <h3>System Development</h3>
              <p>
                I develop web-based business applications such as production monitoring, control,
                and reporting systems integrated with company databases.
              </p>
            </article>
            <article className="card service reveal" style={delay(3)}>
              <span className="num">04</span>
              <div className="ico">
                <Icon name="chart" />
              </div>
              <h3>Data Analysis & Business Intelligence</h3>
              <p>
                I clean, validate, and explore data, run ETL processes, and build interactive
                dashboards in Tableau and Power BI that turn data into business insights and support
                data-driven decision-making.
              </p>
            </article>
          </div>
          <div className="stats">
            <div className="card stat reveal">
              <strong>
                <Counter value={18} />
              </strong>
              <span>Projects in my portfolio</span>
            </div>
            <div className="card stat reveal" style={delay(1)}>
              <strong>
                <Counter value={2} />
              </strong>
              <span>Industry internships</span>
            </div>
            <div className="card stat reveal" style={delay(2)}>
              <strong>
                3.83<sup>/4.00</sup>
              </strong>
              <span>GPA, Information System</span>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container split">
          <div className="photo-frame reveal left">
            <Image
              src="/img/opt/profile4.webp"
              alt="Muhammad Alfiansyah sitting, wearing a white polo"
              width={1000}
              height={990}
            />
            <div className="badge">
              <Icon name="cap" className="line-ico" />
              <span>
                Information System<small>State University of Surabaya</small>
              </span>
            </div>
          </div>
          <div className="reveal right">
            <span className="eyebrow">About me</span>
            <h2>
              Systems, data & <span className="grad">people</span>
            </h2>
            <p>
              Information Systems undergraduate with hands-on experience in developing web-based
              business applications, production monitoring systems, and data-driven solutions.
            </p>
            <p>
              Experienced throughout the software development lifecycle, and passionate about
              developing scalable information systems that address organizational needs.
            </p>
            <Link href="/about" className="btn btn-ghost">
              More about me <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>
                Take a look at my <span className="grad">portfolio</span>
              </h2>
            </div>
            <Link href="/portfolio" className="btn btn-ghost">
              All {projects.length} projects <Icon name="arrow" />
            </Link>
          </div>
          <ProjectGrid limit={6} />
        </div>
      </section>
      <section className="process" id="process">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">How I work</span>
              <h2>
                From requirements to <span className="grad">results</span>
              </h2>
            </div>
            <p>
              I work across the whole software development lifecycle — every project moves through
              the same five steps.
            </p>
          </div>
          <ol className="steps">
            <li className="card step reveal" style={delay(0)}>
              <div className="step-top">
                <span className="ico">
                  <Icon name="search" />
                </span>
                <span className="step-no">01</span>
              </div>
              <span className="step-tag">Analyze</span>
              <h3>Requirements analysis</h3>
              <p>
                I start from the business need: gathering requirements and writing them down as a
                Software Requirements Specification (SRS).
              </p>
            </li>
            <li className="card step reveal" style={delay(1)}>
              <div className="step-top">
                <span className="ico">
                  <Icon name="flow" />
                </span>
                <span className="step-no">02</span>
              </div>
              <span className="step-tag">Design</span>
              <h3>System design</h3>
              <p>
                I model the system with UML — use case, activity, and sequence diagrams — and shape
                the interface before any code is written.
              </p>
            </li>
            <li className="card step reveal" style={delay(2)}>
              <div className="step-top">
                <span className="ico">
                  <Icon name="code" />
                </span>
                <span className="step-no">03</span>
              </div>
              <span className="step-tag">Build</span>
              <h3>Implementation</h3>
              <p>
                I implement responsive interfaces and application logic, integrate APIs and
                databases, and work with Git-based workflows.
              </p>
            </li>
            <li className="card step reveal" style={delay(3)}>
              <div className="step-top">
                <span className="ico">
                  <Icon name="check" />
                </span>
                <span className="step-no">04</span>
              </div>
              <span className="step-tag">Test</span>
              <h3>Software testing</h3>
              <p>
                I prepare test scenarios and test cases, run black box and white box testing, and
                document every bug that comes up.
              </p>
            </li>
            <li className="card step reveal" style={delay(4)}>
              <div className="step-top">
                <span className="ico">
                  <Icon name="trend" />
                </span>
                <span className="step-no">05</span>
              </div>
              <span className="step-tag">Deliver</span>
              <h3>Deployment & insight</h3>
              <p>
                I deploy the system, keep maintaining and improving it, and turn its data into
                dashboards that support decision-making.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
