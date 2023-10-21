import "../src/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages

import Homepage from "../src/homepage/Homepage";
import About from "../src/about/About";
import Contact from "../src/contact/Contact";
import Services from "../src/services/Services";
import Gallery from "../src/gallery/Gallery";
import BronsonHealthyLivingCampus from "../src/gallerypages/BronsonHealthyLivingCampus";
import KalamazooCountryClub from "../src/gallerypages/KalamazooCountryClub";
import KalamazooEventCenter from "../src/gallerypages/KalamazooEventCenter";
import KalamazooJusticeCenter from "../src/gallerypages/KalamazooJusticeCenter";
import MillerCanfield from "../src/gallerypages/MillerCanfield";
import PinewoodGlen from "../src/gallerypages/PinewoodGlen";
import Radisson from "../src/gallerypages/RadissonKalamazoo";
import RickmanHouse from "../src/gallerypages/RickmanHouse";
import RadissonKalamazoo from "../src/gallerypages/RadissonKalamazoo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/bronsonhealthylivingcampus"
            element={<BronsonHealthyLivingCampus />}
          />
          <Route
            path="/kalamazoocountryclub"
            element={<KalamazooCountryClub />}
          />
          <Route
            path="/kalamazooeventcenter"
            element={<KalamazooEventCenter />}
          />
          <Route
            path="/kalamazoojusticecenter"
            element={<KalamazooJusticeCenter />}
          />
          <Route path="/millercanfield" element={<MillerCanfield />} />
          <Route path="/pinewoodglen" element={<PinewoodGlen />} />
          <Route path="/radisson" element={<RadissonKalamazoo />} />
          <Route path="/rickmanhouse" element={<RickmanHouse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
