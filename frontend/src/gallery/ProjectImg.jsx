import { useRef } from "react";
import "../gallery/gallery.css";
import "../animations.css";

function ProjectImg(props) {
  const projects = props.projects;
  const galleryRef = useRef(null);
  const loadingRef = useRef(null);

  const handleHover = (e) => {
    if (e) {
      e.currentTarget.classList.add("grow");
      e.currentTarget.classList.remove("shrink");
    }
  };

  const handleHoverLeave = (e) => {
    if (e) {
      e.currentTarget.classList.remove("grow");
      e.currentTarget.classList.add("shrink");
    }
  };

  const handleClick = (e) => {
    const currentProjectIndex = e.currentTarget.title;
    const currentProject = projects[currentProjectIndex - 1];
    const gallery = galleryRef.current;
    const loading = loadingRef.current;
    gallery.classList.add("fadeout");
    loading.classList.remove("hidden");

    setTimeout(() => {
      location.href = currentProject.path;
    }, 1500);
  };

  return (
    <>
      <div className="gallery" ref={galleryRef}>
        {projects.map((project) => (
          <div
            className="project-img"
            key={project.id}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverLeave}
            onClick={handleClick}
            title={project.id}
          >
            <h1 className="project-title">{project.Pname}</h1>
            <img className="project-img-style" src={project.imgs[0]} />
          </div>
        ))}
      </div>
      <video ref={loadingRef} className="loading hidden" autoPlay muted loop>
        <source src="src/imgs/mwloading.mp4" type="video/mp4" />
      </video>
    </>
  );
}
export default ProjectImg;
