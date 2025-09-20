import React, { useRef } from 'react'
import { extraCurricularActivities } from '../../constant'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const Activities = () => {

const containerRef=useRef()
// const cardRef=useRef()
useGSAP(() => {
  const cards = gsap.utils.toArray(".scroll-card")
  cards.forEach((card,i) => {
      let fromVars = { opacity: 0, scale: 0.8 }; // common values

    if (i === 0) {
      fromVars.x = -400; // first card → left
    } else if (i === 1) {
      fromVars.x = 400; // second card → right
    } else {
      fromVars.y = 200; // third (and rest) → bottom
    }
    gsap.from(card, {
      ...fromVars,
      duration:0.3,
     ease:'power2.out',
      scrollTrigger: {
        trigger: card,
        start: "top 120%",    
        end: "bottom 90%",    
        scrub: 2,
        // markers: true
      }
    })
  })
}, { scope: containerRef })


  const actCards=extraCurricularActivities.map((act)=>(
            // parent 
          <div className='scroll-card flex flex-wrap'
          key={act.id}>
          <div   
          className={` flex flex-col   max-w-md md:basis-[260px]    p-4 sm:p-8 rounded-2xl  border-2  
          border-white/50 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]  transform transition-transform duration-300 hover:scale-105`}>
            
          {/* img  */}
          <div className='w-full h-full'>
            <img src={act.certificateImage} className='rounded-md h-full w-full object-cover' alt={act.title}/>
          </div>
          
          
          {/* text content*/}
          { (act.id===1 || act.id===3) &&(
            
            
            <div className='flex flex-col mt-4'>
            <h2 className='text-md md:text-lg font-semibold text-white'>{act.title}</h2>
            <p className='text-gray-500  mt-1 text-xs md:text-md'>{act.date}</p>
            <p className='text-gray-400 mt-4 md:text-md text-sm'>{act.description}</p>
          </div>
          )}
        </div>
          </div>
            ))

  return (
    <section
    id='activities'
    ref={containerRef}
    className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans overflow-hidden'
    >
    {/* section title  */}
    <div className='text-center mb-16'>
    <h2 className='md:text-4xl text-3xl font-bold text-white '>EXTRACURRICULAR ACTIVITIES</h2>
    <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
    <p className='text-gray-400 mt-4 md:text-lg text-md font-semibold '>I have engaged in extra-curricular activities that enhanced my creativity, skills, and teamwork</p>
    </div>

    {/* cards container  */}
    <div className='container-card flex flex-wrap  justify-center w-full gap-6 '>
    {actCards}
    </div>
    </section>
  )
}

export default Activities