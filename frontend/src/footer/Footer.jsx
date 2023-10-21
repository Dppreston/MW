import "../footer/Footer.css";
import logo from "../imgs/mwvLogo.png";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-logo-container'>
          <img id='footer-logo' src={logo} alt='MW logo' />
          <div className='footer-phone-address'>
            <h5>7875 Moorsbridge Rd. Portage, MI 49024</h5>
            <h5>269-381-5566</h5>
          </div>
        </div>
        <div className='copyright-container'>
          <i className='fa-regular fa-copyright'></i>2023 M.W. VanderVeen
        </div>
        <div className='footer-links-container'>
          <h4
            onClick={() => {
              location.href = "./about";
            }}
          >
            About Us
          </h4>
          <h4
            onClick={() => {
              location.href = "./services";
            }}
          >
            Services
          </h4>
          <h4
            onClick={() => {
              location.href = "./gallery";
            }}
          >
            Portfolio
          </h4>
          <h4
            onClick={() => {
              location.href = "./contact";
            }}
          >
            Contact
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Footer;
