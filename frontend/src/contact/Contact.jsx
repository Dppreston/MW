import "../contact/Contact.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <div className='contact-page-container'>
        <div className='contact-text-container'>
          <h1 className='contact-page-title'>inquiring about service?</h1>
          <h2 className='contact-page-subtitle'>
            send us a message and we will get back to you shortly
          </h2>
          <h2 className='contact-page-subtitle'>You can also reach us at</h2>
          <h2 className='contact-page-subtitle'>269-381-5566</h2>
          <h2 className='contact-page-subtitle'>
            Monday - Friday 8:00 A.M - 3:00 P.M.
          </h2>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
export default Contact;
