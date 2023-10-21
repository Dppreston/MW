import "../gallerypages/gallerypages.css";
import Navbar from "../navbar/Navbar";
import SpecificProject from "./SpecificProject";

//img

import kzooeventcenter1 from "../imgs/kzooeventcenter2.jpeg";
import kzooeventcenter2 from "../imgs/kzooeventcenter3.jpeg";

const project = [
  {
    Pname: "Kalamazoo Event Center",
    year: "2026",
    budget: "$300,000,000",
    type: "sports arena",
    id: 1,
    description:
      "This state of the art facility will be the first multi-sport complex in Kalamazoo, Michigan. It will accomodate 50,000 people and will inclue hockey and bacsketball training facilites, workout facilites, two parking garages, an event hall and a main arena. It will host Western Michgian University basketball and Kalamazoo Wings hockey events, as well as concerts and other events. ",
    role: "developer",
    path: "/kalamazooeventcenter",
  },
];

const projectImgs = [kzooeventcenter1, kzooeventcenter2];

function KalamazooEventCenter() {
  return (
    <>
      <Navbar />
      <SpecificProject project={project} projectImgs={projectImgs} />
    </>
  );
}
export default KalamazooEventCenter;
