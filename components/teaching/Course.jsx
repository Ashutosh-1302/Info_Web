import React from 'react'

export const Course = (props) => {
    const course = props.course;
    const type = props.type;
  return (
    <div class="flex flex-col mt-6  shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="h-56 overflow-hidden  shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
      src={course.img}
      alt="course-image" />
  </div>
  <div class="p-6 ">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {course.name}
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
    {course.discription.length>150?(course.discription.substring(0,150)+"..."):(course.discription)}
    </p>
  </div>
  <div className="p-6 ">
    {
       type==="postGradute" && <a
       href='./postgradute_more'
       className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
       type="button">
       Read More
     </a>
    }
    {
       type==="underGradute" && <a
       href='./postgradute_more'
       className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
       type="button">
       Read More
     </a>
    }
  </div>
</div>  
  )
}
