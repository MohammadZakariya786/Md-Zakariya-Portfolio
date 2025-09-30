import React, { useEffect, useRef } from 'react'
import { certificates } from '../../constant'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Experiences = () => {

const containerRef=useRef()
useGSAP(()=>{

    const cards =gsap.utils.toArray(".container-card")
    cards.forEach((card,i)=>{
        gsap.from(card,{
            opacity:0,
            scale:0.6,
            transformOrigin:'center center',
            y:200,
            duration:1,
            scrollTrigger:{
                trigger:card,
                start:"top 120%",
                end:"bottom 90%",
                // invalidateOnRefresh: true, 
                // markers:true,
                scrub:2,
                 onEnter: () => {
            ScrollTrigger.refresh()
          }
            }
        })
    })
},{scope:containerRef})

// useEffect(() => {
//     const ro = new ResizeObserver(() => {
//       ScrollTrigger.refresh(); // refresh whenever About section size changes
//     });
//     if (containerRef.current) {
//       ro.observe(containerRef.current);
//     }
//     return () => {
//       ro.disconnect();
//     }
//   }, []);





  return (
    <section
    id='experiences'
    ref={containerRef}
    className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[10vw] font-sans overflow-hidden'
    >
    {/* section title  */}
    <div className='text-center mb-16'>
    <h2 className='text-4xl font-bold text-white'>CERTIFICATES</h2>
    <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
    <p className='text-gray-400 mt-4 md:text-lg text-md font-semibold'>Showcasing my certifications and research work as part of my journey</p>
    </div>
    {/* timeline  */}
    <div className='relative'>
    {/* vertical line  */}
    <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 bg-white w-1 h-full'>
    </div>
    {/* certificates entries */}
    {
        certificates.map((certificate,index)=>(
            <div key={certificate.id}
            className={`container-card  flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ?'sm:justify-start':'sm:justify-end'}`}>
            {/* timeline circle  */}
            <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-white ring-4 ring-white ring-offset-4   ring-offset-[#8245ec] w-12 h-12 sm:h-10 sm:w-10 xl:w-16 xl:h-16 rounded-full flex justify-center items-center z-10'>
                <img src={certificate.logo} alt={certificate.title}
                className='h-full w-full object-contain rounded-full'/>
            </div>
            {/* content section  */}
            <div className={` w-full  md:w-[270px] lg:w-[330px] xl:w-[350px] p-4 sm:p-8 rounded-2xl  
            border-2  border-white/70 bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
            ${index % 2 === 0 ? "md:ml-0 " : "md:mr-0"} md:mr-10 md:ml-10 lg:mr-39 lg:ml-39 xl:mr-[130px] xl:ml-[130px]  ml-8 transform transition-transform duration-300 hover:scale-105`}>
                {/* company logo  */}
                <div className='flex  justify-center'>
                <div className=' w-full h-full  rounded-md bg-white overflow-hidden'>
                    <img className='w-full h-full object-cover' src={certificate.certificateImage} alt={certificate.title}/>
                </div>
                </div>
                {/* flex container  text  */}
                <div className='flex flex-col   md:space-x-4 space-x-5'>
                     {/* role company name  and date  */}
                     <div className='flex flex-col justify-between mt-4'>
                      <div>
                        <h3 className='text-lg md:text-md     font-semibold text-white'>{certificate.title}</h3>
                        <h4 className='text-xs md:text-md   text-gray-300'>{certificate.issuer}</h4>
                      </div>
                      {/* date  */}
                      <p className='text-gray-500 md:mt-1 mt-1 text-[11px] md:text-xs'>{certificate.date}</p>
                     </div>
                </div>
                <p className='text-gray-400 mt-4 md:text-md text-sm'>{certificate.description}</p>
                {/* conditional rendering for id=2  */}
                {
                    certificate.id===2 &&(
                            <div className='mt-5 mb-2'>
                                <a
                                    href="https://ijsrem.com/download/cyberbullying-detection-a-machine-learning-approach-using-social-media-data/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-purple-600 text-white text-xs md:text-sm rounded-lg hover:bg-purple-700 transition"
                                >
                                    View Research Paper
                                </a>
                            </div>
                    )
                }
            </div>

            </div>
        ))
    }
    {/* button for certificate and research paper  */}
              <div className='flex gap-x-10 justify-center relative translate-y-3 md:translate-y-0 '>
                <div className='bg-white h-1 w-50 absolute left-0 top-3 md:hidden'></div>
                  <a href='https://drive.google.com/file/d/1lBdOQoKZ_GrVdl68KEcjMg3-w5Iu2UI2/view?usp=drive_link' target='_blank' rel='noopener noreferrer'
                      className=' bg-purple-600 hover:bg-purple-800 text-gray-200 lg:px-6 lg:py-2 px-3 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                      View All Certificates
                  </a>
              </div>
                          </div>
    </section>
  )
}

export default Experiences