import "../homepage/Homepage.css";

import Navbar from "../navbar/Navbar";
import IntroSlideshow from "../homepage/IntroSlideshow";

//imgs

import HFC from "../imgs/HFCtransformed.png";
import KVCCHEALTH from "../imgs/Kvcchealth.jpeg";
import millerCanfield from "../imgs/Miller-Canfield-Exterior.jpeg";
import rickmanHouse from "../imgs/rickmanHouse.jpeg";
import radisson from "../imgs/radisson.jpeg";
import newCourthouse from "../imgs/newKzooCourthouse.jpeg";
import construction from "../imgs/constructionprofessional.jpeg";
import Footer from "../footer/Footer";
import Statement from "./Statement";
import handshake from "../imgs/handshake.jpeg";
import ownership from "../imgs/ownership.jpeg";
import StatementText from "./StatementText";
import HomepageSummary from "./HomepageSummary";

const slides = [HFC, KVCCHEALTH, millerCanfield, rickmanHouse, radisson];

const statementContent = [
  {
    id: 1,
    heading: "Ownership",
    img: ownership,
  },
  {
    id: 2,
    heading: "Representation",
    img: handshake,
  },
  {
    id: 3,
    heading: "Development",
    img: construction,
  },
];

const homepageSummaryContent = [
  {
    id: 1,
    title:
      "M.W VanderVeen has a proud tradition of service dating back to 1953.",
    content:
      "M.W. Vanderveen, headquartered in Kalamazoo, Michigan, brings over 70 years of construction experience to the midwest; with a reputation for delivering large-scale projects on budget and ahead of schedule. Our company has served our clients for over 7 decades. In that time, we have gained endless amounts of experience, fulfilling our clients needs again and again.",
    anchor: "read our story",
    path: "/about",
  },
  {
    id: 2,
    title: "We offer a range of professional services.",
    content:
      "From creation to completion, our experienced staff has the knowledge and the tools to exceed our clients' expectations. Fromrepresenting our clients' needs with the upmost level of expertice, to offering a fully complete development experience, M.W. VanderVeen will succeed.",
    anchor: "learn more",
    path: "/services",
  },
  {
    id: 3,
    title: "We take pride in the jobs we have completed.",
    content:
      "Along with striving to reach our clients' expectations, we are proud of what we have been involved with in our 70 years in business. We are thankful to be a staple in the development industry, and also for Southwest Michigan. We promise to serve our clients to the best of our ability.",
    anchor: "see our projects",
    path: "/gallery",
  },
];

function Homepage() {
  return (
    <>
      <Navbar />
      <IntroSlideshow slides={slides} />
      <StatementText />
      <div className='statement-wrapper'>
        <Statement statementContent={statementContent} />
      </div>
      <HomepageSummary homepageSummaryContent={homepageSummaryContent} />

      <Footer />
    </>
  );
}
export default Homepage;
