import React, { useRef } from 'react'
import { SkillsInfo } from '../../constant'
import Tilt from 'react-parallax-tilt';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const Skills = () => {
  const containerRef=useRef()
  
  useGSAP(()=>{
    const skillCards=gsap.utils.toArray('.skillTag')
    gsap.from(containerRef.current,{
      y:200,
      opacity:0,
      scale:0.2,
      transformOrigin:'center center',
      duration:0.5,
      ease:'power3.in',
      scrollTrigger:{
        trigger:containerRef.current,
        start:'top 140%',
        end:'bottom 130%',
        scrub:2,
        // markers:true
      },
    },
  ),
 gsap.set('.skillTag', { borderColor: "gray",boxShadow: "none" });
 const tl = gsap.timeline({ repeat: -1 });
  tl.to('.skillTag',{
    stagger:{
      each:1,
      repeat:1,
      yoyo:true
    },
      borderColor:'#8245ec',
      yoyo:true,
    duration:3,
    boxShadow: "0px 0px 15px 3px #8245ec",
    scale:1.0,
    ease:'back.in'
  })
  },{scope:containerRef})




  return (
    <section
    id="skills"
    ref={containerRef}
    className='py-24 pb-24 gpu-boost mt-25 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans'>
    {/* section title  */}
    <div className='text-center mb-8'>
        <h2 className='heading text-3xl sm:text-4xl font-bold text-white'>
            SKILLS
        </h2>
        <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2 '>
        </div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>A stack of technologies I explore and apply in development</p>
    </div>
    {/* skills list  */}
        <div className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full rounded-2xl 
        border-2 border-white/50 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
         <Tilt 
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}>
          <div className='grid grid-cols-2 md:grid-cols-3  gap-3 w-full'>
          {
            SkillsInfo.map((skill)=>(
              <div key={skill.id} className='skillTag scale-90 flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 md:py-2 md:px-2 text-center'>
                <img src={skill.logo} alt={`${skill.name} logo`}
                  className='w-6 h-6 sm:w-8 sm:h-8'/>
                <span className='text-gray-300 text-xs sm:text-sm'>{skill.name}</span>
              </div>
            ))
          }  
          </div>
          </Tilt>
        </div>
    </section>
  )
}

export default Skills