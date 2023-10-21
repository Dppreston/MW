import "../gallerypages/gallerypages.css";
import Navbar from "../navbar/Navbar";
import SpecificProject from "./SpecificProject";

import radisson1 from "../imgs/radisson1.jpeg";
import radisson2 from "../imgs/radisson.jpeg";

const project = [
  {
    Pname: "Radisson of Kalamazoo",
    year: "2003/2012",
    id: 1,
    budget: "60,000,000",
    type: "hotel/retail",
    description: `M.W. VanderVeen assisted in renovating and remodeling of an existing hotel that was over 30 years old. This included renovations of hotel rooms, retail space, restaurants, mechanical systems, plus the development of a nine story hotel tower as an attachment to the hotel. In addition to the major renovations, projects continued at the Radisson, including restaurant’s and corporate office space.`,
    role: "owner's representative",
    path: "/radisson",
  },
];

const projectImgs = [radisson1, radisson2];
function RadissonKalamazoo() {
  return (
    <>
      <Navbar />
      <SpecificProject project={project} projectImgs={projectImgs} />
    </>
  );
}
export default RadissonKalamazoo;
