import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <main className="container about-page">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / About
        </div>

        <section className="about-header modern-about-header">
          <div className="about-header-copy">
            <span className="eyebrow">About the project</span>
            <h1>About WrongHow</h1>
            <p>
              The internet's questionable guide to absolutely anything.
            </p>
          </div>

          <div className="about-spotlight">
            <strong>WrongHow</strong>
            <span>Unnecessarily useful advice</span>
          </div>
        </section>

        <section className="about-content modern-about-content">
          <div className="info-card">
            <h2>What is WrongHow?</h2>
            <p>
              WrongHow is a collection of questionable guides, unnecessary
              instructions, and completely ridiculous solutions to everyday
              situations.
            </p>
          </div>

          <div className="info-grid">
            <article className="info-card">
              <h2>Owner's Word</h2>
              <p>
                Hello, I'm Izac, the person behind WrongHow. I created this
                website to provide answers to life's many questions, regardless
                of whether those answers are useful, accurate, or even remotely
                sensible.
              </p>
              <p>
                Whether you need advice on something simple or want to learn
                something that probably shouldn't need explaining, we've got a
                guide for it.
              </p>
            </article>

            <article className="info-card">
              <h2>Our Mission</h2>
              <p>
                To make learning unnecessarily complicated, one questionable
                guide at a time.
              </p>
            </article>
          </div>

          <div className="info-card warning-card">
            <h2>A Word of Warning</h2>
            <p>
              Our guides are made for entertainment. Just because there's a
              guide doesn't mean you should follow it.
            </p>
            <p>
              Please remember that WrongHow is a work in progress. Some images
              may be placeholders, some guides may be questionable, and
              absolutely none of this should be taken too seriously.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
