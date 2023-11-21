import React, { useEffect } from 'react';


const CursorCircle = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const circle = document.getElementById('cursor-circle');
            const x = e.clientX;
            const y = e.clientY;
            circle.style.left = x + 'px';
            circle.style.top = y + 'px';
        };
        
        const changeColor = (hovering) => {
            const circle = document.getElementById('cursor-circle');
            circle.style.borderColor = hovering ? '#A020F0' : '#ADD8E6'; // Change border color instead of background for hollow circle
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Add event listeners to text elements
        const textElements = document.querySelectorAll('.text-element'); // Replace with your actual text elements' selector
        textElements.forEach(element => {
            element.addEventListener('mouseenter', () => changeColor(true)); // Replace 'new-color' with the color you want
            element.addEventListener('mouseleave', () => changeColor(false)); // Replace 'original-color' with the circle's original color
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            textElements.forEach(element => {
                element.removeEventListener('mouseenter', () => changeColor(true));
                element.removeEventListener('mouseleave', () => changeColor(false));
            });
        };
    }, []);

    return <div id="cursor-circle" className='mobile-hide'></div>;
};

export default CursorCircle;
