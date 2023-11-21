import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    return (
      <footer className=" bg-neutral-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-2xl font-bold">Pawel Sloboda</h2>
            <p>Creating kickass websites and apps with the latest technologies.</p>
          </div>
  
          <div className="mb-6 md:mb-0">
            <h3 className="text-white text-xl mb-2">Quick Links</h3>
            <ul>
              <li><a href="#projects" onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}>Projects</a></li>
              <li><a href="#about">About</a></li>
              {/* Add other links as needed */}
            </ul>
          </div>
  
          <div className="mb-6 md:mb-0">
            <h3 className="text-white text-xl mb-2">Follow Me</h3>
            {/* Insert social media links here */}
            <a href="https://github.com/pawelsloboda">GitHub</a>
            {/* More social links */}
          </div>
  
          <div>
            <h3 className="text-white text-xl mb-2">Contact</h3>
            <p>Email: contact@pawelsloboda5@gmail.com</p>
            {/* Additional contact info */}
          </div>
        </div>
  
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; {new Date().getFullYear()} Pawel Sloboda. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  