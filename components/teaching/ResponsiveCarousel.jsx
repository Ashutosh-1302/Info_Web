import React from 'react';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Course } from './Course';

const ResponsiveCarousel = (props) => {
    const courses = props.courses;
    const type = props.type;
    const settings = {
        
        nextArrow:<FcNext />,
        prevArrow:<FcPrevious />,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
        responsive: [
            {
                breakpoint: 580,
                settings: {
                  centerMode:false,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
          
          {
            breakpoint: 850,
            settings: {
              centerMode:true,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 1200,
            settings: {
              
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              
            }
          }

        ]
      };
           

  

  return (
    <Slider {...settings}>
      {courses.map((course, index) => (
        <div key={index} className=''>
          <Course course={course} type={type} key={index}/>
        </div>
      ))}
    </Slider>
  );
};

export default ResponsiveCarousel;
