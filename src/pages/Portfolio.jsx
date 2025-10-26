import React from "react";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const skills = [
    "Computer Hardware & Software",
    "Networking & Troubleshooting",
    "IP Cameras configurations and Troubleshooting",
    "Routers configuration",
    "Printer/Scanner Maintenance and Projects",
    "Windows & Software Installation",
    "Web Development (HTML/CSS/JS/React JS/Figma)",
    "MS Access Database Development",
    "PDF Editing, Adobe Photoshop, Illustrator, Adobe Indesign",
    "Remote Customer Support",
  ];

  return (
    <div className="portfolio-container" id="portfolio-section">
      <header className="header">
        <div className="header-left">
          <h1>Muhammad Naveed Altaf</h1>
          <p>Sr. Support Engineer — IT & Hardware Specialist</p>
          <p>Lahore, Pakistan — mnaltaf84@gmail.com — 0314-4994654</p>
        </div>
        <div className="header-right">
          <img
            src="portfolio-Image.png"
            alt="Muhammad Naveed Altaf"
            className="profile-pic"
          />
        </div>
      </header>

      <section className="portfolio-section professional-summary">
        <h2>Professional Summary</h2>
        <p>
          Customer Support & IT Hardware Engineer with 18+ years of experience
          in IT support, networks, Routers, printers, photocopiers. Skilled in
          client service, onsite troubleshooting, documentation, and remote
          support. Proven track record in managing technical teams, handling
          operations, and delivering enterprise printing solutions through print
          management softwares. Managed Bank's printing projects and delivered
          on time.
        </p>
      </section>

      <section className="portfolio-section grid-2">
        <div>
          <h2>Education</h2>
          <ul>
            <li>FA — (Continuing 3rd Semester) from AIOU 2024 - Present</li>
            <li>
              Diploma in R/TV Electronics from Govt. Technical Institute — 2001
            </li>
            <li>
              Computer Software Course from Minhaj Computer College — 1998
            </li>
            <li>Matric with Science from Lahore Board — 1998</li>
          </ul>
        </div>

        <div>
          <h2>Certifications</h2>
          <ul>
            <li>SafeCom — Various Courses and Trainings & Badge</li>
            <li>PaperCut — Various Courses and Trainings & Badge</li>
            <li>Graphic Designing from Digiskills</li>
            <li>Web Designing from Digiskills</li>
            <li>Freelancing from Digiskills</li>
            <li>Search Engine Optimization (SEO) from Digiskills</li>
            <li>Digital Marketing from Digiskills</li>
          </ul>
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            Sr. Support Engineer — Mushko Printing Solutions (2024-Present)
          </li>
          <li>Installed & managed printers at client site</li>
          <li>Handled customer service tickets & on-site troubleshooting</li>
          <li>
            Additionally leading project team over all Pakistan customer offices
          </li>
          <li>SLA follow-up with vendor</li>
        </ul>
      </section>

      <section className="portfolio-section projects">
        <h2>Projects</h2>
        <ul>
          <li>Calculator App using (HTML/CSS/JS)</li>
          <li>Weather App (API Integration)</li>
          <li>Todo App (HTML/CSS/React JS)</li>
          <li>Digital Live Clock in React JS</li>
          <li>
            MS Access Database (Developed many databases for different
            businesses)
          </li>
        </ul>
      </section>

      <section className="portfolio-section">
        <h2>Skills</h2>
        <div>
          {skills.map((skill, idx) => (
            <span key={idx} className="skills-chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Personal Information</h2>
        <ul>
          <li>
            Address: House #30/1, Street #12, Quaid-e-Millat Colony, Lahore
          </li>
          <li>CNIC: 35201-3690780-9</li>
          <li>Domicile: Punjab, Pakistan</li>
          <li>Nationality: Pakistani</li>
          <li>Marital Status: Married</li>
          <li>Religion: Islam</li>
        </ul>
      </section>

      <section className="portfolio-section">
        <h2>Languages</h2>
        <ul>
          <li>Urdu / Full Professional</li>
          <li>Punjabi / Full</li>
          <li>English — Intermediate</li>
        </ul>
      </section>

      <div style={{ textAlign: "center" }}></div>
      <footer>© {new Date().getFullYear()} Muhammad Naveed Altaf</footer>
    </div>
  );
}
