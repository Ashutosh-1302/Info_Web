import React from 'react'

export const CourseDetail = ({course}) => {
  return (
    <div className='flex flex-col gap-5'>

      <div className='uppercase  font-semibold'>{course.name}</div>
      <div className='w-auto h-auto '><img src={course.img}/></div>
      <div className=''>{course.discription}</div>
    </div>
  )
}
