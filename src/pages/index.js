import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Home() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'Dribbble', href: 'https://dribbble.com/your-handle' },
  ];

  const experience = [
    {
      company: 'Product Studio',
      role: 'Senior Product Designer',
      period: '2023 — Present',
      summary:
        'Leading end-to-end product discovery, building multi-platform design systems, and partnering with engineering to ship delightful experiences.',
    },
    {
      company: 'Creative Collective',
      role: 'Product Designer',
      period: '2020 — 2023',
      summary:
        'Created design foundations for B2B SaaS tools, ran research sprints, and collaborated on motion prototypes used across growth initiatives.',
    },
    {
      company: 'Freelance',
      role: 'UX/UI Designer',
      period: '2017 — 2020',
      summary:
        'Delivered brand identities, marketing websites, and mobile apps for early-stage startups across fintech, health, and education.',
    },
  ];

  const skills = [
    {
      title: 'Product Strategy',
      items: ['Roadmapping', 'User Research', 'Storytelling'],
    },
    {
      title: 'Design Craft',
      items: ['Design Systems', 'Interaction Design', 'Motion'],
    },
    {
      title: 'Collaboration',
      items: ['Workshops', 'Prototyping', 'Design Ops'],
    },
  ];

  const projects = [
    {
      title: 'Northstar OS',
      description:
        'A modular design system powering web and mobile apps for a global finance platform, focused on accessibility and scale.',
      tags: ['Design System', 'Product Design', 'Documentation'],
      link: 'https://example.com/northstar',
    },
    {
      title: 'Aurora Pay',
      description:
        'A multi-surface payments experience that streamlines onboarding, risk checks, and customer support for merchants worldwide.',
      tags: ['UX Research', 'Interaction Design', 'Motion'],
      link: 'https://example.com/aurora',
    },
    {
      title: 'Waypoint CRM',
      description:
        'Redesigned CRM workflows that increased sales team efficiency by 28% with contextual insights and automation.',
      tags: ['Product Strategy', 'UX/UI', 'Launch'],
      link: 'https://example.com/waypoint',
    },
  ];

  const testimonials = [
    {
      quote:
        'A rare combination of systems thinking and craft. Their prototypes helped our team make faster, better decisions.',
      author: 'Jordan Patel',
      role: 'Head of Product, Lumina',
    },
    {
      quote:
        'They elevate every project with clarity and focus. Our go-to partner for complex product narratives.',
      author: 'Emi Tanaka',
      role: 'Director of Design, Crescendo',
    },
  ];

  return (
    <Layout
      title='Portfolio'
      description='Product designer portfolio and case studies'>
      <header className={styles.hero}>
        <div className={styles.heroIllustration} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>Product Designer & Creative Partner</p>
          <h1 className={styles.heading}>
            Hi, I’m <span className={styles.highlighted}>[Your Name]</span>.
            I craft digital products that balance vision, clarity, and craft.
          </h1>
          <p className={styles.lead}>
            I design purposeful, high-performing experiences for ambitious teams.
            My work spans design systems, complex SaaS, and human moments that
            build trust.
          </p>
          <div className={styles.ctaRow}>
            <a
              className='button button--primary button--lg'
              href='https://example.com/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'>
              Download Résumé
            </a>
            <Link
              className='button button--secondary button--lg'
              href='mailto:hello@example.com'>
              Start a Project
            </Link>
          </div>
          <div className={styles.socialRow}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.socialLink}
                target='_blank'
                rel='noopener noreferrer'>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section id='about' className={styles.section}>
          <div className='container'>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>About</p>
              <h2>Designing with intention, leading with outcomes</h2>
            </div>
            <div className={styles.sectionBody}>
              <p>
                I’ve spent the last eight years partnering with founders, product
                teams, and engineers to shape experiences that people want to use
                again and again. From scaling design systems to choreographing
                cross-functional discoveries, I help teams move from idea to
                impact.
              </p>
              <p>
                I thrive in ambiguous, complex spaces—translating insights into
                thoughtful journeys, aligning teams around a vision, and crafting
                interfaces that feel effortless. When I’m not designing, you can
                find me mentoring emerging designers or exploring new cities
                through my camera lens.
              </p>
            </div>
          </div>
        </section>

        <section id='skills' className={styles.sectionAlt}>
          <div className='container'>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Focus</p>
              <h2>Where I create the most value</h2>
            </div>
            <div className={styles.skillsGrid}>
              {skills.map((skill) => (
                <div key={skill.title} className={styles.skillCard}>
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='experience' className={styles.section}>
          <div className='container'>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Experience</p>
              <h2>Shaping product in diverse teams</h2>
            </div>
            <div className={styles.timeline}>
              {experience.map((item) => (
                <article key={item.company} className={styles.timelineItem}>
                  <div className={styles.timelineMeta}>
                    <span className={styles.timelinePeriod}>{item.period}</span>
                    <span className={styles.timelineRole}>{item.role}</span>
                  </div>
                  <h3>{item.company}</h3>
                  <p>{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='projects' className={styles.sectionAlt}>
          <div className='container'>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Selected Work</p>
              <h2>Case studies that sparked momentum</h2>
            </div>
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <div key={project.title} className={styles.projectCard}>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className={styles.tagRow}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    className={styles.projectLink}
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'>
                    View case study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id='testimonials' className={styles.section}>
          <div className='container'>
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>Testimonials</p>
              <h2>What partners and teams say</h2>
            </div>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className={styles.testimonialCard}>
                  <p>“{testimonial.quote}”</p>
                  <footer>
                    <span>{testimonial.author}</span>
                    <span className={styles.testimonialRole}>
                      {testimonial.role}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id='contact' className={styles.contactSection}>
          <div className='container'>
            <p className={styles.sectionEyebrow}>Let’s collaborate</p>
            <h2>Ready to shape what’s next?</h2>
            <p className={styles.contactLead}>
              I’m currently partnering with teams on early concepts, product
              expansion, and flagship design systems. Share your vision—let’s
              build something meaningful together.
            </p>
            <div className={styles.contactActions}>
              <Link
                className='button button--primary button--lg'
                href='mailto:hello@example.com'>
                hello@example.com
              </Link>
              <a
                className='button button--secondary button--lg'
                href='https://example.com/resume.pdf'
                target='_blank'
                rel='noopener noreferrer'>
                View résumé
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
