import "../Styles/Project.css"
import { FcCalculator } from "react-icons/fc";
import { FaCloudMoonRain } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";

export default function Projects() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "yellow", backgroundColor: "silver" }}>
        My Projects
      </h1>
      <div
        style={{
          height: "350px",
          display: "flex",
          flexWrap: "wrap",
          marginTop: "0%",
        }}
      >
        <br />
        <ul className="ul-div">
          <div className="app-div">
            <li>
              <h1><FcTodoList/></h1>
              <a href="https://naveedaltaf-todoapp.netlify.app/">
              Todo App</a>
            </li>
          </div>

          <div className="app-div">
            <li>
              <h1><FaCloudMoonRain style={{color:"black", width:"60"}}/></h1>
              <a href="https://naveedaltaf-weatherapp.netlify.app">
                Weather App
              </a>
            </li>
          </div>

          <div className="app-div">
            <li>
              <h1><FcCalculator/></h1><br />
              <a href="https://naveedaltaf-calculatorapp.netlify.app//">
                Calculator
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
