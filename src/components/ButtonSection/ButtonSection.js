import React from 'react';


const ButtonSection = () => {
    
  return (
    <div className="flex flex-wrap gap-8 w-full justify-center py-40" data-aos="fade-up" data-aos-delay='800'>
      <button onClick={() => document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded w-full md:w-auto">
        VIEW PROJECTS
      </button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded w-full md:w-auto">
        VIEW RESUME
      </button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded w-full md:w-auto">
        EMAIL
      </button>
    </div>
  );
};

export default ButtonSection;
