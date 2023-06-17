import React from 'react';
import Img from "../assets/about-img.jpg";
import '../styles/About.scss';
const About = () => {
  return (
    <div className="about">
      <div className="text-card">
        <span>About Us</span>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore voluptate adipisci illum quidem magni veritatis reprehenderit iste eius, nihil est praesentium ducimus et quos, placeat repudiandae enim dolor animi?
        </p>
        <button className='btn'>Sing Up for Free</button>
      </div>
      <img src={Img} alt="" />
    </div>
  );
};

export default About;