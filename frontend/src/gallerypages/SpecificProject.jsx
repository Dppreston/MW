import { useEffect, useState } from "react";
import "../gallerypages/gallerypages.css";

function SpecificProject(props) {
  const project = props.project;
  const imgs = props.projectImgs;
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLastSlide = currentIndex === imgs.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;

  useEffect(() => {
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 5000);
  });

  return (
    <>
      {project.map((current) => (
        <div className="specific-project" key={current.id}>
          <div className="project-container">
            <div className="project-title-container">
              <h1>{current.Pname}</h1>
            </div>
            <div className="description-image-container">
              <div className="description">
                <div className="year-role-container">
                  <h3>
                    Year Completed : <span id="year">{current.year}</span>
                  </h3>
                  <h3>
                    Role : <span id="role">{current.role}</span>
                  </h3>
                  <h3>
                    Budget : <span id="budget">{current.budget}</span>
                  </h3>
                  <h3>
                    Type : <span id="type">{current.type}</span>
                  </h3>
                </div>
                <p id="description">{current.description}</p>
              </div>
              <div className="specific-imgs">
                <div className="project-img-container">
                  <img
                    src={imgs[currentIndex]}
                    alt="#"
                    className="project-imgs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default SpecificProject;
