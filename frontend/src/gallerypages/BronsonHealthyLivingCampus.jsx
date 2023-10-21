import "../gallerypages/gallerypages.css";
import Navbar from "../navbar/Navbar";
import SpecificProject from "./SpecificProject";

//imgs

import kvcchealth1 from "../imgs/Kvcchealth.jpeg";
import kvcchealth2 from "../imgs/HFCtransformed.png";

const project = [
  {
    Pname: "Bronson healthy living campus",
    year: "2016",
    id: 1,
    budget: "$47,000,000",
    type: "Educational",
    description: `M.W. VanderVeen represented the development of institutional and medical buildings for Kalamazoo Valley Community College and Bronson Medical Services.
      The buildings consisted of a Food Innovations Center, Allied Health Building, Kalamazoo County Community Health Building, Culinary Arts School, as well as greenhouse facilities. 
      The construction was completed on schedule, under budget, and on land that served to be incredibly challenging to develop as a result of the high water table.
      `,
    role: "Owner's Representative",
  },
];
const projectImgs = [kvcchealth1, kvcchealth2];

function BronsonHealthyLivingCampus() {
  return (
    <>
      <Navbar />
      <SpecificProject project={project} projectImgs={projectImgs} />
    </>
  );
}
export default BronsonHealthyLivingCampus;
