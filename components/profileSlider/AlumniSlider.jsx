import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slideData from '../../data/alumniData';

const AlumniSlider = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, 
    centerMode: true,
    centerPadding: '30px', 
  };

  return (
    <div className="alumni-slider relative h-[550px] w-full overflow-hidden rounded-lg bg-red-800">
      <h2 className="text-3xl font-bold text-white text-center pt-8 mb-4">
        Our Students And Alumni
      </h2>

      <Slider {...settings}>
        {slideData.map((alumnus) => (
          <div key={alumnus.index}>
            <div className="slide w-full h-full flex flex-col items-center justify-center">
              <img
                src={alumnus.image}
                alt={alumnus.alt}
                className="w-[150px] h-[150px] rounded-full object-cover mb-4"
              />
              <div className="info text-center text-white">
                <h3 className="text-xl font-bold mb-2">{alumnus.name}</h3>
                <p className="text-lg font-semibold mb-2">{alumnus.position}</p>

                <div className="flex flex-col items-center">
                  <p className="text-sm mb-1">Email ID: {alumnus.email}</p>
                  <p className="text-sm">Phone: {alumnus.tel}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlumniSlider;
