import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProjects from './SingleProjects'
import {motion} from 'framer-motion';
import {fadeIn} from "../../FramerMotion/Variants"
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const projects = [
  {
    name: "AI Component Generator",
    year: "Nov 2025",
    align: "right",
    icon: FaReact ,
    icons: RiTailwindCssFill,
    image: "../../public/Images/AiCom.png",
    link: "https://aicomgen.netlify.app/",
  },
  {
    name: "World Atlas",
    year: "June 2025",
    align: "left",
    icon: FaReact ,
    icons: RiTailwindCssFill,
    image: "../../public/Images/WorldAtlas.png",
    link: "https://worldatlasbysk.netlify.app/",
  },
  {
    name: "Razorpay Webpage Clone",
    year: "Jan 2025",
    align: "right",
    icon: FaHtml5 ,
    icons: RiTailwindCssFill,
    image: "../../public/Images/Razorpay.png",
    link: "https://razorpayclonebysk.netlify.app/",
  },
  {
    name: "QR Code Generator",
    year: "Oct-2024",
    align: "left",
    icon: FaHtml5 ,
    icons: IoLogoJavascript,
    image: "../../public/Images/QRGen.png",
    link: "https://qrgeneratorbysk.netlify.app/",
  },
]

const ProjectsMain = () => {
  return (
    <div id='projects' className="max-w-[1200px] mx-auto px-4 ">
      <motion.div
       variants={fadeIn('down',0.2)}
       initial='hidden'
       whileInView='show'
       viewport={{once: false, amount:0}}
      >
       <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12 ">
        {projects.map((item,index)=>{
          return <SingleProjects key={index} logoSvgS={<item.icons/>} logoSvg={<item.icon />} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>
        })}
      </div>
    </div>
  )
}

export default ProjectsMain
