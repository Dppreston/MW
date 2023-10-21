import "../navbar/Navbar.css";
import mwLogo from "../imgs/mwvLogo.png";
import { useRef } from "react";

function Navbar() {
  const mobileMenu = useRef(null);

  const handleHomeNav = () => {
    window.location = "./home";
  };

  const handleAboutNav = () => {
    window.location = "./about";
  };

  const handleContactNav = () => {
    window.location = "./contact";
  };

  const handleServicesNav = () => [(window.location = "./services")];

  const handleGalleryNav = () => {
    window.location = "./gallery";
  };

  //mobile menu function

  const handleMobileMenu = (e) => {
    if (e.currentTarget) {
      mobileMenu.current.classList.toggle("hidden");
    }
  };

  return (
    <>
      <div className='nav-container'>
        <div className='logo-container'>
          <img
            src={mwLogo}
            alt='mwVanderveen-logo'
            id='logo'
            onClick={handleHomeNav}
          />
        </div>
        <div className='link-container'>
          <h2 onClick={handleAboutNav}>About Us</h2>
          <h2 onClick={handleServicesNav}>Services</h2>
          <h2 onClick={handleGalleryNav}>Portfolio</h2>
          <h2 onClick={handleContactNav}>Contact</h2>
        </div>

        <i
          className='fa-solid fa-bars mobile-menu-btn '
          onClick={handleMobileMenu}
        ></i>
        <div className='mobile-menu hidden' ref={mobileMenu}>
          <h2 onClick={handleAboutNav}>About Us</h2>
          <h2 onClick={handleServicesNav}>Services</h2>
          <h2 onClick={handleGalleryNav}>Portfolio</h2>
          <h2 onClick={handleContactNav}>Contact</h2>
        </div>
      </div>
    </>
  );
}
export default Navbar;
