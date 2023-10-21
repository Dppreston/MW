import "../about/About.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/NAvbar";

//imgs

import kzoo from "../imgs/kzooskyline.jpeg";
import newKzoo from "../imgs/kalamazoo-skyline.jpeg";
import jerry from "../imgs/jerrybio.jpeg";
import jim from "../imgs/jimbio.jpeg";
import Team from "./Team";

const teamMember = [
  {
    id: 1,
    name: "Jerry VanderVeen",
    title: "CEO/Owner",
    bio: `Jerry VanderVeen has lived in Kalamazoo his entire life. He graduated from Hope College with a Bachelors degree in Economics. He has over 40 years of direct experience in the construction industry, and has managed properties since 1985. CREDIT ORIGINAL WEBSITE DEVELOPER JUST A FILLER`,
    img: jerry,
  },
  {
    id: 2,
    name: "James Chadderdon",
    title: "Treasurer",
    bio: "James Chadderdon is a lifelong resident of Southwest Michigan. He graduated from Western Michigan University with a BBA degree in Accountancy. As the Treasurer, he is responsible for all Accounting and IT functions of M. W. VanderVeen Company and the properties managed by the company. He has 40 years of experience throughout the construction industry and property management accounting CREDIT ORIGINAL WEBSITE DEVELOPER JUST A FILLER.",
    img: jim,
  },
];

function About() {
  return (
    <>
      <Navbar />
      <div className='about-container'>
        <div className='about-description-container'>
          <div className='about-image-container'>
            <img id='kzoo' src={newKzoo} alt='#' />
          </div>
          <div className='about-description'>
            <h2>About M.W. VanderVeen</h2>
            <p>
              M.W. VanderVeen was originally founded in 1953 as a small general
              construction company in Kalamazoo, Michigan. Throughout the past
              70 years, we have evolved and expanded our offerings while staying
              true to our origins in service, and our community. Our initiatives
              involve developing, managing and planning commercial and
              multi-family building projects. Our goal is to assist our clients
              in any way possible, offering turn-key solutions for whatever
              services are required. M.W. VanderVeen services Southwest Michigan
              and resides in the Kalamazoo area, but also has developments
              throughout the rest of Michigan, as well as Illinois and
              Wisconsin.
            </p>
          </div>
        </div>
      </div>
      <div className='team-wrapper'>
        <div className='team-title-container'>
          <h1>meet the team</h1>
        </div>
        <div className='team-container'>
          <Team teamMember={teamMember} />
        </div>
      </div>

      <Footer />
    </>
  );
}
export default About;
