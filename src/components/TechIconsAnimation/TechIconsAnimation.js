import React from 'react';
import './TechIconsAnimation.scss';
import { ReactComponent as ReactIcon } from '../../assets/openai-logomark.svg';
import { ReactComponent as TailwindIcon } from '../../assets/openai-logomark.svg';
import { ReactComponent as SCSSIcon } from '../../assets/scss-logo.svg';
// Import other icons similarly



const TechIconsAnimation = () => {
  return (
    <div className="tech-icons-animation">
    
      <ReactIcon className="icon react" />
      <TailwindIcon className="icon tailwind" />
      <SCSSIcon className="icon scss" />
      {/* Add other icons similarly */}
    </div>
  );
};

export default TechIconsAnimation;
