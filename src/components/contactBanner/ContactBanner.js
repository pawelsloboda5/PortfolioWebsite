import React, { useRef, useEffect, useState } from 'react';
import './ContactBanner.css'; // Make sure to import the CSS file

const ContactBanner = () => {
    const bannerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Only trigger once the element is within the viewport
                setIsVisible(entries[0].isIntersecting);
            },
            { threshold: 1 } // Trigger when 100% of the element is visible
        );

        if (bannerRef.current) {
            observer.observe(bannerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={`contact-banner-container ${isVisible ? 'expand' : ''}`} ref={bannerRef}>
            <div className="contact-content">
                <h2>What's holding you back? Send me a message!</h2>
                <button className="contact-btn">CONTACT</button>
            </div>
        </div>
    );
};

export default ContactBanner;
