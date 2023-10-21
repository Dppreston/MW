import "../gallerypages/gallerypages.css";
import Navbar from "../navbar/Navbar";
import SpecificProject from "./SpecificProject";

//imgs

import rickmanhouse1 from "../imgs/rickmanHouse.png";

const project = [
  {
    Pname: "Rickman house",
    year: "2003",
    id: 1,
    budget: "$12,300,000",
    type: "owners representative",
    description:
      "The Rickman House is a historic building in downtown Kalamazoo, Michigan. It was originally constructed in 1906 as a hotel and has since been refitted as a low-income multi-family housing development. The greatest structural challenge was relocating the elevator and stair shaft. The exterior was restored and the historical qualities were preserved. ",
    role: "developer",
    path: "/rickmanhouse",
  },
];

const projectImgs = [rickmanhouse1];

function RickmanHouse() {
  return (
    <>
      <Navbar />
      <SpecificProject project={project} projectImgs={projectImgs} />
    </>
  );
}
export default RickmanHouse;
