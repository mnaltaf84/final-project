
import React from "react";
import "./styles/portfolio.css";

export default function Portfolio() {
  const handleDownloadPDF = () => {
    const input = document.getElementById("portfolio-section");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Muhammad_Naveed_CV.pdf");
    });
  };

  const skills = [
    "Computer Hardware & Software",
    "Networking & Troubleshooting",
    "Printer/Scanner Support",
    "Windows & Software Installation",
    "Web Development (HTML/CSS/JS/React)",
    "Figma UI Design",
    "MS Office",
    "Remote Customer Support",
  ];

  return (
    <div className="portfolio-container" id="portfolio-section">
      <header className="header">
        <div>
          <h1>Muhammad Naveed Altaf</h1>
          <p>Sr. Support Engineer — IT & Hardware Specialist</p>
          <p>Lahore, Pakistan — mnaltaf84@gmail.com — 0314-4994654</p>
        </div>
      </header>

      <section className="portfolio-section professional-summary">
        <h2>Professional Summary</h2>
        <p>
          Customer Support & IT Hardware Engineer with 20+ years of experience
          in printers, photocopiers, networks, and IT support. Skilled in client
          service, onsite troubleshooting, documentation, and remote support.
          Proven track record in managing technical teams, handling operations,
          and delivering enterprise printing solutions.
        </p>
      </section>

      <section className="portfolio-section">
        <h2>Personal Information</h2>
        <ul>
          <li>Address: House #30/1, Street #13, Quaid-e-Millat Colony, Lahore</li>
          <li>CNIC: 35201-3690780-9</li>
          <li>Domicile: Punjab, Pakistan</li>
          <li>Nationality: Pakistani</li>
          <li>Marital Status: Married</li>
          <li>Religion: Islam</li>
        </ul>
      </section>

      <section className="portfolio-section grid-2">
        <div>
          <h2>Education</h2>
          <ul>
            <li>FA — AIOU (Continuing) 2024–Present</li>
            <li>Diploma in R/TV Electronics — 2001</li>
            <li>Computer Software Course — 1998</li>
            <li>Matric with Science — 1998</li>
          </ul>
        </div>

        <div>
          <h2>Certifications</h2>
          <ul>
            <li>SafeCom — Training & Badge</li>
            <li>PaperCut — Training & Badge</li>
          </ul>
        </div>
      </section>

      <section className="portfolio-section">
        <h2>Work Experience</h2>
        <ul>
          <li>Sr. Support Engineer — Mushko Printing Solutions (2022–Present)</li>
          <li>Installed & managed printers at client site</li>
          <li>Handled customer service tickets & on-site troubleshooting</li>
          <li>SLA follow-up with vendor</li>
        </ul>
      </section>

      <section className="portfolio-section projects">
        <h2>Projects</h2>
        <ul>
          <li>Calculator App (HTML/CSS/JS)</li>
          <li>Weather App (API Integration)</li>
          <li>Todo App (CRUD)</li>
          <li>Digital Live Clock</li>
          <li>MS Access Database Solutions</li>
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
        <h2>Languages</h2>
        <ul>
          <li>Urdu — Native / Full Professional</li>
          <li>English — Intermediate</li>
        </ul>
      </section>

      <div style={{ textAlign: "center" }}>
        <button className="download-btn" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>

      <footer>© {new Date().getFullYear()} Muhammad Naveed Altaf</footer>
    </div>
  );
}
