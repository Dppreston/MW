import "../gallerypages/gallerypages.css";
import Navbar from "../navbar/Navbar";
import SpecificProject from "./SpecificProject";

//imgs

import millercanfield1 from "../imgs/Miller-Canfield-Exterior.jpeg";

const project = [
  {
    Pname: "Miller Canfield",
    year: "2008",
    id: 1,
    budget: "$30,000,000",
    description: `M.W. VanderVeen represented Catalyst Development for the Miller Canfield building in Kalamazoo, Michigan. This 153,000 square foot construction features four floors of premium office space and a two level parking structure. This challenging construction showcases a unique, full-scale atrium at the face of the building, in addition to a fully disguised parking garage covered by granite and limestone. `,
    role: "Owner's Respresentative",
    type: "office/parking",
    path: "/millercanfield",
  },
];

const projectImgs = [millercanfield1];

function MillerCanfield() {
  return (
    <>
      <Navbar />
      <SpecificProject project={project} projectImgs={projectImgs} />
    </>
  );
}
export default MillerCanfield;
