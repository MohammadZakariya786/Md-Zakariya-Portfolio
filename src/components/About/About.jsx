import React, { useRef,useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profile from '../../assets/mohammad-zakariya-full-stack-frontend-web.png';
// import poster from '../../assets/certificate_activity_img/myposter1.jpeg';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import _ScrollTrigger, { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(_ScrollTrigger)
const About = () => {

  gsap.registerPlugin()
  const containerRef=useRef()


  useGSAP(()=>{
    var tl=gsap.timeline()
    
    tl.from(".text-1",{
      x:-650,
      duration:1,
      ease:'back.out',
      delay:0.5
    })

    tl.from(".text-2",{
      height:1,
      // opacity:0,
      duration:0.5,
      ease:'circ.in',
    })

    
    tl.from(".imgCard",{
      x:window.innerWidth,
      duration:2,
      ease:'power2.inOut',
      delay:0.1
      },'-=0.7')

    tl.from(".imgCard2",{
      width:1,
      duration:0.7,
      ease:'power2.inOut'
    })
    tl.from(".imgCard2",{
      height:1,
      duration:0.7,
      ease:'power2.inOut'
    })
    tl.to(".imgCard", {
  filter: "drop-shadow(0 0 20px rgba(255,255,255,1))",
  duration: 2,
  repeat: -1,     // infinite
  yoyo: true,     // back and forth
  ease: "sine.inOut"
})

},{scope:containerRef})

 useEffect(() => {
    const ro = new ResizeObserver(() => {
      ScrollTrigger.refresh(); // refresh whenever About section size changes
    });
    if (containerRef.current) {
      ro.observe(containerRef.current);
    }
    return () => {
      ro.disconnect();
    }
  }, []);

  const trackResumeDownload = () => {
  if (window.gtag) {
    window.gtag("event", "resume_download", {
      event_category: "engagement",
      event_label: "Download Resume Button"
    });
  }
};




  return (
    <section
    id="about"
    ref={containerRef}
    className='pb-10 pt-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-15 lg:mt-15 overflow-hidden'
    >
      
        <div className='flex flex-col-reverse md:flex-row justify-between gap-x-9 items-center '>
            {/* left side  */}
            <div className='text-1 md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
            {/* greeting  */}
            <h1 className='text-2xl sm:text-5xl md:text-3xl font-bold text-white mb-2 leading-tight'>
               Hi, I am 
            </h1>
            {/* name   */}
            <h2 className='text-2xl sm:text-5xl md:text-3xl font-bold text-white mb-4 leading-tight'>
               Mohammad Zakariya
            </h2>
            {/* skills heading with typo effect  */}
            <h3 className='text-lg sm:text-2xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                <span className='text-white'>
                    I am a&nbsp;
                </span>
                      <TypeAnimation
                          sequence={[
                              'Full Stack Developer', 
                              2000,                 
                              'React Developer',   
                              2000,                 
                              'MERN Enthusiast',  
                              2000,                 
                              'Web Developer',  
                              2000,                 
                          ]}
                          wrapper="span"
                          cursor={true}
                          repeat={Infinity}
                          style={{ color: '#8245ec' }}
                      />
                  </h3>
                  {/* about me paragraph  */}
                  <p className='overflow-hidden text-2 gpu-boost text-sm sm:text-md md:text-md text-gray-400 mt-8 leading-relaxed'>
            Full Stack Developer (MERN) focused on React.js and Tailwind CSS, with hands-on experience building responsive
            user interfaces and backend features using Node.js, Express, and MongoDB. Prioritizing clean UX, modular
            component architecture, REST APIs, and delivering production-ready, end-to-end web applications. Passionate
            about problem-solving, learning, and leveraging AI tools to speed up development and build efficient solutions.
                  </p>
                  {/* resume button*/}
                  <a 
                  href='https://drive.google.com/file/d/1wVGtbmLB729JXvg59bA_6OprrUWUi3Aw/view?usp=drive_link'
                  target='_blank'
                  title="Mohammad Zakariya Full Stack Developer Resume"
                  rel='noopener noreferrer'
                  onClick={trackResumeDownload}
                  className='text-3  z-90 inline-block mt-5 px-8 py-3 text-white font-bold text-md rounded-full shadow-md transform hover:scale-105 active:scale-105 transition duration-300'
                  style={{
                  background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                  boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                 }}
                 >
                 Download Resume
                  </a>
              </div>
            {/* right side  */}
            <div className='md:w-1/2 flex justify-center mt-8 md:mt-0'>
            <div className='imgCard relative z-1'>
            <Tilt 
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className='imgCard2 w-48 h-48 sm:w-60 sm:h-65 md:w-[20rem] md:h-[20rem] xl:w-[20rem] xl:h-[20rem] border-5 border-white rounded-full'>
            <img src={profile} alt='Mohammad Zakariya | Full Stack Developer | Frontend Developer | Web Developer'
            className='h-full w-full rounded-full  object-cover' title="Mohammad Zakariya - Full Stack Developer"/>
            </Tilt>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About