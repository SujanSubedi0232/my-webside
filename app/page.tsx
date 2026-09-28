"use client";

import { FormEvent, useState } from "react";
import {
  additionalSkills,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
  teachingSkills,
} from "@/lib/data";

const nav = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main>
      <nav className="navbar" aria-label="Primary navigation">
        <div className="container nav-content">
          <a href="#home" className="logo">
            Sujan<span>.</span>
          </a>

          <div id="nav-menu" className={`nav-links ${menu ? "show-menu" : ""}`}>
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>
                {item}
              </a>
            ))}
            <a href={profile.cv} download>
              Download CV
            </a>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenu((prev) => !prev)}
            aria-expanded={menu}
            aria-controls="nav-menu"
            aria-label={menu ? "Close menu" : "Open menu"}
          >
            ☰
          </button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="small-title">HELLO, I&apos;M</p>
            <h1>
              Sujan <span>Subedi</span>
            </h1>
            <h2>Computer Teacher | Front-End Developer</h2>
            <p className="hero-description">{profile.summary}</p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-circle">
              <img src="/profile-photo.svg" alt="Sujan Subedi portrait" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <p className="section-label">ABOUT ME</p>
          <h2 className="section-title">
            I build <span>digital experiences</span> with clarity and purpose.
          </h2>

          <div className="about-grid">
            <div>
              <p>{profile.about}</p>
            </div>

            <div className="about-cards">
              <div className="info-card">
                <div className="card-icon">🎓</div>
                <h3>Teaching</h3>
                <p>Practical computer science education with clear, student-friendly guidance.</p>
              </div>
              <div className="info-card">
                <div className="card-icon">💻</div>
                <h3>Programming</h3>
                <p>Python, JavaScript, TypeScript, and React.js for modern solutions.</p>
              </div>
              <div className="info-card">
                <div className="card-icon">🌐</div>
                <h3>Web Development</h3>
                <p>Responsive, user-friendly web applications built for real-world use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <p className="section-label">SKILLS</p>
          <h2 className="section-title">What I <span>work with</span></h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <strong>{group.title}</strong>
                <p>{group.items.join(" • ")}</p>
              </article>
            ))}
          </div>

          <div className="skill-groups">
            <div>
              <h3>Teaching skills</h3>
              <p>{teachingSkills.join(" • ")}</p>
            </div>
            <div>
              <h3>Additional strengths</h3>
              <p>{additionalSkills.join(" • ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <p className="section-label">WORK EXPERIENCE</p>
          <h2 className="section-title">My <span>experience</span></h2>

          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={item.role + item.organization}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-date">{item.period}</span>
                  <h3>{item.role}</h3>
                  <h4>
                    {item.organization}
                    {item.location ? ` · ${item.location}` : ""}
                  </h4>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <p className="section-label">SELECTED PROJECTS</p>
          <h2 className="section-title">Projects with <span>purpose</span></h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-number">0{index + 1}</div>
                <p className="project-type">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <p className="section-label">EDUCATION</p>
          <h2 className="section-title">My <span>foundation</span></h2>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <div className="education-icon">✦</div>
                <p className="project-type">{item.short || "HIGHER SECONDARY EDUCATION"}</p>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact-container">
          <div>
            <p className="section-label">CONTACT</p>
            <h2 className="section-title">Let&apos;s build <span>something useful</span></h2>
            <p>
              Have a project, teaching opportunity, or collaboration in mind? I&apos;d love to hear from you.
            </p>

            <div className="contact-info">
              <a href={`mailto:${profile.email}`}>Email: {profile.email}</a>
              <a href={`tel:${profile.phone}`}>Phone: {profile.phone}</a>
              <span>Location: {profile.location}</span>
            </div>

            <div className="contact-buttons">
              <a href={`mailto:${profile.email}`} className="primary-btn">
                Email Me
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-btn">
                GitHub
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <label htmlFor="contact-name">
              Name
              <input id="contact-name" name="name" autoComplete="name" required />
            </label>
            <label htmlFor="contact-email">
              Email
              <input id="contact-email" type="email" name="email" autoComplete="email" required />
            </label>
            <label htmlFor="contact-message">
              Message
              <textarea id="contact-message" name="message" rows={5} required />
            </label>
            <button type="submit" className="primary-btn">
              {sent ? "Open email draft" : "Send Message"}
            </button>
            {sent && <p className="success" role="status">Your email draft is ready.</p>}
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div>
            <a href="#home" className="logo">
              Sujan<span>.</span>
            </a>
            <p>© 2026 Sujan Subedi</p>
          </div>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
        <div className="copyright">Built with care for learning and development.</div>
      </footer>
    </main>
  );
}
