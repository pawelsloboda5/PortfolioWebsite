// HeaderSection.js
import React from 'react';
import '../../css/headerSection.css';
import profileImage from '../../assets/adobePic.png';

const HeaderSection = () => {
  const resumeUrl = "https://github.com/pawelsloboda5/Resume/blob/main/pawelsloboda-resume.pdf";

  return (
    <div className="header-section">
      <div className="text-content">
        <h1 className="text-6xl font-bold text-slate-200 text-left" data-aos="fade-down" data-aos-delay='100'>
          Full Stack Developer For Your Brand
        </h1>
        <p className="text-[30px] text-left text-white mb-4 md:w-200 py-6 mobile-text" data-aos="fade-up" data-aos-delay='300'>
          Hey there! Call me Pawel Sloboda. I enjoy creating kickass websites and web/mobile apps, ones that suit your desires and needs using the latest technologies and cleanest design patterns.
        </p>
        <div className="button-container" data-aos="fade-up" data-aos-delay='800'>
          <button onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })}>
            VIEW PROJECTS
          </button>
          <button onClick={() => window.open(resumeUrl, '_blank')}>
            VIEW RESUME
          </button>
          <button>
            EMAIL
          </button>
        </div>
      </div>
      <div className="image-content" data-aos="fade-left" data-aos-delay='500'>
        <img src={profileImage} alt="Pawel Sloboda" className="w-64 h-90 " />
      </div>
    </div>
  );
};

export default HeaderSection;
