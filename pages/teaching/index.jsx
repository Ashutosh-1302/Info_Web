import React from 'react'
import { Carousel } from '../../components/Carousel'
import ResponsiveCarousel from '../../components/teaching/ResponsiveCarousel'
import postGraduteData from '../../data/postGraduteData'
import underGraduteData from '../../data/underGraduteData'
export default function index  ()  {

   
  return (
      <div className='w-auto flex flex-col gap-9 text-secondary-dark dark:text-secondary-light'>
          <div className="bg-[url('https://www.iitp.ac.in/~anup/assets/images/team_banner.png')] w-full h-[250px] bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover md:h-[350px]">
          <p className='flex justify-start items-end w-auto pt-5 pl-5 text-white font-bold text-[2rem]  '>Teaching</p>
      </div>
          
          <div className='px-8 flex flex-col gap-7'>
              <div className=' flex flex-row justify-between'>
                 <div className='font-semibold text-[2rem]'><p>Postgradute</p></div>
                 <div><a href='./postgradute_more'>View all</a></div>
              </div>
              
              <div className='bg-slate-300 h-0.5 w-auto'></div>
                 
                 <div className=''><ResponsiveCarousel courses={postGraduteData} type="postGradute" /></div>
          </div>
          
          <div className='px-8 flex flex-col gap-7'>
              <div className=' flex flex-row justify-between'>
                 <div className=' font-semibold text-[2rem]'><p>Undergradute</p></div>
                 <div><a href='./undergradute_more'>View all</a></div>
              </div>
              
              <div className='bg-slate-300 h-0.5 w-auto'></div>
                 <div>
                 <div><ResponsiveCarousel courses={underGraduteData} type="underGradute" /></div>
               </div>
          </div>
          
    </div>
  )
}
