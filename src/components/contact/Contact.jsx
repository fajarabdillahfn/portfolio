import { useState } from 'react';
import './contact.scss';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const SERVICE_ID = 'service_mg77hxn';
  const TEMPLATE_ID = 'template_1o0weff';
  const USER_ID = 'user_2PpEeeIxGAot2PoRmxQNw';

  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setMessage(true);

    e.target.reset();
  };
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' name='from_name' />
          <textarea placeholder='Message' name='message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
