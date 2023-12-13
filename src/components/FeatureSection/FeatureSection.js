import React from 'react';


const FeatureItem = ({ title, text, aosType, aosDelay }) => (
  <div className="feature-item" data-aos={aosType} data-aos-delay={aosDelay}>
    <div className="feature-icon">
      {/* Replace with actual icon component or img tag */}
      <i className="fas fa-tools"></i>
    </div>
    <h2 className="feature-title">{title}</h2>
    <p className="feature-text">{text}</p>
  </div>
);

const FeatureSection = () => {
  
  return (
    <div className="features-container " data-aos="fade-down" >
      <h1 className=' text-7xl text-center font-bold  text-white'  data-aos='fade-down'  >You're Safe And in Good Hands</h1>
            <p className=' text-[30px] text-center text-gray-400  ' data-aos='fade-right' >
                Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service.
            </p>
      <FeatureItem 
        title="Continuous support"
        text="I will advance your web-based software to keep it efficient, competitive on the market. Using a well-established DevOps processes, It helps me roll out urgent updates within few hours and release new, planned functional modules every other week."
        
      />
      <FeatureItem 
        title="Back-end development"
        text="I accurately implement the business logic of your web app on the back end. I always rely on proven frameworks to ensure fast and quality coding. And I build well structured APIs to integrate your web app with corporate or third-party systems and services."
        
      />
      <FeatureItem 
        title="Frontend design/dev"
        text="As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies."
        
      />
    </div>
  );
};

export default FeatureSection;
