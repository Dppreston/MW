import "../gallerypages/gallerypages.css";
import Navbar from "../navbar/Navbar";
import SpecificProject from "./SpecificProject";

//imgs

import newcourthouse1 from "../imgs/NewKzooCourthouse.jpeg";

const project = [
  {
    Pname: "kalamazoo justice facility",
    year: "2023",
    budget: "$95,000,000",
    type: "infrastructure",
    id: 1,
    description: `M.W. VanderVeen served as owners representative working alongside CSM Group to build a new $95,000,000 justice facility for the city of Kalamazoo.
    The companies broke ground in May of 2021 and the building is set to be finished in the last quarter of 2023. 
    The five-story, 165,000-square-foot facility will feature an open-transparency concept, as well as many environmentally responsible design qualities. 
    `,
    role: "Owner's Representative",
    path: "/kalamazoojusticecenter",
  },
];

const projectImgs = [newcourthouse1];

function KalamazooJusticeCenter() {
  return (
    <>
      <Navbar />
      <SpecificProject project={project} projectImgs={projectImgs} />\
    </>
  );
}
export default KalamazooJusticeCenter;
