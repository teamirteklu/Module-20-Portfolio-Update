import React from 'react';
import '../styles/app.css';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>

      <div className='container'>
        <form className='form'>
          <div className='nameInput'>
            <label for='firstName'>First Name</label>

            <input
              type='text'
              name='firstName'
              className='firstName'
              tabIndex='1'
            />

            <label for='lastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              className='lastName'
              tabIndex='2'
            />

            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              tabIndex="3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}