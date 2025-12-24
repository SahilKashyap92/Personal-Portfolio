import React from 'react'

const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
      <div className="shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
      <div className="shadow-cyanMediumShadow absolute top-[300px] left-0 opacity-50 -z-10"></div>
      <div className="shadow-orangeMediumShadow absolute top-[500px] left-0 opacity-50 -z-10"></div>
    </div>
  )
}

export default HeroGradient
