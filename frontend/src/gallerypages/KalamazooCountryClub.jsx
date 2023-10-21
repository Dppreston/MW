import "../gallerypages/gallerypages.css";
import Navbar from "../navbar/Navbar";
import SpecificProject from "./SpecificProject";

//imgs

import countryClub1 from "../imgs/newcountryclub1.jpeg";

const project = [
  {
    Pname: "Kalamazoo Country Club",
    year: "Exp: 2026",
    budget: "$100,000,000",
    id: 1,
    type: "country club",
    description:
      "This state of the art facility will be developed in place of the existing country club and is estimated to be completed in 2026. The project will feature a complete redesign to the golf course, relocation of the clubhouse and facilities, as well as numerous additions to members such as swimming pools and resturants.",
    role: "developer",
    path: "/kalamazoocountryclub",
  },
];

const projectImgs = [countryClub1];

function KalamazooCountryClub() {
  return (
    <>
      <Navbar />
      <SpecificProject project={project} projectImgs={projectImgs} />
    </>
  );
}
export default KalamazooCountryClub;
