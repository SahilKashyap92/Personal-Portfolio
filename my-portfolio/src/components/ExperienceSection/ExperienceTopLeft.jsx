import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">Since 2023</p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Year" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="30" text="Projects"  />
      </div>
      <p className="text-center text-white">Learning Web Development Since 2023. Focusing on building dynamic and user-friendly web applications.</p>
    </div>
  )
}

export default ExperienceTopLeft
