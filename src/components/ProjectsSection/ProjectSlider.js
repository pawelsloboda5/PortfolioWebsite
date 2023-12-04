import React from 'react';
import Slider from 'react-slick';

const ProjectSlider = ({ images, settings }) => (
  <div className="h-96 w-full rounded-xl overflow-hidden">
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} className="h-full w-full object-cover" alt={`Project ${index}`} />
        </div>
      ))}
    </Slider>
  </div>
);

export default ProjectSlider;
