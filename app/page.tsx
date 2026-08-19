"use client";

import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useState,
} from "react";

const projects = [
  {
    index: "01",
    name: "DavMar",
    label: "Full-stack platform",
    role: "Full-Stack Developer",
    stack: ["Next.js", "Express", "PostgreSQL", "WebSocket", "i18n"],
    link: "https://davmar.am/am",
    accent: "#ff725c",
    mark: "DM",
    kind: "portal",
  },
  {
    index: "02",
    name: "Alllocal",
    label: "Telegram Mini App",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "SWR", "WebSocket", "Telegram"],
    link: "https://t.me/Alllocal_bot",
    accent: "#c8ff5d",
    mark: "AL",
    kind: "mobile",
  },
  {
    index: "03",
    name: "inwis",
    label: "Data-rich product UI",
    role: "Frontend Developer",
    stack: ["Vue", "Vuex", "ApexCharts", "Vue i18n", "SCSS"],
    link: "https://inwis.ru/",
    accent: "#8a7dff",
    mark: "IW",
    kind: "data",
  },
  {
    index: "04",
    name: "UZDIGITAL TV",
    label: "Media product",
    role: "Frontend Developer",
    stack: ["React", "Vite", "TypeScript", "Redux Toolkit", "Chakra UI"],
    link: "https://t.me/uzdigital_tv_bot/app",
    accent: "#70d6ff",
    mark: "TV",
    kind: "media",
  },
  {
    index: "05",
    name: "ProfShin",
    label: "Full-stack web product",
    role: "Full-Stack Developer",
    stack: ["Laravel", "MySQL", "Blade", "JavaScript", "Bootstrap"],
    link: "https://profshin.am/",
    accent: "#ffd66b",
    mark: "PS",
    kind: "commerce",
  },
  {
    index: "06",
    name: "Ladoga 2035",
    label: "Map-enabled platform",
    role: "Frontend Developer",
    stack: ["Next.js", "TanStack", "Zustand", "Zod", "Yandex Maps 3"],
    link: "https://ladoga2035.ru/",
    accent: "#f0a8ce",
    mark: "L35",
    kind: "map",
  },
];

const expertise = [
  {
    number: "01",
    title: "Product UI",
    copy: "Interfaces with clear hierarchy, resilient states, and the small interactions that make a product feel considered.",
    tools: ["React / Next.js", "Vue / Nuxt", "TypeScript", "Tailwind / SCSS"],
  },
  {
    number: "02",
    title: "Application logic",
    copy: "Maintainable frontend architecture, typed data flows, real-time features, forms, validation, and internationalization.",
    tools: ["TanStack / SWR", "Zustand / Pinia", "WebSocket", "Zod / Yup"],
  },
  {
    number: "03",
    title: "Backend & data",
    copy: "APIs and server-side systems that connect the interface to reliable business logic and structured data.",
    tools: ["Node / Nest / Express", "Laravel", "PostgreSQL / MySQL", "Docker / CI/CD"],
  },
];

const experience = [
  {
    company: "Digitalize",
    period: "2024 — Now",
    role: "Full-Stack Developer",
    note: "Building frontend and backend across product teams with Next.js, Vue, Nuxt, Node.js and NestJS.",
    work: "CTSoft · TLOA · Shaomacao · Alllocal · DavMar · inwis + more",
  },
  {
    company: "CodeLines",
    period: "2024",
    role: "Full-Stack Developer",
    note: "Delivered React applications and Laravel / NestJS systems for media, admin and web products.",
    work: "ProfShin · UZDIGITAL TV · UZTELECOM MyHit · TRODAT Admin",
  },
  {
    company: "BeeOnCode",
    period: "2023 — 2024",
    role: "Frontend Developer",
    note: "Built production interfaces and full-stack experiences across hospitality, furniture and healthcare products.",
    work: "LAG · Tumanyan Shaurma · KARAS · Danielyan Furniture · SKAMED · SGP",
  },
];

const projectArchive = [
  {
    company: "Digitalize",
    period: "2024 — Present",
    projects: [
      {
        name: "CTSoft",
        role: "Full-Stack Developer",
        stack: ["Vue", "Nuxt 4", "Tailwind CSS", "Node.js", "NestJS", "Element Plus", "TypeScript"],
        link: "https://nationalsolutions.ru/",
      },
      {
        name: "TLOA",
        role: "Frontend Developer",
        stack: ["Vue", "Tailwind CSS", "TypeScript", "Mobile app"],
        link: null,
      },
      {
        name: "Shaomacao",
        role: "Frontend Developer",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
        link: "https://shaomacao.com/",
      },
      {
        name: "Coding Team",
        role: "Frontend Developer",
        stack: ["Next.js", "TypeScript", "SCSS", "Radix UI"],
        link: "https://codingteam.ru/",
      },
      {
        name: "EI",
        role: "Frontend Developer",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "shadcn/ui", "Zustand", "Zod"],
        link: "http://24ei.ru/",
      },
      {
        name: "Cosmobox",
        role: "Frontend Developer",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        link: null,
      },
      {
        name: "Technolab",
        role: "Frontend Developer",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "shadcn/ui", "Zustand"],
        link: "https://technolab.ru/",
      },
      {
        name: "Olympmanevich",
        role: "Frontend Developer",
        stack: ["Vue", "TypeScript", "Tailwind CSS", "Axios", "Zod", "Pinia", "TanStack", "shadcn/ui"],
        link: "https://olympmanevich.ru/",
      },
    ],
  },
  {
    company: "CodeLines",
    period: "2024",
    projects: [
      {
        name: "UZTELECOM MyHit",
        role: "Frontend Developer",
        stack: ["React (CRA)", "Redux", "i18n", "Axios", "CSS"],
        link: "https://myhit.uztelecom.uz/",
      },
      {
        name: "TRODAT ADMIN",
        role: "Full-Stack Developer",
        stack: ["React", "Vite", "TypeScript", "Ant Design", "Axios", "NestJS"],
        link: null,
      },
    ],
  },
  {
    company: "BeeOnCode",
    period: "2023 — 2024",
    projects: [
      {
        name: "LAG",
        role: "Frontend Developer",
        stack: ["Next.js", "Tailwind CSS", "i18n", "Swiper", "Axios"],
        link: "https://lag.am/",
      },
      {
        name: "Tumanyan Shaurma",
        role: "Full-Stack Developer",
        stack: ["Next.js", "CSS", "i18n", "Swiper", "Axios", "WebSocket"],
        link: "https://tshaurma.com/am",
      },
      {
        name: "KARAS",
        role: "Full-Stack Developer",
        stack: ["WebSocket", "Total.js", "CSS", "Bootstrap", "jQuery", "AngularJS", "AJAX"],
        link: "https://www.karas.am/hy/",
      },
      {
        name: "Danielyan Furniture",
        role: "Frontend Developer",
        stack: ["Next.js", "CSS", "i18n", "Owl Carousel", "Axios"],
        link: "https://danielyanfurniture.com/",
      },
      {
        name: "SKAMED",
        role: "Frontend Developer",
        stack: ["Next.js", "Tailwind CSS", "i18n", "Owl Carousel", "Axios"],
        link: "https://www.skamed.com/",
      },
      {
        name: "SGP",
        role: "Frontend Developer",
        stack: ["Next.js", "Tailwind CSS", "i18n", "Swiper", "Axios"],
        link: "https://www.sgp.am/",
      },
    ],
  },
];

const projectCount = projects.length + projectArchive.reduce(
  (total, group) => total + group.projects.length,
  0,
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    const nav = document.querySelector<HTMLElement>(".site-nav");
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));

    let frame = 0;
    const updateScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        root.style.setProperty("--scroll-progress", `${max > 0 ? window.scrollY / max : 0}`);
        nav?.classList.toggle("is-scrolled", window.scrollY > 24);
        frame = 0;
      });
    };

    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const handleStackMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--stack-x", `${x * 18}px`);
    event.currentTarget.style.setProperty("--stack-y", `${y * 14}px`);
    event.currentTarget.style.setProperty("--stack-rotate-x", `${y * -5}deg`);
    event.currentTarget.style.setProperty("--stack-rotate-y", `${x * 7}deg`);
  };

  const resetStack = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--stack-x", "0px");
    event.currentTarget.style.setProperty("--stack-y", "0px");
    event.currentTarget.style.setProperty("--stack-rotate-x", "0deg");
    event.currentTarget.style.setProperty("--stack-rotate-y", "0deg");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell relative min-h-screen overflow-x-clip" id="top">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-nav">
        <div className="site-nav__inner">
          <a className="brand" href="#top" aria-label="Artem Martirosian, home">
            <span className="brand__mark">AM</span>
            <span className="brand__dot">.</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a href="#expertise">Expertise</a>
            <a href="#experience">Experience</a>
          </nav>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk <span>↗</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
          <nav aria-label="Mobile navigation">
            <a href="#work" onClick={closeMenu}><span>01</span> Work</a>
            <a href="#expertise" onClick={closeMenu}><span>02</span> Expertise</a>
            <a href="#experience" onClick={closeMenu}><span>03</span> Experience</a>
            <a href="#contact" onClick={closeMenu}><span>04</span> Contact</a>
          </nav>
          <p>Yerevan, Armenia · GMT+4</p>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow" data-reveal>
              <span className="live-dot" /> Frontend-first / Full-stack developer
            </p>
            <h1 id="hero-title" data-reveal style={{ "--delay": "80ms" } as CSSProperties}>
              <span>Frontend</span>
              <span className="hero__serif">instinct.</span>
              <span>Full-stack</span>
              <span className="hero__outline">reach.</span>
            </h1>
            <div className="hero__intro" data-reveal style={{ "--delay": "160ms" } as CSSProperties}>
              <p>
                I build fast, scalable digital products — from expressive interfaces
                to the APIs and data that keep them moving.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#work"><span>Explore selected work</span><b>↓</b></a>
                <a className="button button--ghost" href="mailto:artem.martirosian2001@gmail.com"><span>Start a conversation</span><b>↗</b></a>
              </div>
            </div>
          </div>

          <div
            className="stack-visual"
            data-reveal
            style={{ "--delay": "220ms" } as CSSProperties}
            onPointerMove={handleStackMove}
            onPointerLeave={resetStack}
            aria-label="A visual stack showing interface, application, and data layers"
          >
            <div className="stack-visual__topline"><span>One product signal</span><span>01 — 03</span></div>
            <div className="stack-layer stack-layer--interface">
              <span className="stack-layer__number">01</span>
              <div><small>Layer</small><strong>Interface</strong></div>
              <span className="stack-layer__status">Rendered</span>
            </div>
            <div className="stack-layer stack-layer--logic">
              <span className="stack-layer__number">02</span>
              <div><small>Layer</small><strong>Application</strong></div>
              <span className="stack-layer__status">Connected</span>
            </div>
            <div className="stack-layer stack-layer--data">
              <span className="stack-layer__number">03</span>
              <div><small>Layer</small><strong>Data</strong></div>
              <span className="stack-layer__status">Reliable</span>
            </div>
            <div className="signal-line" aria-hidden="true"><i /><i /><i /></div>
            <div className="stack-visual__coordinate">40.1776° N · 44.5126° E</div>
          </div>

          <div className="hero__metrics" data-reveal style={{ "--delay": "280ms" } as CSSProperties}>
            <div><strong>4+</strong><span>years shipping</span></div>
            <div><strong>{projectCount}</strong><span>products built</span></div>
            <div><strong>3</strong><span>engineering teams</span></div>
            <div className="hero__location"><span>Based in</span><strong>Yerevan, AM</strong></div>
          </div>
        </section>

        <div className="ticker" aria-label="Core technology stack">
          <div className="ticker__track">
            {[0, 1].map((copy) => (
              <div className="ticker__set" key={copy} aria-hidden={copy === 1}>
                <span>React</span><i>✦</i><span>Next.js</span><i>✦</i><span>Vue</span><i>✦</i>
                <span>Nuxt</span><i>✦</i><span>TypeScript</span><i>✦</i><span>Node.js</span><i>✦</i>
                <span>NestJS</span><i>✦</i><span>PostgreSQL</span><i>✦</i>
              </div>
            ))}
          </div>
        </div>

        <section className="work section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading" data-reveal>
            <div><span className="section-index">01 / Work</span><h2 id="work-title">Selected builds.</h2></div>
            <p>A cross-section of products built with React, Next.js, Vue, Node.js and Laravel.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, position) => (
              <a
                className={`project-card ${position === 0 || position === 3 ? "project-card--wide" : ""}`}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.name}
                data-reveal
                style={{ "--accent": project.accent, "--delay": `${(position % 2) * 80}ms` } as CSSProperties}
                aria-label={`${project.name}, ${project.label} — open live project`}
              >
                <div className="project-card__meta"><span>{project.index}</span><span>{project.label}</span></div>
                <div className={`project-card__visual visual--${project.kind}`} aria-hidden="true">
                  <span className="project-card__mark">{project.mark}</span>
                  <div className="project-ui">
                    <div className="project-ui__bar"><i /><i /><i /></div>
                    <div className="project-ui__content"><b /><b /><b /></div>
                  </div>
                  <div className="project-card__pulse" />
                </div>
                <div className="project-card__body">
                  <div><p>{project.role}</p><h3>{project.name}</h3></div>
                  <span className="project-card__arrow">↗</span>
                </div>
                <ul className="tag-list" aria-label="Technology stack">
                  {project.stack.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </a>
            ))}
          </div>

          <div className="project-archive" data-reveal>
            <div className="project-archive__intro">
              <div>
                <span className="section-index">Complete project archive</span>
                <h3>Every product.<br /><em>All {projectCount}.</em></h3>
              </div>
              <p>
                Six featured builds above, plus every additional product from my
                commercial experience — grouped by the teams behind the work.
              </p>
            </div>

            <div className="project-archive__groups">
              {projectArchive.map((group, groupIndex) => {
                const previousCount = projectArchive
                  .slice(0, groupIndex)
                  .reduce((total, item) => total + item.projects.length, projects.length);

                return (
                  <section className="project-group" key={group.company} aria-labelledby={`projects-${group.company.toLowerCase()}`}>
                    <header className="project-group__heading">
                      <h4 id={`projects-${group.company.toLowerCase()}`}>{group.company}</h4>
                      <span>{group.period}</span>
                    </header>
                    <div className="project-group__list">
                      {group.projects.map((project, projectIndex) => (
                        <article className="archive-project" key={project.name}>
                          <span className="archive-project__index">
                            {String(previousCount + projectIndex + 1).padStart(2, "0")}
                          </span>
                          <div className="archive-project__identity">
                            <h5>{project.name}</h5>
                            <p>{project.role}</p>
                          </div>
                          <ul className="archive-project__stack" aria-label={`${project.name} technology stack`}>
                            {project.stack.map((tool) => <li key={tool}>{tool}</li>)}
                          </ul>
                          {project.link ? (
                            <a
                              className="archive-project__link"
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Open ${project.name} project`}
                            >
                              View <span>↗</span>
                            </a>
                          ) : (
                            <span className="archive-project__private">Private</span>
                          )}
                        </article>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <section className="expertise section-pad" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading section-heading--light" data-reveal>
            <div><span className="section-index">02 / Expertise</span><h2 id="expertise-title">One signal.<br />Every layer.</h2></div>
            <p>Frontend craft backed by the engineering depth to carry a product beyond the screen.</p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <article className="expertise-card" key={item.title} data-reveal style={{ "--delay": `${index * 90}ms` } as CSSProperties}>
                <span className="expertise-card__number">{item.number}</span>
                <div className="expertise-card__signal" aria-hidden="true"><i /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>{item.tools.map((tool) => <li key={tool}>{tool}<span>↗</span></li>)}</ul>
              </article>
            ))}
          </div>
          <div className="engineering-note" data-reveal>
            <span>Beyond the stack</span>
            <p>Code review · Team lead · Mentoring · Performance · Architecture · CI/CD</p>
          </div>
        </section>

        <section className="experience section-pad" id="experience" aria-labelledby="experience-title">
          <div className="section-heading" data-reveal>
            <div><span className="section-index">03 / Experience</span><h2 id="experience-title">Where I&apos;ve<br />made products.</h2></div>
            <p>Four-plus years moving between interface detail and full-stack delivery in fast-paced teams.</p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company} data-reveal>
                <span className="timeline-item__index">0{index + 1}</span>
                <div className="timeline-item__company"><h3>{item.company}</h3><span>{item.period}</span></div>
                <div className="timeline-item__detail"><h4>{item.role}</h4><p>{item.note}</p><small>{item.work}</small></div>
              </article>
            ))}
          </div>

          <div className="profile-grid">
            <div className="profile-statement" data-reveal>
              <span>How I work</span>
              <p>Precise at the surface.<br /><em>Structured underneath.</em></p>
            </div>
            <div className="profile-details" data-reveal style={{ "--delay": "100ms" } as CSSProperties}>
              <div><span>Education</span><p>Frontend Development<br /><small>BeeOnCode · 2022—2023</small></p><p>Management<br /><small>Armenian State University of Economics · 2018—2022</small></p></div>
              <div><span>Languages</span><p>Armenian <small>Native</small></p><p>Russian <small>B2</small></p><p>English <small>A2</small></p></div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <div className="contact__orb" aria-hidden="true"><span>Open to strong ideas ·</span></div>
          <p className="eyebrow" data-reveal><span className="live-dot" /> Available for selected projects</p>
          <h2 id="contact-title" data-reveal>Have a product<br />to <em>ship?</em></h2>
          <a className="contact__email" href="mailto:artem.martirosian2001@gmail.com" data-reveal>
            <span>artem.martirosian2001@gmail.com</span><b>↗</b>
          </a>
          <div className="contact__footer" data-reveal>
            <p>Tell me what you&apos;re building, where it stands, and what success should feel like.</p>
            <div className="contact__links">
              <a href="https://t.me/ArtyomMartirosian" target="_blank" rel="noreferrer">Telegram ↗</a>
              <a href="https://www.linkedin.com/in/artyom-martirosian-974a6a2a0/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="tel:+37477141686">Phone ↗</a>
              <a href="/Artem_Martirosian_CV.pdf" download>CV ↓</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand--footer" href="#top" aria-label="Back to top"><span className="brand__mark">AM</span><span className="brand__dot">.</span></a>
        <p>Designed & built with intention.</p>
        <p>© {new Date().getFullYear()} · Yerevan</p>
      </footer>
    </div>
  );
}
