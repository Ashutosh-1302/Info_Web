
import React, { useEffect, useState } from 'react'
import { galleryData, galleryIdArray } from '../../data/galleryData';
import Image from 'next/image';

export default function Gallery() {

    const [activeEvent, setActiveEvent] = useState(1);

    

    return (
        <>

            <section className="py-2 sm:py-5 mt-1 sm:mt-4">
                <div className="text-center">
                    <p className="font-general-medium text-2xl sm:text-4xl mb-1 m-4 p-5 pb-12  text-ternary-dark dark:text-ternary-light">
                        Gallery
                    </p>
                </div>

                {/* Gallery Navbar */}
                <div className='font-general-medium m-0 sm:ml-4 mt-5 flex p-5 gap-5  justify-center items-center shadow-lg sm:shadow-none '>
                    {galleryData.map((ele) => {

                        return (
                            <>
                                <button
                                    className={`${activeEvent == ele.id ? "text-white p-4 rounded-[0.375rem] bg-red-800 ": "text-black"}  p-4 text-lg font-medium  dark:text-ternary-light    sm:mx-4 mb-2 sm:py-2 transition-all ease-in duration-75`}
                                    onClick={() => setActiveEvent(ele.id)}
                                >
                                    {ele.title}
                                </button>
                            </>
                        )
                    })}
                </div>

                {/* Gallery Pictures */}               

              <div>
              <div className='flex flex-wrap p-5 w-3/4 mx-auto'>
                {
                    galleryData.filter((ele) => (ele.id == activeEvent)).map((ele) => {

                        return ele.images.map((image,index) => {
                            return (
                                <div key={index} className='w-full md:w-1/3 p-5'>
                                    <Image
                                        src={image}
                                        alt={"Research Picture"}
                                        width={400}
                                        height={400}
                                        className="mb-4"
                                    />
                                </div>
                            )
                        })
                    })
                }
                </div>
              </div>


            </section>



        </>
    )

}



// galleryData.map((ele)=>{

//     return(
//         <Image 
//         src={ele.images[0]} 
//         alt={"Research Picture"} 
//         width={400} 
//         height={400}  
//         className="p-5 w-auto mb-4 md:mb-0 md:mr-4"
//         />
//     )
// })