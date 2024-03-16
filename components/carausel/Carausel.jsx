
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function Carousel({ src }) {

    const [source, setSources] = useState(src);

    console.log("source: ",source);

    
    return (
        <>
            <Swiper
                spaceBetween={50}   
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=" w-[95%] md-[90%] lg:w-[50%] xl-[40%] 2xl:w-[40%] h-[90%]"
                // onSwiper={(swiper)=>console.log("this is swiper: ",swiper)}
            >
                {source.map(function (imgSrc) {

                    console.log("product of each img_url: ", imgSrc)
                    return (
                        <>
                            <SwiperSlide 
                            >
                                <div
                                    style={{backgroundColor:'white',"backgroundImage":`url(${imgSrc})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center',margin:'auto'}}
                                    className='w-[60%] sm:[w-50%] md:w-[53%] lg:w-[80%] xl:w-[90%] h-[15rem] sm:h-[20rem] lg:h-[20rem] xl:h-[30rem]'
                                ></div>
                                <div
                                ></div>
                            </SwiperSlide>
                        </>
                    )
                })}
            </Swiper>
        </>
    );
}