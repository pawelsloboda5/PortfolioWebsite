import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import profileImage from '../../assets/picForAdobe.jpg';
import javascriptlogo from '../../assets/JavaScript-logo.png';
import reactLogo from '../../assets/React-icon.svg.png';
import tailwindLogo from '../../assets/tailwind-logo.png';
import scssLogo from '../../assets/scss-logo.svg';
import javaLogo from '../../assets/java-logo.png';
import pythonLogo from '../../assets/python-logo.png';
import chromeLogo from '../../assets/chrome-logo.png';
import discordLogo from '../../assets/discord-logo.svg';
import openAiLogo from '../../assets/openai-logomark.svg';
import discordProject1 from '../../assets/discord-project-1.png';
import discordProject2 from '../../assets/discord-project-2.png';
import discordProject3 from '../../assets/discord-project-3.png';
import algoProject1 from '../../assets/algo-project-1.png';
import algoProject2 from '../../assets/algo-project-2.png';
import algoProject3 from '../../assets/algo-project-3.png';
import algoProject4 from '../../assets/algo-project-4.png';
import algoProject5 from '../../assets/algo-project-5.png';
import algoProject6 from '../../assets/algo-project-6.png';


const TechCard = ({ src, alt, text }) => (
  <div className="text-center text-gray-500 shadow-xl rounded-xl p-2 bg-slate-900">
    <img src={src} className="h-20 w-20 mx-auto rounded-xl" alt={alt} />
    <p className="mt-2">{text}</p>
  </div>
);

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

const images = [discordProject1, discordProject2,discordProject3];
const images2 = [algoProject1, algoProject2, algoProject3, algoProject4, algoProject5, algoProject6];
const Body = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 3000, once: true });

        // Set up the image transition interval
        const interval = setInterval(() => {
            const nextIndex = (imageIndex + 1) % images.length;
            setImageIndex(nextIndex);
            setCurrentImage(images[nextIndex]);
        }, 3000);
  // Clean up the interval when the component is unmounted
  return () => clearInterval(interval);
}, [imageIndex]);
const nextImageIndex = (imageIndex + 1) % images.length;
const nextImage = images[nextImageIndex];

  return (
    <div className="body-container bg-transparent max-w-6xl mx-auto px-4 py-40 ">
      {/* Main Content Section */}
      <div data-aos="fade-down">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between ">
          <div className="md:flex-2 space-y-6">
            <h1 className="text-6xl font-bold text-slate-200 mb-4 py-4 text-left" data-aos="fade-down" data-aos-delay='100'>
              Full Stack Developer For Your Brand
            </h1>
            <p className="text-[30px] text-left text-gray-400 mb-4 md:w-200 py-6 mobile-text"data-aos="fade-up" data-aos-delay='300'>
              Hey there! Call me Pawel Sloboda. I enjoy creating kickass websites and web/mobile apps, ones that suit your desires and needs using the latest technologies and cleanest design patterns.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end md:ml-8 shadow-xl" data-aos="fade-left" data-aos-delay='500'>
            <img src={profileImage} alt="Pawel Sloboda" className="w-64 h-64 rounded-xl border-4 border-gray-900 mb-4 " />
            <p className="text-gray-400 italic text-center md:text-right md:w-3/4">
              "Many ideas grow better when transplanted into another mind than the one where they sprang up." - Oliver Wendell Holmes
            </p>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap gap-8 w-full justify-center py-40" data-aos="fade-up" data-aos-delay='800'>
        <button  onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded w-full md:w-auto">
          VIEW PROJECTS
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded w-full md:w-auto">
          VIEW RESUME
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded w-full md:w-auto">
          EMAIL
        </button>
      </div>
      
      <h1 className='text-7xl font-bold mb-10 text-white' data-aos='fade-up'>You're Safe And in Good Hands</h1>
      <p className='text-[30px] text-center text-gray-400 mb-4 md:w-200 py-6 mobile-text' data-aos='fade-up'>Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service.</p>
  
  <div className="features-container py-10" >
        
  <div className="feature-item" data-aos='fade-right' data-aos-delay='100'>
    <div className="feature-icon">
      {/* Replace with actual icon component or img tag */}
      <i className="fas fa-tools"></i>
    </div>
    <h2 className="feature-title">Continuous support</h2>
    <p className="feature-text">
    I will advance your web-based software to keep it efficient, competitive on the market. Using a well-established DevOps processes, It helps me roll out urgent updates within few hours and release new, planned functional modules every other week.
    </p>
    
  </div>
  <div className="feature-item " data-aos='fade-up' data-aos-delay='500'>
    <div className="feature-icon">
      {/* Replace with actual icon component or img tag */}
      <i className="fas fa-tools"></i>
    </div>
    <h2 className="feature-title">Back-end development</h2>
    <p className="feature-text">
    I accurately implement the business logic of your web app on the back end. I always rely on proven frameworks to ensure fast and quality coding. And I build well structured APIs to integrate your web app with corporate or third-party systems and services
    </p>
    
  </div>
  <div className="feature-item " data-aos='fade-left' data-aos-delay='1000' data-aos->
    <div className="feature-icon">
      {/* Replace with actual icon component or img tag */}
      <i className="fas fa-tools"></i>
    </div>
    <h2 className="feature-title">Frontend design/dev</h2>
    <p className="feature-text">
    As a web expert I tend to closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, I push to bring it to life with smart front-end technologies.
    </p>
    
  </div>
  
</div>


      {/* Technology Cards Section */}
      <div>
        <div className="text-center font-bold py-20">
          <h1 className='text-5xl font-bold mb-10 text-white' data-aos='fade-down'>Tools of the Future</h1>
          <h1 className='text-2xl font-bold mb-10 text-gray-500' data-aos='fade-up'>Frontend technologies I prefer using</h1>
          <div className='flex flex-wrap justify-center gap-20 mb-10' data-aos='fade-up' data-aos-delay='100'>
            <TechCard src={javascriptlogo} alt="JavaScript" text="JavaScript" />
            <TechCard src={reactLogo} alt="React" text="React" />
            <TechCard src={tailwindLogo} alt="Tailwind CSS" text="TailwindCSS" />
            <TechCard src={scssLogo} alt="SCSS" text="SCSS" />
          </div>
          <h1 className='text-2xl font-bold mb-10 text-gray-500' data-aos='fade-down' data-aos-delay='150'>Other technologies I work with</h1>
          <div className='flex flex-wrap justify-center gap-20' data-aos='fade-down' data-aos-delay='200'>
            <TechCard src={javaLogo} alt="Java" text="Java"/>
            <TechCard src={pythonLogo} alt="Python" text="Python" />
            <TechCard src={chromeLogo} alt="Chrome API" text="ChromeAPI" />
            <TechCard src={discordLogo} alt="Discord API" text="DiscordAPI" />
            <TechCard src={openAiLogo} alt="OpenAI" text="OpenAI" />
          </div>
        </div>

        <div data-aos="fade-right">
    <div className='text-center pt-40' id="projects-section">
        <h1 className='text-5xl font-bold mb-10 text-white'>Projects</h1>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center md:justify-start py-10 gap-8 relative mobile-responsive'>
        <div className="h-96 w-96 rounded-xl overflow-hidden">
        <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index}>
                            <img src={img} className="h-full w-full object-cover" alt={`Project ${index}`} />
                        </div>
                    ))}
                </Slider>
                </div>
            <div className="bg-gray-700 font-mono p-4 text-left max-w-2xl z-10 relative -ml-20 md:-ml-20 mobile-responsive">
                <h1 className='text-2xl font-bold mb-1 text-black text-center'>Discord Stock News Scrape Bot</h1>
                <p className='px-5 py-2 text-[18px] text-left text-black mb-1 md:w-200 font-mono'>
                    Employed the BeautifulSoup library to extract visible text from HTML elements of various websites.
                    Conducted regular expression searches to identify keywords associated with positive and negative sentiments.
                    Leveraged the Discord webhook API to deliver real-time data updates to subscribed members.
                </p>
                <div className='flex justify-between items-center mt-2'>
                  <div className='flex items-center'>
                      <img src={pythonLogo} className='h-12 mx-4 logo-circle spin' />
                      <img src={discordLogo} className='h-10 mx-4 logo-circle spin' />
                      <img src={openAiLogo} className='h-10 mx-4 logo-circle spin' />
                      </div>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">Link</button>
                </div>
                
            </div>
        </div>
</div>

<div data-aos="fade-left">
    <div className='text-center' >
      
        <div className='flex flex-col md:flex-row-reverse items-center justify-center md:justify-start py-10 gap-8 relative'>
        <div className="h-96 w-96 rounded-xl overflow-hidden ">
        <Slider {...settings}>
                    {images2.map((img, index) => (
                        <div key={index}>
                            <img src={img} className="h-full w-full object-cover" alt={`Project ${index}`} />
                        </div>
                    ))}
                </Slider>
                </div>
            <div className="bg-gray-700 p-4 text-left max-w-2xl z-10 relative -mr-20 md:-mr-20 mobile-responsive">
                <h1 className='text-2xl font-bold font-mono mb-1 text-black text-center'>Discord Stock Algo Bot</h1>
                <p className='px-5 py-2 text-[18px] text-left text-black mb-1 md:w-200 font-mono'>
                    Created an algorithmic trading bot that leverages the Discord API to deliver real-time stock data to subscribed members.
                </p>
                <div className='flex justify-between items-center mt-2'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">Link</button>
                  <div className='flex items-center'>
                      <img src={pythonLogo} className='h-12 mx-4 logo-circle spin' />
                      <img src={discordLogo} className='h-10 mx-4 logo-circle spin' />
                      <img src={openAiLogo} className='h-10 mx-4 logo-circle spin' />
                      </div>
                      
                </div>
            </div>
        </div>
    </div>
</div>





      </div>
    </div>
  );
};

export default Body;
