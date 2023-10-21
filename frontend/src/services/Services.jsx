import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "../services/Services.css";
import ServiceMenu from "./ServiceMenu";

import projectM from "../imgs/projectmanagement.jpeg";
import propertyM from "../imgs/propertymanagement.jpeg";
import development from "../imgs/development.jpeg";

const services = [
  {
    id: 1,
    type: "project management",
    description:
      "M.W. VanderVeen has provided elite construction owner representation services throughout Southwest Michigan since 2000. Combining technical construction experience and extensive accounting reviews, we provide a complete service. Our experts meet with the owner, architect and construction manager to assure sucessful project completion. The accounting staff reviews all billings for accuracy and complience with all laws. This ensures general contractors will not be payed until billings are accurate, often times saving the owner thousands of dollars. ",
    img: projectM,
  },
  {
    id: 2,
    type: "propery management",
    description:
      "M.W. VanderVeen has managed multi-family residential properties and commercial real estate since 1987 and 1985 respectively. We manage properties to preserve the value of the asset, ensure excellent physical condition for tenants as well as provide an enjoyable experience for all parties involved. We value client relationships and the future of our projects, never filling vacancies on a short term basis or rushing the process. ",
    img: propertyM,
  },
  {
    id: 3,
    type: "development",
    description:
      "M.W. VanderVeen offers multiple development services to make the entire process from project conception to completion as easy as possible. The services available are Feasibility Studies, Site Selection, Land Acquisition, Financing Options, Development Design, Construction Management and Leasing",
    img: development,
  },
];

function Services() {
  return (
    <>
      <Navbar />
      <ServiceMenu services={services} />
      <Footer />
    </>
  );
}
export default Services;
