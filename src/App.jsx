import { useEffect } from "react";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Mail,
  GraduationCap, Award, Code2, ExternalLink
} from "lucide-react";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import SkillCard from "./components/SkillCard";
import { profile, skills, education, certifications } from "./data";

function SocialButton({ href, children, primary = false }) {
  return (
    <a className={`button ${primary ? "button-primary" : "button-outline"}`}
       href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="hero section" id="home">
          <div className="hero-content reveal">
            <span className="status"><span className="status-dot" /> Open to learning and opportunities</span>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Vinay<br /><span className="accent">Raghuwanshi.</span></h1>
            <h2>{profile.role}</h2>
            <p className="hero-description">
              I am a B.Tech student passionate about programming, problem-solving,
              and building useful web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Get in touch <ArrowUpRight size={18} /></a>
              <a className="button button-outline" href="#about">Explore portfolio <ArrowDown size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <span><MapPin size={17} /> {profile.location}</span>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="profile-card-top"><span>PORTFOLIO / 2026</span><Code2 size={20} /></div>
              <div className="monogram">VR<span>.</span></div>
              <p>LEARN. BUILD. IMPROVE.</p>
              <div className="card-line" />
              <div className="card-bottom"><span>AI & ML STUDENT</span><span>BHOPAL, IN</span></div>
            </div>
            <span className="floating-tag tag-one">Java</span>
            <span className="floating-tag tag-two">Web Development</span>
          </div>
          <a className="scroll-hint" href="#about">SCROLL TO EXPLORE <ArrowDown size={15} /></a>
        </section>

        <section className="section content-section" id="about">
          <SectionTitle eyebrow="A LITTLE INTRODUCTION" title="About me" />
          <div className="about-grid reveal">
            <div className="about-mark">01<span>/ ABOUT</span></div>
            <div>
              <h3>Curious mind. Consistent learner.</h3>
              <p>
                I am pursuing a B.Tech in Artificial Intelligence and Machine Learning
                at {profile.college}. I enjoy learning Java, strengthening my
                Data Structures and Algorithms fundamentals, and exploring frontend
                development with HTML, CSS, and JavaScript.
              </p>
              <p>
                I am currently focused on improving my coding skills and creating
                projects that help me turn concepts into practical experience.
              </p>
              <div className="about-facts">
                <div><strong>2028</strong><span>Expected graduation</span></div>
                <div><strong>7.17</strong><span>Current CGPA</span></div>
                <div><strong>06+</strong><span>Skills in progress</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section content-section" id="skills">
          <SectionTitle eyebrow="WHAT I WORK WITH" title="Skills & technologies"
            description="Technologies and concepts I am learning and practicing." />
          <div className="skills-grid">
            {skills.map(skill => <SkillCard key={skill.name} {...skill} />)}
          </div>
        </section>

        <section className="section content-section" id="education">
          <SectionTitle eyebrow="MY BACKGROUND" title="Education & certification" />
          <div className="timeline">
            {education.map(item => (
              <article className="timeline-item reveal" key={item.title}>
                <div className="timeline-icon"><GraduationCap size={20} /></div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <small>{item.detail}</small>
                </div>
              </article>
            ))}
            {certifications.map(item => (
              <article className="timeline-item reveal" key={item.title}>
                <div className="timeline-icon"><Award size={20} /></div>
                <div className="timeline-content">
                  <span className="timeline-period">CERTIFICATION</span>
                  <h3>{item.title}</h3>
                  <p>{item.issuer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section content-section github-section" id="github">
          <SectionTitle eyebrow="CODE & PRACTICE" title="GitHub"
            description="Explore my GitHub profile and the code I share as I keep learning and building." />
          <div className="github-panel reveal">
            <div className="github-mark"><Github size={42} /></div>
            <div className="github-copy">
              <span className="eyebrow">MY GITHUB PROFILE</span>
              <h3>Follow my coding journey.</h3>
              <p>Visit my GitHub profile to see my repositories, coding practice, and future projects.</p>
              <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">
                Visit GitHub <ExternalLink size={17} />
              </a>
            </div>
            <div className="github-handle">@r1c0000vinay-bit</div>
          </div>
        </section>

        <section className="section content-section contact-section" id="contact">
          <SectionTitle eyebrow="LET'S CONNECT" title="Get in touch"
            description="Have an opportunity, suggestion, or just want to connect? Find me here." />
          <div className="contact-panel reveal">
            <div>
              <span className="eyebrow">CONNECT WITH ME</span>
              <h3>Let's make something<br /><span className="accent">meaningful.</span></h3>
              <p className="contact-location"><MapPin size={18} /> {profile.location}</p>
            </div>
            <div className="contact-actions">
              <SocialButton href={profile.linkedin} primary><Linkedin size={19} /> LinkedIn <ArrowUpRight size={16} /></SocialButton>
              <SocialButton href={profile.github}><Github size={19} /> GitHub <ArrowUpRight size={16} /></SocialButton>
              {profile.email && <a className="button button-outline" href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <a className="brand" href="#home">Vinay<span className="accent">.</span></a>
        <p>Designed & built with React. © {new Date().getFullYear()} Vinay Raghuwanshi.</p>
        <a href="#home" aria-label="Back to top"><ArrowUpRight size={19} /></a>
      </footer>
    </>
  );
}