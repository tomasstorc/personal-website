import "./experience.css";
import { text } from "./experience-text";

const Experience = () => {
  return (
    <div id="experience" className="experience-container">
      <h2 className="exp-text">Work Experience</h2>
      <div className="timeline">
        {text.map((e, index) => {
          return (
            <div
              key={index}
              className={`container-e ${(index + 1) % 2 ? "right" : "left"}`}
            >
              <div className="date">{e.date}</div>
              <div className="content">
                <h2>
                  {e.company} - {e.title}
                </h2>
                <p>{e.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
