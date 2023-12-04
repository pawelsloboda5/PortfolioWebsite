import React from 'react';
import profileImage from '../../assets/picForAdobe.jpg';

const HeaderSection = () => {
  return (
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between ">
        <div className="md:flex-2 space-y-6">
          <h1 className="text-6xl font-bold text-slate-200 mb-8 py-4 text-left" data-aos="fade-down" data-aos-delay='100'>
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
      
  );
};

export default HeaderSection;
