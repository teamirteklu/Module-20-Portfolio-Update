import React from 'react';
import '../styles/app.css';
import '../styles/self-image.css';

export default function About() {
  return (
    <div className='page-wrap'>
      <h1>About Page</h1>
      <div className='container'>
        <div className='img-container'>
          <img src="Assets/images/self-image.jpg" className="self-image"></img>
        </div>
        <div className='container'>
          <p>
            Hello! My name is Teamir Teklu and I'm an aspiring fullstack developer.
            I love writing stories, playing video games, and I plan on getting a cat soon!
            Besides all that, I have some coding experience in Java, JavaScript, CSS, and HTML.
            I am currently attending Denver University's Fullstack Coding Bootcamp and I hope this
            will be an interesting start into my career in coding! This is my protfolio and any projects I start will be listed here.
            Enjoy!
          </p>
        </div>
      </div>
    </div>
  );
}