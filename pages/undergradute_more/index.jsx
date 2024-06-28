import React from 'react'
import { useState,useEffect } from 'react';
import underGraduteData from '../../data/underGraduteData'
import { CourseDetail } from '../../components/teaching/CourseDetail'
export default function index  (){

  const [selectedCourse,setSelectedCourse] = useState(0);

  useEffect(()=>{
    
     
  }, [selectedCourse]
  )

  function currentCourseHandler(id) {
     
     setSelectedCourse(id);
  }
  return (

   <div className='flex flex-col gap-5 text-secondary-dark dark:text-secondary-light'>
   <div className="bg-[url('https://www.iitp.ac.in/~anup/assets/images/team_banner.png')] w-full h-[250px] bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover md:h-[350px]">
       <p className='flex justify-start items-end w-auto pt-5 pl-5 text-white font-bold text-[2rem] '>Teaching</p>
    </div>

    <div  className='w-auto md:mx-16  md:flex'>
       <div className=' w-full  md:w-52 flex flex-col gap-2'> 
          
          {underGraduteData.map((course)=> {
              
              return (<div className={selectedCourse===course.id?"h-auto bg-black text-orange-800":"h-auto text-secondary-dark dark:text-secondary-light"}  key={course.id}><button className='p-3' onClick={()=>currentCourseHandler(course.id)} >{course.name}</button></div>)
          })}
       </div>
       
       <div className='md:ml-6 md:w-2/3  sm:w-full rounded-xl shadow-md p-4 h-auto'><CourseDetail course={underGraduteData[selectedCourse]} /></div>
    </div>
</div>
)
 }
