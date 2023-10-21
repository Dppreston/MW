import "../gallerypages/gallerypages.css";

import Navbar from "../navbar/Navbar";
import SpecificProject from "./SpecificProject";

//imgs

import pinewoodglen1 from "../imgs/pinewoodglen1.png";
import pinewoodglen2 from "../imgs/pinewoodglen2.jpeg";
import pinewoodglen3 from "../imgs/pinewoodglen3.jpeg";

const project = [
  {
    Pname: "Pinewood Glen",
    year: "1987",
    type: "Multi-family housing",
    budget: "A lot",
    id: 1,
    description: `M.W. VanderVeen functioned as developer and owner for Pinewood Glen Apartments located on West Main Street in Kalamazoo, Michigan. Pinewood Glen is a 180 unit muti-family housing project, featuring amenities such as its own nature preserve, a pool and a beautiful clubhouse. Although M.W. VanderVeen has since sold Pine Glen, it enjoyed years of high occupancy.`,
    role: "developer",
    path: "/pinewoodglen",
  },
];

const projectImgs = [pinewoodglen1, pinewoodglen2, pinewoodglen3];

function PinewoodGlen() {
  return (
    <>
      <Navbar />
      <SpecificProject project={project} projectImgs={projectImgs} />
    </>
  );
}
export default PinewoodGlen;
