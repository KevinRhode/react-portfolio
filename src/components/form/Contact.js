import React, { useState } from 'react';
// import './style.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty 
  
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the password.
    }
    if (!userName) {
      setErrorMessage(
        'Please enter a Name, thank you.'
      );
      return;
    }
    // alert(`Hello ${userName}`);
    if (!message) {
      setErrorMessage(
        'Please enter a Message'
      );
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div style={{padding:'1rem',flexGrow:'1'}}>      
      <form className="form" style={{display:'flex',flexDirection:'column',margin:'0.5rem'}}>
      <input
          value={userName}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder=" Name"

        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder=" Email"
        />
       
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}          
          rows="5"
          placeholder=" ATTENTION:EMAILS HAVE NOT BE FINISHED PLEASE DO NOT EXPECT AN ANSWER FROM YOUR MESSAGES"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
