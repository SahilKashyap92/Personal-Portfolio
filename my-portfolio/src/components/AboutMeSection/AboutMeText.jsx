import React from 'react'

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10 ">About Me</h2>
      <p className="text-white ">Hi, I’m Sahil Kashyap, a web developer focused on creating clean, responsive, and user-friendly websites. I am from Sitapur(Uttar Pradesh) and I have graduated in B.Tech.(CSE) from Invertis University, Bareilly. I enjoy turning ideas into functional digital experiences using modern web technologies. I value clean code, clear thinking, and continuous improvement, and I believe consistent effort leads to meaningful growth.</p>
      {/* <button  className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan ">My Projects</button> */}
    </div>
  )
}

export default AboutMeText
