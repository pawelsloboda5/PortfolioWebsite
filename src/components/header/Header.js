import React, { useState } from 'react';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <header className=" border border-gray-900 fixed top-0 left-0 right-0 z-50 bg-transparent" >
             <div className="max-w-6xl mx-10 px-4 mt-5 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center justify-center w-10 h-20 rounded-[14px] shadow-lg">
                    <span className="logo-3d font-montserrat mobile-logo">P</span>
                    <h1 className="text-white font-[Great-Vibes] custom-letter-spacing w-1/2 text-center text-xl translate-x-6 italic mobile-hide ">awel Sloboda
</h1>
                </div>
                <style>
                {`
                    .logo-3d {
                        color: white; /* Adjust the color */
                        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
                        font-size: 60px;
                        font-weight: bold;
                        font-family: 'Great Vibes', cursive;
                        transition: transform 0.3s ease-in-out;
                        animation: rotateY 3s infinite;
                    }
                    @keyframes rotateY {
                        0% { transform: rotateY(0deg); }
                        50% { transform: rotateY(180deg); }
                        100% { transform: rotateY(360deg); }
                    }
                    .logo-3d:hover {
                        animation: rotateY 3s infinite;
                    }
                `}
            </style>

                {/* Navigation Button (Hamburger Menu) */}
            <div className='relative pb-5 '>
                <button onClick={toggleDropdown} className="flex items-center justify-center w-50 h-20 rounded-[28px] bg-white shadow-gray-700 shadow-l  border-collapse border-black border-[10px] shadow-lg button-down">
                <div className="triangle-down shadow-slate-900 shadow-l bg-transparent mobile-responsive "></div>
                    <style>
                        {`
                            .triangle-down {
                                width: 0;
                                height: 0;
                                border-left: 40px solid transparent;
                                border-right: 40px solid transparent;
                                border-top: 38px solid black; /* Color and size of the triangle */
                               animation: bounce 4s infinite;
                            }
                            .button-down {
                                animation: bounce 4s infinite;
                            }
                            @keyframes bounce {
                                0%, 100% { transform: translateY(10px); }
                                
                                50% { transform: translateY(-5px); }
                               
                                
                            }
                        `}
                    </style>
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
