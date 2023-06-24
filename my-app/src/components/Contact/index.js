import React, { useRef, useState, useEffect} from 'react';
import { Alert, AlertIcon } from "@chakra-ui/react";
import './index.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const refForm = useRef();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Set the duration in milliseconds (e.g., 3000ms = 3 seconds)

      // Clean up the timeout if the component unmounts or showAlert changes
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_vkpn931',
      'template_oviuacn',
      refForm.current,
      'GqUN2MtW1AXu31Id0'
    ).then(
      (response) => {
        console.log('Email response:', response);
        setShowAlert(true); // Show the alert
      },
      (error) => {
        console.error('Email sending error:', error);
        alert('Failed to send the message, please try again');
      }
    );
  }

  return (
    <div className="contactPage">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <form ref={refForm} onSubmit={handleSubmit}>
          <div className='d-flex1'>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className='d-flex2'>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea placeholder="Message" name="message" required></textarea>
          </div>
          <input className='send-btn' type="submit" value="SEND" />
        </form>
      </div>

      {showAlert && (
       <Alert status='success' bg='green.500' opacity='0.9' color='white'>
       <AlertIcon boxSize='30px' mr={2} />
       Email has been successfully sent!
     </Alert>
      )}
    </div>
  );
}

export default Contact;
