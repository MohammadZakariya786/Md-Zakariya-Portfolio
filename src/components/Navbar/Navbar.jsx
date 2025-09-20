import React, { useEffect, useRef, useState } from 'react'
import {FiMenu,FiX} from 'react-icons/fi'
import {FaGithub,FaLinkedin, FaMusic, FaVolumeMute, FaVolumeOff, FaVolumeUp} from 'react-icons/fa'
import audioFile from '../../assets/song.mp3'
import { FaPause, FaPlay } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  const containerRef=useRef()
  // useGSAP(()=>{
  //   gsap.from(containerRef.current,{
  //     y:-300,
  //     duration:0.5,
  //     delay:0.5,
  //     ease:'power1.in'
  //   })
  // })

      const [isPlaying, setIsPlaying] = useState(false)
      const [isScrolled, setIsScrolled] = useState(false)
      const [isOpen,setIsOpen] = useState(false);
      const [activeSection, setActiveSection] = useState('');
    
      const audioRef = useRef(null)
    
      useEffect(() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.7 // set initial volume
          audioRef.current.play().catch((e) => {
            console.log('Autoplay blocked by browser:', e)
          })
        }
      }, [])
    
      const toggleAudio = () => {
        if (!audioRef.current) return
        if (isPlaying) {
          audioRef.current.pause() // pause audio
        } else {
          audioRef.current.play().catch((e) => console.log('Play failed:', e)) // play audio
        }
        setIsPlaying(!isPlaying) 
      }
    
    //scroll functionality  
    const handleMenuItem = (sectionId) => {
        setActiveSection(sectionId)
        setIsOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // detect scroll 
    useEffect(()=>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY>50);
        };
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);  
    },[]);

    const menuItems = [
        {id: 'about', label: 'About'},
        {id: 'work', label: 'Projects'},
        {id: 'experiences', label: 'Certificates'},
        {id: 'education', label: 'Education'},
        {id: 'contact', label: 'Contact'},
    ];


  return (
    <nav ref={containerRef} className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[18vw] ${isScrolled?'bg-[#050414]/50 backdrop-blur-md shadow-md':'bg-transparent'}`}>
        <div className='text-white flex justify-between items-center py-5'>
            {/* audio  */}
            <div className='absolute md:left-4  right-[17%] md:top-[25%] top-[30%]'>
                {/* Audio element */}
                      <audio ref={audioRef} loop src={audioFile} />
                
                      {/* Toggle button */}
                      <button
                        onClick={toggleAudio}
                        className=' md:text-lg text-xs  z-50 bg-purple-500 text-white p-2 rounded-full shadow-lg'
                      >
                        {isPlaying ? <FaVolumeUp/>:<FaVolumeMute/>}
                      </button>
            </div>
            
            {/* logo  */}
            <div className='cursor-pointer text-lg font-semibold'>
                <span className='text-[#8245ec]'>&lt;</span>
                <span className='text-white'>Mohammad</span>
                <span className='text-[#8245ec]'>/</span>
                <span className='text-white'>Zakariya</span>
                <span className='text-[#8245ec]'>&gt;</span>
            </div>
            {/* dektop menu  */}
            <ul className='hidden lg:flex text-gray-300 space-x-3 lg:space-x-6'>
                {menuItems.map((item) =>(
                    <li key={item.id} className={`nav-btn cursor-pointer hover:text-[#8245ec] ${activeSection===item.id ? 'text-[#8245ec]' : ''}`}>
                        <button onClick={()=>handleMenuItem(item.id)}>{item.label}</button>
                    </li>
                ))}
            </ul>
            <div className='flex justify-center items-center space-x-4 lg:space-x-0'>
            {/* social media icons  */}
            <div className='hidden md:flex space-x-4 text-inherit '>
                <a 
                href="https://github.com/MohammadZakariya786"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-[#8245ec]'
                >
                <FaGithub size={24}/>
                </a>
                <a 
                href="https://www.linkedin.com/in/mohammad-zakariya-6856bb296/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-[#8245ec]'
                >
                <FaLinkedin size={24}/>
                </a>
            </div>  
            {/* mobile menu icons  */}
            <div className='lg:hidden '>
                {
                    isOpen?(
                        <FiX className='text-3xl text-[#8245ec] cursor-pointer'
                        onClick={()=>setIsOpen(false)}/>
                    ):(
                        <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
                        onClick={()=>setIsOpen(true)}/>
                    )
                }
            </div>
            </div>
        </div>
        {/* mobile menu items */}
        
        
                <div className={`mt-1 overflow-hidden absolute top-16 left-1/2 bg-[#050414]/85  transition-all duration-500 ease-in-out transform -translate-x-1/2 w-4/5
                ${isOpen?'max-h-100 opacity-100':'max-h-0 opacity-0'}    
                ${isScrolled?'backdrop-blur-xl shadow-md ':'shadow-lg backdrop-blur-md'} z-50 rounded-lg  lg:hidden`}>
                    <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
                        {
                            menuItems.map((item)=>(
                                <li key={item.id} className={`hover:text-white cursor-pointer ${activeSection===item.id?'text-[#8245ec]':''}`}>
                                <button onClick={()=>handleMenuItem(item.id)}>
                                    {item.label}
                                </button>
                                </li>
                            ))}
                          <div className='flex space-x-4'>
                                <a
                                  href="https://github.com/MohammadZakariya786"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className='text-gray-300 hover:text-white'
                                >
                                  <FaGithub size={24} />
                                </a>
                                <a
                                  href="https://www.linkedin.com/in/mohammad-zakariya-6856bb296/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className='text-gray-300 hover:text-white'
                                 >
                                  <FaLinkedin size={24} />
                                </a>
                          </div>
                    </ul>
                </div>
                            
        
    </nav>
  )
}

export default Navbar