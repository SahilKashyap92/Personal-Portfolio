import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import {fadeIn} from "../../FramerMotion/Variants"

const experiences = [
  {
    job: "Front-End Developer Internship",
    company: "CodeAlpha",
    date: "Nov-2024",
    resposibilities: ["Gained hands-on experience with HTML, CSS, and JavaScript to create clean and structured web pages.", "Used GitHub for managing project code.", "Built small projects to apply concepts and improve practical coding skills."]
  },
  {
    job: "Web Development",
    company: "IBM",
    date: "Feb-2025",
    resposibilities: ["Completed course of web development by IBM.", "Gained strong fundamentals of web development.", "Improved understanding of responsive design.","Learned Deployment of projects."]
  },
  {
    job: "Full Stack Web Developer",
    company: "EduSkills Academy",
    date: "April 2025 - June 2025",
    resposibilities: ["Completed virtual internship as a full stack developer.", "Gained experience in server-side development, APIs, and database integration.", "Strengthened problem-solving skills by debugging and optimizing code."]
  },
]

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-around">
      {experiences.map((experience,index)=>{
        return (
          <>
           <SingleExperience key={index} experience={experience}  />
           {index<2 ? (
            <motion.div
             variants={fadeIn('right',0.2)}
             initial='hidden'
             whileInView='show'
             viewport={{once: false, amount:0}}
            >
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
        ) : (" ")}
          </>
        );
      })}
    </div>
  )
}

export default AllExperience
