import React, { useState } from 'react';
import '../../scss/header.scss';


const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className="header" >
             <div className="max-width-container">
                <div className="flex items-center justify-center w-10 h-20 ">
                    <span className="logo-3d">P</span>
                    <h1 className="text-white font-[Great-Vibes] custom-letter-spacing text-center italic  ">awel Sloboda</h1>
                </div>

                {/* Navigation Button (Hamburger Menu) */}
                <div>
                <button onClick={toggleDropdown}  className="buttonStyle flex items-center justify-center ">
                <h1 className="">Resume</h1>
                
                </button>
                 {/* Dropdown Menu */}
                 {isDropdownOpen && (
                    <div className="absolute top-full right-0 bg-white shadow-md rounded-md mt-2 py-2 w-48 button-down">
                        {/* Dropdown menu items */}
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Menu Item 1</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Menu Item 2</a>
                        {/* Add more items as needed */}
                    </div>
                )}
            </div>
        </div>
            
        </header>
    );
};

export default Header;
