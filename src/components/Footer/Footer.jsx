import React from 'react'
import { FaWhatsapp,FaLinkedin,FaFacebook,FaInstagram } from 'react-icons/fa'

const Footer = () => {
// smooth scroll 
  const handleScroll=(sectionId)=>{
    const section =document.getElementById(sectionId)
    if(section){
      section.scrollIntoView({behavior:'smooth'})
    }
  }

  // tracking function for social media clicks 
  const trackSocialClick = (platform) => {
  if (window.gtag) {
    window.gtag("event", "social_click", {
      platform: platform,
      timestamp: new Date().toISOString(),
    });
  }
};


  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>Mohammad Zakariya</h2>
        {/* navigation links  */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
        {[
          {name:'About',id:'about'},
          {name:'Skills',id:'skills'},
          {name:'Experience',id:'experiences'},
          {name:'Projects',id:'work'},
          {name:'Education',id:'education'},
        ].map((item,index)=>(
          <button
          key={index}
          onClick={()=>handleScroll(item.id)}
          className='hover:text-purple-500 text-sm sm:text-base my-1'
          >
            {item.name}
          </button>
        ))
        }
        </nav>
      {/* social media icons  */}
      <div className='flex flex-wrap justify-center space-x-4 mt-6'>
        {[
          {icon:<FaWhatsapp/>,link:'https://wa.me/918299034183?text=Hello%20Mohammad%20Zakariya!', platform: 'whatsapp'},
          {icon:<FaLinkedin/>,link:'https://www.linkedin.com/in/mohammadzakariya-dev/', platform: 'linkedin'},
          {icon:<FaFacebook/>,link:'https://www.facebook.com/share/1WxLu6UTb6/', platform: 'facebook'},
          {icon:<FaInstagram/>,link:'https://www.instagram.com/im___adnan?igsh=cmo4MGNnazlzaTY2', platform: 'instagram'},
        ].map((item,index)=>(
          <a
          key={index} 
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => trackSocialClick(item.platform)}
          className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
          >
            {item.icon}
          </a>
        ))
        }

      </div>
      {/* copyright text  */}
      <p className='text-sm text-gray-400 mt-6 '>
        © 2025 Md Zakariya. All rights reserved.
      </p>
      </div>
    </footer>
  )
}

export default Footer