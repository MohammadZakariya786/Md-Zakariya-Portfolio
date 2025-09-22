import React, { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experiences from './components/Experiences/Experiences'
import Particles from './components/Galaxy/Particles'
import Activities from './components/ExtraCurricularActivities/Activities'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <div className='bg-[#050414] relative min-h-screen'>
      <div style={{ width: '100%', height: '100vh', position: 'fixed',overflow:'hidden' }}>
  <Particles
  className='h-full w-full'
    particleColors={['#ffffff', '#ffffff']}
    particleCount={500}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
      {/* <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div> */}

      <div className='pt-20'>
        <Navbar/>
        <About/>
        <Skills/>
        <Work/>
        <Education/>
        <Experiences/>
        <Activities/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App