"use client";

import { useEffect, useState } from "react";

const instagram = "https://www.instagram.com/narjisadelbeauty/";
const email = "mailto:narjisadelbeauty@gmail.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`header ${menuOpen ? "menu-open" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <strong>NARJIS ADEL</strong>
          <span>BEAUTY</span>
        </a>

        <nav className="desktop-nav">
          <a href="#artistry">Artistry</a>
          <a href="#bridal">Bridal</a>
          <a href="#events">Events</a>
          <a href="#editorial">Editorial</a>
          <a href="#about">About</a>
        </nav>

        <a className="header-enquire" href={email}>
          ENQUIRE <span>↗</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? "active" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <div className="mobile-menu-top">
            <span>NARJIS ADEL BEAUTY</span>
            <span>SYDNEY · AU</span>
          </div>

          <nav>
            <a href="#artistry" onClick={closeMenu}>
              <small>01</small> Artistry
            </a>
            <a href="#bridal" onClick={closeMenu}>
              <small>02</small> Bridal
            </a>
            <a href="#events" onClick={closeMenu}>
              <small>03</small> Events
            </a>
            <a href="#editorial" onClick={closeMenu}>
              <small>04</small> Editorial
            </a>
            <a href="#about" onClick={closeMenu}>
              <small>05</small> About
            </a>
          </nav>

          <div className="mobile-contact">
            <a href={email} onClick={closeMenu}>
              EMAIL ↗
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              INSTAGRAM ↗
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-side hero-side-left">
          <span>SYDNEY</span>
          <i />
          <span>MAKEUP ARTIST</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">BRIDAL · EVENTS · EDITORIAL</p>

          <h1>
            Beauty,
            <br />
            <em>considered.</em>
          </h1>

          <p className="hero-intro">
            Makeup artistry by Narjis Adel, created for the moments that call
            for something beautifully considered.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href={email}>
              BOOKING ENQUIRY <span>↗</span>
            </a>

            <a
              className="text-link"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              VIEW INSTAGRAM <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="portrait-frame">
            <div className="portrait-hair hair-a" />
            <div className="portrait-hair hair-b" />

            <div className="portrait-face">
              <div className="portrait-brow brow-a" />
              <div className="portrait-brow brow-b" />

              <div className="portrait-eye eye-a">
                <i />
              </div>

              <div className="portrait-eye eye-b">
                <i />
              </div>

              <div className="portrait-nose" />
              <div className="portrait-lips" />
            </div>

            <div className="gold-ring ring-a" />
            <div className="gold-ring ring-b" />

            <span className="portrait-index">N / 01</span>
          </div>

          <p className="visual-caption">
            NARJIS ADEL
            <span>BEAUTY / SYDNEY</span>
          </p>
        </div>

        <div className="hero-side hero-side-right">
          <span>ESTHETIC</span>
          <i />
          <span>ARTISTRY</span>
        </div>
      </section>

      <section className="manifesto" id="artistry">
        <div className="manifesto-label">
          <span>01</span>
          <p>THE APPROACH</p>
        </div>

        <div className="manifesto-copy">
          <p className="manifesto-small">MAKEUP / BEAUTY / EXPRESSION</p>

          <h2>
            A look should
            <br />
            feel like <em>you</em> —
            <br />
            only elevated.
          </h2>

          <div className="manifesto-footer">
            <p>
              Whether the occasion is bridal, an event or an editorial moment,
              the starting point is always the same: the person wearing the
              makeup.
            </p>

            <span className="signature">N</span>
          </div>
        </div>
      </section>

      <section className="services-intro">
        <p>THE EDIT / 2026</p>

        <h2>
          THREE
          <br />
          <em>directions.</em>
        </h2>

        <div className="services-intro-note">
          <span>01 — 03</span>
          <p>
            Different occasions. Different energy. One considered approach to
            beauty.
          </p>
        </div>
      </section>

      <section className="service-feature bridal" id="bridal">
        <div className="service-art bridal-art" aria-hidden="true">
          <span className="service-number">01</span>

          <div className="veil veil-one" />
          <div className="veil veil-two" />

          <div className="bridal-face">
            <div className="minimal-eye left" />
            <div className="minimal-eye right" />
            <div className="minimal-lips" />
          </div>

          <span className="art-word">BRIDE</span>
        </div>

        <div className="service-copy">
          <div className="service-meta">
            <span>01 / BRIDAL</span>
            <span>SYDNEY</span>
          </div>

          <h2>
            For the
            <br />
            <em>aisle.</em>
          </h2>

          <p className="service-lead">
            Bridal makeup with space for your own style, your features and the
            feeling you want to carry into the day.
          </p>

          <p className="service-body">
            From softly polished beauty to a more defined finish, the look can
            be shaped around your vision for the occasion.
          </p>

          <a href={email} className="line-link">
            BRIDAL ENQUIRIES <span>↗</span>
          </a>
        </div>
      </section>

      <section className="service-feature events" id="events">
        <div className="service-copy">
          <div className="service-meta">
            <span>02 / EVENTS</span>
            <span>SYDNEY</span>
          </div>

          <h2>
            Your plans.
            <br />
            Your <em>moment.</em>
          </h2>

          <p className="service-lead">
            Event makeup designed around the occasion and the way you want to
            show up in it.
          </p>

          <p className="service-body">
            Bring the outfit, the inspiration and the mood. The beauty look
            brings those details together.
          </p>

          <a href={email} className="line-link">
            EVENT ENQUIRIES <span>↗</span>
          </a>
        </div>

        <div className="service-art event-art" aria-hidden="true">
          <span className="service-number">02</span>

          <div className="event-eye">
            <span />
          </div>

          <div className="event-star star-one">✦</div>
          <div className="event-star star-two">✦</div>

          <span className="event-script">after dark</span>
        </div>
      </section>

      <section className="editorial-section" id="editorial">
        <div className="editorial-heading">
          <div>
            <p>03 / EDITORIAL</p>
            <h2>
              Beauty as
              <br />
              <em>expression.</em>
            </h2>
          </div>

          <p className="editorial-description">
            Editorial makeup opens the door to a more directional beauty
            language — created around the concept, styling and visual mood.
          </p>
        </div>

        <div className="editorial-canvas" aria-hidden="true">
          <div className="canvas-label">
            <span>NARJIS ADEL BEAUTY</span>
            <span>EDITORIAL / 03</span>
          </div>

          <div className="abstract-face face-one">
            <div className="abstract-eye" />
            <div className="abstract-mouth" />
          </div>

          <div className="abstract-face face-two">
            <div className="abstract-eye" />
            <div className="abstract-mouth" />
          </div>

          <div className="editorial-circle" />

          <strong>FORM</strong>
          <em>meets beauty</em>
        </div>
      </section>

      <section className="experience">
        <div className="experience-heading">
          <span>04 / THE EXPERIENCE</span>
          <h2>
            From idea
            <br />
            to <em>final look.</em>
          </h2>
        </div>

        <div className="experience-list">
          <article>
            <span>01</span>
            <h3>THE OCCASION</h3>
            <p>
              Start with where you&apos;re going and how you want the finished
              look to feel.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>THE DIRECTION</h3>
            <p>
              Share the beauty references, styling and details that are shaping
              your vision.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>THE ARTISTRY</h3>
            <p>
              The makeup comes together as one considered look designed around
              you.
            </p>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-visual" aria-hidden="true">
          <div className="about-card">
            <span className="about-index">N / A</span>

            <div className="profile">
              <div className="profile-hair" />
              <div className="profile-face" />
              <div className="profile-neck" />
              <div className="profile-body" />
            </div>

            <span className="about-letter">N</span>
          </div>

          <div className="about-caption">
            <span>THE ARTIST</span>
            <span>SYDNEY, NSW</span>
          </div>
        </div>

        <div className="about-copy">
          <p className="section-kicker">05 / NARJIS ADEL</p>

          <h2>
            Meet
            <br />
            <em>Narjis.</em>
          </h2>

          <p className="about-lead">
            The makeup artist behind Narjis Adel Beauty in Sydney.
          </p>

          <p className="about-body">
            Her work spans bridal, event and editorial makeup, with each
            booking beginning with the individual look and occasion in mind.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="line-link"
          >
            EXPLORE THE ARTISTRY <span>↗</span>
          </a>
        </div>
      </section>

      <section className="instagram-section">
        <div className="instagram-top">
          <span>06 / THE JOURNAL</span>
          <span>@NARJISADELBEAUTY</span>
        </div>

        <div className="instagram-title">
          <h2>
            Latest
            <br />
            <em>beauty.</em>
          </h2>

          <a href={instagram} target="_blank" rel="noreferrer">
            FOLLOW ON INSTAGRAM <span>↗</span>
          </a>
        </div>

        <div className="journal-grid" aria-hidden="true">
          <div className="journal-card journal-one">
            <span>BRIDAL</span>
            <div className="journal-line-art" />
          </div>

          <div className="journal-card journal-two">
            <span>EVENT</span>
            <strong>N</strong>
          </div>

          <div className="journal-card journal-three">
            <span>EDITORIAL</span>
            <div className="journal-lips" />
          </div>
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking-meta">
          <span>07 / BOOKINGS</span>
          <span>SYDNEY · NSW</span>
        </div>

        <div className="booking-copy">
          <p>NOW TAKING BOOKINGS</p>

          <h2>
            Your date.
            <br />
            Your look.
            <br />
            <em>Let&apos;s talk.</em>
          </h2>
        </div>

        <div className="booking-bottom">
          <p>
            For bridal, event or editorial booking enquiries, contact Narjis by
            email or Instagram.
          </p>

          <div className="booking-actions">
            <a href={email}>
              EMAIL NARJIS <span>↗</span>
            </a>

            <a href={instagram} target="_blank" rel="noreferrer">
              INSTAGRAM <span>↗</span>
            </a>
          </div>
        </div>

        <a href={email} className="booking-email">
          narjisadelbeauty@gmail.com
        </a>
      </section>

      <footer>
        <a href="#home" className="footer-logo">
          <strong>NARJIS ADEL</strong>
          <em>Beauty</em>
        </a>

        <p>BRIDAL · EVENTS · EDITORIAL · SYDNEY</p>

        <div>
          <a href={email}>EMAIL</a>
          <a href={instagram} target="_blank" rel="noreferrer">
            INSTAGRAM
          </a>
        </div>
      </footer>
    </main>
  );
}