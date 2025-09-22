import React, { useRef, useState } from 'react'
import { projects } from '../../constant'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)
const Work = () => {

  
const containerRef=useRef()

useGSAP(() => {
  const cards = gsap.utils.toArray(".container-card")
  cards.forEach((card, i) => {
    let fromVars = { opacity: 0, scale: 0.8 };

    if (i % 2 === 0) {
      fromVars.x = -400; // left
    } else {
      fromVars.x = 400;  // right
    }
    gsap.from(card,{
      ...fromVars,
      duration:0.3,
     ease:'power2.out',
      scrollTrigger: {
        trigger: card,
        start: "top 130%",    
        end: "bottom 90%",    
        scrub: 2,
        // markers: true
      }
      })
  })
  gsap.to(".skill-tab", {
   duration: 4,
   repeat: -1,
   motionPath: {
    path: [
      { x: 0, y: 0 ,},
      { x: -100, y: 0 },
      { x: -200, y: 0 },
      { x: -300, y: 100 },
      { x: 300, y: 200 },
      { x: 300, y: 200 },
      { x: 100, y: 100 },
      { x: 50, y: 0 },
      { x: 0, y: 0 }
    ],
    curviness: 1,
  },
  stagger: 0.2
});
}, { scope: containerRef })


  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenModal=(project)=> {
    setSelectedProject(project);
  }

  const handleCloseModal=()=>{
    setSelectedProject(null);
  }


  const renderCards=projects.map((project)=>(
          <div 
          key={project.id}
          className='container-card animated-border glow-border gpu-boost border-2 border-white/50 bg-gray-900 backdrop-blur-md hover:-translate-y-2 rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50'>
          <div
          onClick={()=>handleOpenModal(project)}
          className=' transition-transform duration-300'
          > 
          <div className='p-4'>
            <img src={project.image} alt={project.title} className='w-full h-full object-contain rounded-xl'/>
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
            <p className='text-gray-400 mb-4 pt-5 line-clamp-3'>{project.description}</p>
            <div className='mb-4'>
              {project.tags.map((tag,index)=>(
                <span
                key={index}
                className='inline-block skill-tab bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'>
                {tag}
                </span>
              ))}
            </div>
          </div>
          </div>
          </div>
        ))


  return (
    <section
    id='work'
    ref={containerRef}
    className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden'
    >
      {/* section title  */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>PROJECTS</h2>
        <div className='w-32 h-1 bg-purple-500 mt-4 mx-auto'></div>
        <p className='text-md text-gray-400 mt-4 font-semibold'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.</p>
        <p className='text-white mt-5 font-medium text-[0.8em] animate-pulse'>(Click to view the details of each project)</p>
      </div>
      {/* proect grid  */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2'>
      {
        renderCards
      }
      </div>
      {/* model container  */}
      {selectedProject && (
        <div className='fixed inset-0 z-100  flex items-center justify-center bg-purple-900 overflow-auto  p-2 md:p-4'>
          <div className='bg-gray-900    rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl relative'>
            <div className='flex justify-end p-4'>
              <button onClick={handleCloseModal} className='text-white text-3xl font-bold hover:text-purple-500'>
              &times;
              </button>
            </div>
            <div className='flex flex-col'>
              <div className=' flex justify-center bg-gray-900 px-4'>
                <img src={selectedProject.image} alt={selectedProject.title} className=' object-contain rounded-xl xl:max-h-[40vh] lg:max-h-[35vh] w-full  shadow-2xl'/>
              </div>
              <div className='lg:p-8 p-6'>
                <h3 className='lg:text-3xl font-bold text-white mb-4 text-md '>{selectedProject.title}</h3>
                <p className='lg:text-sm xl:text-base  text-gray-400 mb-6 text-xs '>{selectedProject.description}</p>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {selectedProject.tags.map((tag,index)=>(
                    <span
                    key={index}
                    className=' bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1'>
                    {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a href={selectedProject.github} target='_blank' rel='noopener noreferrer'
                  className='w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                  View Code
                  </a>
                  <a href={selectedProject.webapp} target='_blank' rel='noopener noreferrer'
                  className='w-1/2 bg-purple-600 hover:bg-purple-800 text-gray-200 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                  View Live
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        )}
        
    </section>
  )
}

export default Work