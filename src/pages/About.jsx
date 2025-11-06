import React from "react";
import "../Styles/About.css";

export default function About() {
  return (
    <main className="about-wrap">
      <section className="about-hero" aria-labelledby="about-heading">
        <div className="about-grid">
          <div>
            <div className="profile-card" role="region" aria-label="profile">
              <div className="avatar" aria-hidden>
                {/* use a decorative image from public folder or placeholder */}
                <img src="/PrinterRepair.avif" alt="profile" />
              </div>
              <div className="profile-info">
                <h3>Naveed Altaf</h3>
                <p>Hardware repair specialist • IT support • Web developer</p>
              </div>
            </div>

            <h1 id="about-heading" className="hero-head">About Me</h1>
            <p className="hero-sub">Hi, I'm <strong>Naveed Altaf</strong>. I work at the intersection of electronics and software — from repairing printers and laptops to building practical web applications and internal tools. I focus on reliability, clear communication and pragmatic solutions.</p>

            <div className="about-content">
              <p>
                I have hands-on experience in hardware repairing, IT support, and web development. My background includes laser printer servicing and board-level laptop repairs, alongside building web interfaces and small business tools.
              </p>

              <p>
                Whether it's diagnosing a device, setting up a LAN, or creating a dashboard to streamline workflows — I bring a blend of technical depth and user-focused thinking.
              </p>
            </div>

            <div className="cta-row">
              <button className="btn-primary" onClick={() => window.location = '/contact'}>Get in touch</button>
              <button className="btn-outline" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'})}>See Projects</button>
            </div>
          </div>

          <aside>
            <div className="card" aria-labelledby="skills">
              <h4 id="skills">Skills & Services</h4>
              <ul>
                <li>Laser printer repair & maintenance</li>
                <li>Laptop diagnosis & board-level repair</li>
                <li>Windows installation & troubleshooting</li>
                <li>Networking, LAN setup & office support</li>
                <li>Web development (HTML, CSS, JS, React)</li>
              </ul>

              <div className="badges" aria-hidden>
                <span className="badge">React</span>
                <span className="badge">JavaScript</span>
                <span className="badge">Hardware Repair</span>
                <span className="badge">Networking</span>
                <span className="badge">MS Access</span>
              </div>
            </div>

            <div className="card" style={{marginTop:'1rem'}}>
              <h4>Availability</h4>
              <p style={{color:'var(--muted)',margin:0}}>Open to freelance work, contract repair, and small web projects. Available for local pickup and remote troubleshooting.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}