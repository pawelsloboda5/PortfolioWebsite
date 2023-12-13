import React, { useEffect, useState, useRef } from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderSection from '../HeaderSection/HeaderSection';
import ButtonSection from '../ButtonSection/ButtonSection';
import FeatureSection from '../FeatureSection/FeatureSection';
import TechCardSection from '../TechCardSection/TechCardSection';
import ProjectsSection from '../ProjectsSection/ProjectsSection';
import CubeBackground from '../CubeBackground/CubeBackground';

const Body = () => {
    const bodyRef = useRef(null);
    const [actualBounds, setActualBounds] = useState({ width: 1, height: 1 });

    useEffect(() => {
        const horizontalPadding = 40; // 20px on each side
        const verticalPadding = 80; // 40px on each side

        const updateBounds = () => {
            if (bodyRef.current) {
                const rect = bodyRef.current.getBoundingClientRect();
                setActualBounds({
                    width: rect.width - horizontalPadding,
                    height: rect.height - verticalPadding
                });
            }
        };

        updateBounds(); // Initial calculation

        

        // Initialize AOS
        AOS.init({ duration: 1000, once: true });

        // Cleanup
        return () => {
            window.removeEventListener('resize', updateBounds);
           
        };
    }, []);

    return (
        <div ref={bodyRef} className="body-container">
            <CubeBackground bounds={actualBounds} />
            <HeaderSection />
            <FeatureSection />
            <TechCardSection />
            <ProjectsSection />
        </div>
    );
};

export default Body;
