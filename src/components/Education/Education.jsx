import React, { useRef } from 'react'
import { education } from '../../constant'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const Education = () => {
const containerRef=useRef()
// const cardRef=useRef()
useGSAP(() => {
  const cards = gsap.utils.toArray(".scroll-card")
  cards.forEach((card) => {
    gsap.from(card, {
  height: 1,
  duration: 0.8,
  transformOrigin:'center center',
    borderWidth: 4, 
      borderColor: "rgba(255,255,255,1)", // bright white border
        boxShadow: "0 0 20px 6px rgba(255,255,255,0.3)", // strong white glow
    paddingTop: 0,
  paddingBottom: 0,
  marginTop: 0,
  marginBottom: 0,
  ease: "power2.out",
  scrollTrigger: {
    trigger: card,
    start: "top 80%",
    // end:"bottom 50%",
    scrub:2,
    //  invalidateOnRefresh: true,
    // markers:true
  }
});
  })
  // ScrollTrigger.refresh()
}, { scope: containerRef })
  return (
    <section
        id='education'
        ref={containerRef}
        className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans overflow-hidden'
        >
        {/* section title  */}
        <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white heading-txt'>EDUCATION</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 md:text-lg text-md font-semibold md:px-15'>My education has been a journey of learning and development. Here are the details of my academic background</p>
        </div>
        {/* education timeline  */}
        <div className='relative'>
        {/* vertical line  */}
        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 bg-white w-1 h-full'>
        </div>
        {/* education entries */}
        {
            education.map((edu,index)=>(
                <div key={edu.id}
                className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ?'sm:justify-end':'sm:justify-start'}`}>
                {/* timeline circle  */}
                <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white  ring-3 ring-white ring-offset-3   ring-offset-purple-500 w-12 h-12 sm:h-10 sm:w-10 xl:w-14 xl:h-14 rounded-full flex justify-center items-center z-10'>
                    <img src={edu.img} alt={edu.school}
                    className='h-full w-full object-cover rounded-full'/>
                </div>
                {/* content section  */}
                <div className={`scroll-card overflow-hidden w-full md:max-w-[270px] lg:max-w-[350px] p-4 sm:p-8 rounded-2xl  border-2  border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                ${index % 2 === 0 ? "md:ml-0" : "md:mr-0"} md:mr-10 md:ml-10 lg:mr-15 lg:ml-15 ml-8 transform transition-transform duration-300 hover:scale-105`}>
                    {/* flex container for img and text  */}
                    <div className='flex items-center flex-col'>
                        {/* school logo  */}
                        <div className=' w-16 h-16 rounded-md bg-white overflow-hidden'>
                            <img className='w-full h-full object-cover' src={edu.img} alt={edu.school}/>
                        </div>
                         {/* degree school name  and date  */}
                         <div className='flex flex-col text-center mt-5'>
                          <div>
                            <h3 className='text-lg md:text-md     font-semibold text-white'>{edu.degree}</h3>
                            <h4 className='text-xs md:text-md   text-gray-300'>{edu.school}</h4>
                          </div>
                          {/* date  */}
                          <p className='text-gray-500 md:mt-1 mt-1 text-[11px] md:text-xs'>{edu.date}</p>
                         </div>
                    </div>
                    <p className='text-gray-400 mt-4 md:text-md text-sm font-bold text-center '>Grade: {edu.grade}</p>
                    
                </div>
                </div>
            ))
        }
        </div>
        </section>
  )
}

export default Education