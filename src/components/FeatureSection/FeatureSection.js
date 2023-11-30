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
    <div className="features-container py-10">
      <FeatureItem 
        title="Continuous support"
        text="I will advance your web-based software to keep it efficient, competitive on the market. Using a well-established DevOps processes, It helps me roll out urgent updates within few hours and release new, planned functional modules every other week."
        aosType="fade-right"
        aosDelay="100"
      />
      <FeatureItem 
        title="Back-end development"
        text="I accurately implement the business logic of your web app on the back end. I always rely on proven frameworks to ensure fast and quality coding. And I build well structured APIs to integrate your web app with corporate or third-party systems and services."
        aosType="fade-up"
        aosDelay="500"
      />
      <FeatureItem 
        title="Frontend design/dev"
        text="As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies."
        aosType="fade-left"
        aosDelay="1000"
      />
    </div>
  );
};

export default FeatureSection;
