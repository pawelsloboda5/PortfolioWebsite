import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderSection from '../HeaderSection/HeaderSection';
import ButtonSection from '../ButtonSection/ButtonSection';
import FeatureSection from '../FeatureSection/FeatureSection';
import TechCardSection from '../TechCardSection/TechCardSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';

const Body = () => {

    useEffect(() => {
        // Initialize AOS
        AOS.init({ duration: 3000, once: true });
    }, []);

    return (
        <div className="body-container bg-transparent max-w-6xl mx-auto px-8 py-40 ">
            {/* Main Content Section */}
            <HeaderSection />
            {/* Buttons Section */}
            <ButtonSection />
            {/* Features Section */}
            <h1 className='text-7xl font-bold mb-10 text-white' data-aos='fade-up'>You're Safe And in Good Hands</h1>
            <p className='text-[30px] text-center text-gray-400 mb-4 md:w-200 py-6 mobile-text' data-aos='fade-up'>
                Customer satisfaction comes first, and in order to do that I decided to pickup skills and principles to provide quality service.
            </p>
            <FeatureSection />
            {/* Technology Cards Section */}
            <TechCardSection />
            {/* Projects Section */}
            <ProjectsSection />
        </div>
    );
};

export default Body;
