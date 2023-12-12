import React from 'react';
import '../../css/projectsSection.css';
import ProjectSlider from './ProjectSlider';
import heroBackgroundImage from '../../assets/hero-background.jpg';
import discordProject1 from '../../assets/discord-project-1.png';
import discordProject2 from '../../assets/discord-project-2.png';
import discordProject3 from '../../assets/discord-project-3.png';
import algoProject1 from '../../assets/algo-project-1.png';
import algoProject2 from '../../assets/algo-project-2.png';
import algoProject3 from '../../assets/algo-project-3.png';
import algoProject4 from '../../assets/algo-project-4.png';
import algoProject5 from '../../assets/algo-project-5.png';
import algoProject6 from '../../assets/algo-project-6.png';

const settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  vertical: true
};

const discordImages = [discordProject1, discordProject2, discordProject3];
const algoImages = [algoProject1, algoProject2, algoProject3, algoProject4, algoProject5, algoProject6];

const ProjectsSection = () => {
  return (
    <div className="projects-container">
      <div className='hero-background' ></div>
      
      <h1 className='section-title'>Projects</h1>
      <div className='project-grid'>
        <div className='project-item' data-aos='fade-up'>
          <ProjectSlider images={discordImages} settings={settings} />
          <div className="project-description">
            <h2>Discord Stock News Scrape Bot</h2>
            <p>
              Employed the BeautifulSoup library to extract visible text from HTML elements of various websites...
            </p>
          </div>
        </div>
        <div className='project-item' data-aos='fade-up'>
          <ProjectSlider images={algoImages} settings={settings} />
          <div className="project-description">
            <h2>Discord Stock Algo Bot</h2>
            <p>
              Created an algorithmic trading bot that leverages the Discord API to deliver real-time stock data...
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectsSection;
