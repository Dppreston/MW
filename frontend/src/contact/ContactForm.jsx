import { useEffect } from "react";
import { useState } from "react";
import "../contact/Contact.css";
import axios from "axios";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referral, setReferral] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {}, [
    firstName,
    lastName,
    email,
    phone,
    referral,
    inquiry,
    message,
  ]);

  const postMessage = async () => {
    const messageData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      referral: referral,
      inquiry: inquiry,
      message: message,
    };

    await axios
      .post("http://localhost:4000/contact", messageData)
      .then((res) => setError(<p>{res.data}</p>));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    postMessage();
    setError("");
  };
  return (
    <>
      <div className='contact-container'>
        <form action='submit' className='contact-form'>
          <h2 className='contact-title'>Send us a message</h2>
          <div className='first-last-name-container'>
            <input
              type='text'
              className='contact-input-style'
              id='first-name'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.currentTarget.value);
              }}
            />
            <input
              type='text'
              className='contact-input-style'
              id='last-name'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.currentTarget.value);
              }}
            />
          </div>
          <div className='other-input-container'>
            <input
              type='email'
              className='contact-input-style'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
            <input
              type='tel'
              className='contact-input-style'
              id='phone'
              placeholder='Phone'
              value={phone}
              onChange={(e) => {
                setPhone(e.currentTarget.value);
              }}
            />
            <select
              name='referral'
              id='referral'
              className='contact-input-style'
              value={referral}
              onChange={(e) => {
                setReferral(e.currentTarget.value);
              }}
            >
              <option value={null} className='contact-option-tyle'>
                how did you hear about us
              </option>
              <option value='search engine' className='contact-option-tyle'>
                search engine
              </option>
              <option value='recommendation' className='contact-option-tyle'>
                recommendation from friend or colleague
              </option>
              <option value='social media' className='contact-option-tyle'>
                social media
              </option>
              <option value='news source' className='contact-option-tyle'>
                blog, publication or news outlet
              </option>
              <option value='other' className='contact-option-tyle'>
                other
              </option>
            </select>
            <select
              name='inquiry'
              id='inquiry'
              className='contact-input-style'
              value={inquiry}
              onChange={(e) => {
                setInquiry(e.currentTarget.value);
              }}
            >
              <option value={null} className='contact-option-tyle'>
                What services are you interested in
              </option>
              <option value='representation' className='contact-option-tyle'>
                representation
              </option>
              <option
                value='project management'
                className='contact-option-tyle'
              >
                project management
              </option>
              <option value='development' className='contact-option-tyle'>
                development
              </option>
            </select>
            <textarea
              type='text'
              className='contact-input-style'
              id='message'
              placeholder='We would love to gear from you
          '
              value={message}
              onChange={(e) => {
                setMessage(e.currentTarget.value);
              }}
            />
            <button
              className='btn-style'
              id='contact-submit'
              onClick={handleContactSubmit}
            >
              send message
            </button>
            {error}
          </div>
        </form>
      </div>
    </>
  );
}
export default ContactForm;
