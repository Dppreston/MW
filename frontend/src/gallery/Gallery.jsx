import Footer from "../footer/Footer";
import "../gallery/Gallery.css";
import Navbar from "../navbar/Navbar";

//imgs

import HFC from "../imgs/HFCtransformed.png";
import KVCCHEALTH from "../imgs/Kvcchealth.jpeg";
import millerCanfield from "../imgs/Miller-Canfield-Exterior.jpeg";
import rickmanHouse from "../imgs/rickmanHouse.jpeg";
import radisson from "../imgs/radisson.jpeg";
import newCourthouse from "../imgs/newKzooCourthouse.jpeg";
import ProjectImg from "./ProjectImg";
import pinewood1 from "../imgs/pinewoodglen1.png";
import kzooeventcenter2 from "../imgs/kzooeventcenter2.jpeg";
import countryclub1 from "../imgs/newcountryclub1.jpeg";

const projects = [
  {
    Pname: "kalamazoo justice center",
    year: "2023",
    id: 1,
    imgs: [newCourthouse],
    description: "Kalamazoo justice center",
    role: "developer",
    path: "/kalamazoojusticecenter",
  },
  {
    Pname: "Bronson healthy living campus",
    year: "#",
    id: 2,
    imgs: [HFC, KVCCHEALTH],
    description: "Bronson healthy living campus",
    role: "developer",
    path: "/bronsonhealthylivingcampus",
  },
  {
    Pname: "Miller Canfield",
    year: "#",
    id: 3,
    imgs: [millerCanfield],
    description: "Miller canfield",
    role: "developer",
    path: "/millercanfield",
  },
  {
    Pname: "Rickman house",
    year: "#",
    id: 4,
    imgs: [rickmanHouse],
    description: "rickman house",
    role: "developer",
    path: "/rickmanhouse",
  },
  {
    Pname: "Radisson of Kalamazoo",
    year: "#",
    id: 5,
    imgs: [radisson],
    description: "radisson",
    role: "developer",
    path: "/radisson",
  },
  {
    Pname: "Pinewood Glen",
    year: "#",
    id: 6,
    imgs: [pinewood1],
    description: "pinewood glen",
    role: "developer",
    path: "/pinewoodglen",
  },
  {
    Pname: "Kalamazoo Event Center",
    year: "#",
    id: 7,
    imgs: [kzooeventcenter2],
    description: "kalamazoo event center",
    role: "developer",
    path: "/kalamazooeventcenter",
  },
  {
    Pname: "Kalamazoo Country Club",
    year: "#",
    id: 8,
    imgs: [countryclub1],
    description: "Kalamazoo country club",
    role: "developer",
    path: "/kalamazoocountryclub",
  },
];

function Gallery() {
  return (
    <>
      <Navbar />
      {/* <div className="filter-container">
        <h1>Portfolio</h1>
      </div> */}
      <div className="gallery-container">
        <ProjectImg projects={projects} />
      </div>
      <Footer />
    </>
  );
}
export default Gallery;
