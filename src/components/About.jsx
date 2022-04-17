import React from 'react';
import aboutimage from '../images/about.png';

const About = () => {
  return (
    <div id="about">
        <div className="about-image">
            <img src={aboutimage} alt="" />
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum praesentium minima distinctio, pariatur neque iure voluptates in odit ut assumenda molestiae quo labore nisi.</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About;