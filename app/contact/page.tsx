import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Icon from "@/components/Icon";
import { delay } from "@/lib/delay";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow reveal">Contact me</span>
          <h1 className="reveal" style={delay(1)}>
            Let’s build something <span className="grad">great</span>
          </h1>
          <p className="reveal" style={delay(2)}>
            Have a project in mind or just want to say hi? I'm always open to collaborations,
            freelance opportunities, or creative discussions. Feel free to reach out anytime!
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "20px" }}>
        <div className="container contact-grid">
          <div className="info">
            <a className="card reveal" href="mailto:muhammad.alfiansyah2805@gmail.com">
              <span className="ico">
                <Icon name="mail" />
              </span>
              <span>
                <small>Email</small>
                <strong>muhammad.alfiansyah2805@gmail.com</strong>
              </span>
            </a>
            <a
              className="card reveal"
              style={delay(1)}
              href="https://www.linkedin.com/in/muhalfisyah"
              target="_blank"
              rel="noopener"
            >
              <span className="ico">
                <Icon name="linkedin" />
              </span>
              <span>
                <small>LinkedIn</small>
                <strong>/in/muhalfisyah</strong>
              </span>
            </a>
            <a
              className="card reveal"
              style={delay(2)}
              href="https://github.com/strvntrl"
              target="_blank"
              rel="noopener"
            >
              <span className="ico">
                <Icon name="github" />
              </span>
              <span>
                <small>GitHub</small>
                <strong>@strvntrl</strong>
              </span>
            </a>
            <a
              className="card reveal"
              style={delay(3)}
              href="https://www.instagram.com/alfianzyh"
              target="_blank"
              rel="noopener"
            >
              <span className="ico">
                <Icon name="instagram" />
              </span>
              <span>
                <small>Instagram</small>
                <strong>@alfianzyh</strong>
              </span>
            </a>
            <div className="card reveal" style={delay(4)}>
              <span className="ico">
                <Icon name="pin" />
              </span>
              <span>
                <small>Based in</small>
                <strong>Surabaya, Indonesia</strong>
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section>
        <div className="container">
          <div
            className="section-head reveal"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <div>
              <span className="eyebrow">FAQ</span>
              <h2>
                Frequently Asked <span className="grad">Questions</span>
              </h2>
            </div>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}
