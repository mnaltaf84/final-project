import React from "react";

export default function Skills() {
  return (
    <>
        <h1 className="skills-heading">Soft Skills</h1>

      <div className="skills-main-div">

        <div className="skills-div1">

          <div className="skills1-sub-div1">
            <img className="skills-image" src="Webdevelopment.jpg" alt="Web Development Image" />
            <div className="skills-content">
              <h2>Web Site Developement</h2>
              <br />
              <p>
                I can make Web Site using HTML, CSS, JavaScript and React JS.
              </p>
              {/* <button className="content-button">Read More</button> */}
            </div>
          </div>

          <div className="skills1-sub-div2">
            <div className="skills-content" id="skills1-div2-content">
              <h2>Database Developement</h2>
              <br />
              <p>
                I can make database using MS Access for small office inventory
                management, Pharmacy, General stores, warehouse stock management
                with Inward, Outward, Stock Record, Purchase Orders, Invoicing
                and so many features as required.{" "}
              </p>
              {/* <button className="content-button">Read More</button> */}
            </div>
            <img className="skills-image" src="InventoryDatabase.jpg" alt="MS Access Development Image" />
          </div>
        </div>
              <h1 style={{textAlign:"center", border:"solid black 2px", boxShadow:"15px 5px 5px 5px brown"}}>Technical Skills</h1>
        <div className="skills-div2">

          <div className="skills2-sub-div1">
            <div className="skills-content" id="skills2-div1-content">
              <h2>Printers Repair</h2> <br />
              <p>
                This area is about my Printer repairing skills. Here I'll
                explain about my technical skills.
              </p>
              {/* <button className="content-button">Read More</button> */}
            </div>
            <img
              className="skills-image"
              src="PrinterRepair.avif"
              alt="Printer Repair Image"
              id="skills2-div1-image"
            />
          </div>

          <div className="skills2-sub-div2">
            <div className="skills-content" id="skills2-div2-content">
              <h2>Laptop / Computers Repair</h2>
              <br />
              <p>
                This is skills article area about my Laptop repairing skills.
              </p>
              {/* <button className="content-button">Read More</button> */}
            </div>
            <img
              className="skills-image"
              src="LaptopRepair.jpg"
              alt="Laptop Repairing Image"
              id="skills2-div2-image"
            />
          </div>

          <div className="skills2-sub-div3">
            <div className="skills-content" id="skills2-div3-content">
              <h2>Photocopier Machine Repair</h2>
              <br />
              <p>
                This area is about my Photocopier machine repairing skills. I'll
                tell you about my this technical skills.
              </p>
              {/* <button className="content-button">Read More</button> */}
            </div>
            <img
              className="skills-image"
              src="Photocopier Repair.png"
              alt="Photocopier Machine Repairing Image"
              id="skills2-div3-image"
            />
          </div>
        </div>
              <h1 style={{textAlign:"center", border:"solid black 2px", boxShadow:"15px 5px 5px 5px brown"}}>I.T Skills</h1>
        <div className="skills-div3">

          <div className="skills3-sub-div1">
            <img
              className="skills-image"
              src="WindowsInstallation.png"
              alt="Windows Installation Image"
            />
            <div className="skills-content">
              <h2>Installation and Configurations</h2>
              <br />
              <p>
                I can Install windows, Professional Softwares, Configure Devices
                and types of softwares used in industries.
              </p>
              {/* <button className="content-button">Read More</button> */}
            </div>
          </div>

          <div className="skills3-sub-div2">
            <div className="skills-content" id="skills3-div2-content">
              <h2>Network Configuration Setup</h2>
              <br />
              <p>
                This skill area is about computer and related devices networking. Here I mentioned about my networking and
                IT related skills.
              </p>
              {/* <button className="content-button">Read More</button> */}
            </div>
            <img className="skills-image" src="NetworkingImage1.jpg" alt="Network Configuration Image" />
          </div>

        </div>

      </div>
    </>
  );
}
