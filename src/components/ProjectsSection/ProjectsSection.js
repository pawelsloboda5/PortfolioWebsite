import React from 'react';
import ProjectSlider from './ProjectSlider';
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
    <div id="projects-section" className="py-20">
      <div className='text-center mb-20' data-aos="fade-down">
        <h1 className='text-5xl font-bold text-white'>Projects</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-20' data-aos='fade-left'>
        <ProjectSlider images={discordImages} settings={settings} />
        <div className="project-description bg-gray-700 p-4 text-left max-w-md rounded-lg shadow-lg">
          <h2 className='text-2xl font-bold text-white mb-3'>Discord Stock News Scrape Bot</h2>
          <p className='text-white'>
            Employed the BeautifulSoup library to extract visible text from HTML elements of various websites.
            Conducted regular expression searches to identify keywords associated with positive and negative sentiments.
            Leveraged the Discord webhook API to deliver real-time data updates to subscribed members.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-10' data-aos='fade-right'>
        <ProjectSlider images={algoImages} settings={settings} />
        <div className="project-description bg-gray-700 p-4 text-left max-w-md rounded-lg shadow-lg">
          <h2 className='text-2xl font-bold text-white mb-3'>Discord Stock Algo Bot</h2>
          <p className='text-white'>
            Created an algorithmic trading bot that leverages the Discord API to deliver real-time stock data to subscribed members.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
