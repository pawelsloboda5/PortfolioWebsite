import React from 'react';
import '../../css/techCardSection.css';
import javascriptlogo from '../../assets/JavaScript-logo.png';
import reactLogo from '../../assets/React-icon.svg.png';
import tailwindLogo from '../../assets/tailwind-logo.png';
import scssLogo from '../../assets/scss-logo.svg';
import javaLogo from '../../assets/java-logo.png';
import pythonLogo from '../../assets/python-logo.png';
import chromeLogo from '../../assets/chrome-logo.png';
import discordLogo from '../../assets/discord-logo.svg';
import openAiLogo from '../../assets/openai-logomark.svg';

const TechCard = ({ src, alt, text }) => (
  <div className="tech-image text-center text-gray-500 shadow-xl rounded-xl p-2">
    <img src={src} className="h-20 w-20 mx-auto rounded-xl" alt={alt} />
    <p className="mt-2">{text}</p>
  </div>
);

const TechCardSection = () => {
  return (
    
      <div className="tech-container text-center font-bold py-20">
        <h1 className='text-5xl font-bold mb-10 text-white' data-aos='fade-down'>Tools of the Future</h1>
        <h1 className='text-2xl font-bold mb-10 text-gray-500' data-aos='fade-up'>Frontend technologies I prefer using</h1>
        <div className='tech-Div flex flex-wrap justify-center ' data-aos='fade-up' data-aos-delay='100'>
          <TechCard src={javascriptlogo} alt="JavaScript" text="JavaScript" />
          <TechCard src={reactLogo} alt="React" text="React" />
          <TechCard src={tailwindLogo} alt="Tailwind CSS" text="TailwindCSS" />
          <TechCard src={scssLogo} alt="SCSS" text="SCSS" />
        </div>
        <h1 className='text-2xl font-bold mb-10 text-gray-500' data-aos='fade-down' data-aos-delay='150'>Other technologies I work with</h1>
        <div className='tech-Div flex flex-wrap justify-center gap-20' data-aos='fade-down' data-aos-delay='200'>
          <TechCard src={javaLogo} alt="Java" text="Java"/>
          <TechCard src={pythonLogo} alt="Python" text="Python" />
          <TechCard src={chromeLogo} alt="Chrome API" text="ChromeAPI" />
          <TechCard src={discordLogo} alt="Discord API" text="DiscordAPI" />
          <TechCard src={openAiLogo} alt="OpenAI" text="OpenAI" />
        </div>
      </div>
    
  );
};

export default TechCardSection;
