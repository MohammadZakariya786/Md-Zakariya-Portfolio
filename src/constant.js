// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import framermotionLogo from './assets/tech_logo/framer.png';
import renderLogo from './assets/tech_logo/render.png';


// Education Section Logo's
import cbse from './assets/education_logo/cbse.png'
import vbspu from './assets/education_logo/vbspu.png'
// Project Section Logo's
import powerflex from './assets/work_logo/powerflex.webp'
import shopfinity from './assets/work_logo/shopfinity.webp';
import grocify from './assets/work_logo/grocify.webp';
import evion from './assets/work_logo/evion.webp';

// certificates&extraCurriculuarActivities images 
import mad from './assets/certificate_activity_img/mad.jpeg'
import mern from './assets/certificate_activity_img/mern1.jpeg'
import olevel from './assets/certificate_activity_img/olevel.jpg'
import poster from './assets/certificate_activity_img/poster.jpeg'
import publication from './assets/certificate_activity_img/publication.jpeg'
import umaga from './assets/certificate_activity_img/umaga.jpeg'
import poster1 from './assets/certificate_activity_img/myposter1.jpeg'
import poster2 from './assets/certificate_activity_img/myposter2.jpeg'
import balaji from './assets/certificate_activity_img/balaji.png'
import bbdu from './assets/certificate_activity_img/bbdu.png'
import journal from './assets/certificate_activity_img/journal.png'
import olevellogo from './assets/certificate_activity_img/nielit.jpg'

export const SkillsInfo = [
   { 
    id: 1, 
    name: 'HTML', 
    logo: htmlLogo 
  },
  { 
    id: 2, 
    name: 'CSS', 
    logo: cssLogo 
  },
  { 
    id: 3, 
    name: 'JavaScript', 
    logo: javascriptLogo 
  },
  { 
    id: 4, 
    name: 'React JS', 
    logo: reactjsLogo 
  },
  { 
    id: 5, 
    name: 'Tailwind CSS', 
    logo: tailwindcssLogo 
  },
  { 
    id: 6, 
    name: 'GSAP', 
    logo: gsapLogo 
  },
  { 
    id: 7, 
    name: 'Framer Motion', 
    logo: framermotionLogo
  },
  { 
    id: 8, 
    name: 'Node JS', 
    logo: nodejsLogo 
  },
  { 
    id: 9, 
    name: 'Express JS', 
    logo: expressjsLogo 
  },
  { 
    id: 10, 
    name: 'MongoDB', 
    logo: mongodbLogo 
  },
  { 
    id: 11, 
    name: 'Python', 
    logo: pythonLogo 
  },
  { 
    id: 12, 
    name: 'Git', 
    logo: gitLogo 
  },
  { 
    id: 13, 
    name: 'GitHub', 
    logo: githubLogo 
  },
  { 
    id: 14, 
    name: 'VS Code', 
    logo: vscodeLogo 
  },
  { 
    id: 15, 
    name: 'Vercel', 
    logo: vercelLogo 
  },
  { 
    id: 16, 
    name: 'Netlify', 
    logo: netlifyLogo 
  },
  { 
    id: 17, 
    name: 'Render', 
    logo: renderLogo 
  },
];

  
  export const education = [
    {
      id: 0,
      img: bbdu,
      school: "Babu Banarasi Das University, Lucknow",
      date: "2023 - 2025",
      grade: "78.67%",
      degree: "Master of Computer Applications (MCA)",
    },
    {
      id: 1,
      img: vbspu,
      school: "Veer Bahadur Singh Purvanchal University, Jaunpur",
      date: "2020 - 2023",
      grade: "56.20%",
      degree: "Bachelor of Commerce (B.Com)",
    },
    {
      id: 2,
      img: cbse,
      school: "Private Candidate",
      date: "2019 - 2020",
      grade: "70.80%",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 3,
      img: cbse,
      school: "BSY Shikshan Sansthan, Tulasipur, Ghazipur",
      date: "2016 - 2017",
      grade: "8.2 CGPA",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    
    {
      id: 1,
      title: "ShopFinity",
      description:
      "An interactive e-commerce web app built with React, Tailwind CSS, and Framer Motion. It features a product catalog powered by the Fake Store API with category filters and search, a wishlist that saves items using local storage, a shopping cart with quantity management, and an order system with a clear summary and confirmation modal. The platform also updates product listings instantly as users search or select categories, with smooth animations, smart notifications and a responsive UI for an easy shopping experience across devices.",
      image: shopfinity,
      tags: ["React.js","Tailwind CSS", "Framer Motion","REST API"],
      github: "https://github.com/MohammadZakariya786/Shopfinity",
      webapp: "https://shopfinity-six.vercel.app/",
    },
    {
      id: 2,
      title: "Grocify",
      description:
        "A modern, responsive online grocery website, built with React, Tailwind CSS, and GSAP for smooth animations and seamless user experience. Grocify provides category-based browsing, detailed product listings, smooth GSAP-powered transitions, and a fully responsive UI. The highlight feature is its AI-powered chatbot, built with React and Tailwind CSS, and optimized with predefined Q&A, knowledge base integration, Gemini AI API with key rotation, and domain restrictions for accurate and cost-effective responses.Deployment is handled on Vercel serverless functions, with secure environment variable management for API keys.",
      image: grocify,
      tags: ["React.js", "Tailwind CSS", "GSAP", "Gemini API", "AI Chatbot"],
      github: "https://github.com/MohammadZakariya786/Grocify",
      webapp: "https://grocify-alpha-three.vercel.app/",
    },

  {
  id: 3,
  title: "EVion",
  description: "EVion is a modern, responsive landing page for EV charging solutions, built with React, Tailwind CSS, and GSAP for smooth animations. It features a responsive hero section, animated components, and a modern UI.",
  image: evion, 
  tags: ["React.js", "Tailwind CSS", "GSAP"],
  github: "https://github.com/MohammadZakariya786/EVion",
  webapp: "https://evion-two.vercel.app/"
},
  {
    id: 4,
    title: "PowerFlex",
    description:
      "MERN Stack Final Year Project | Feb 2025 – May 2025 : Developed a web application to streamline gym trainer hiring using the MERN stack. Implemented secure role-based authentication with JWT and Bcrypt.js. Enabled trainers to create profiles, upload certifications, and apply for jobs. Assisted in designing company dashboards for job posting, candidate review, and notifications. Collaborated with the existing backend structure to integrate role-based functionality for trainers and companies.",
    image: powerflex,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/MohammadZakariya786/PowerFlex",
    webapp: "https://powerflex.onrender.com/",
  },
];  


  export const certificates =[
  {
    id: 1,
    title: "MERN Stack",
    issuer: "Shri Balaji Infotech",
    date: "Feb 2025 - May 2025",
    description: "Completed a 3-month MERN stack training covering MongoDB, ExpressJS, ReactJS, NodeJS, Tailwind Css, HTML, CSS, JavaScript.",
    certificateImage: mern,
    logo: balaji,
  },
  {
    id: 2,
    title: "Cyberbullying Detection: A Machine Learning Approach using Social Media Data",
    issuer: "IJSREM Journal",
    date: "January 2025",
    description: "Published a research paper presenting a machine learning-based model for detecting cyberbullying on social media. The study applied text classification techniques, feature extraction using TF-IDF, and evaluated multiple algorithms including SVM, Decision Trees, Random Forests, and Naive Bayes, achieving a highest accuracy of 83%.",
    certificateImage: publication,
    logo: journal,
  },
  {
    id: 3,
    title: "Mobile Application Development",
    issuer: "Babu Banarasi Das University, School of Computer Applications",
    date: "July 2024",
    description: "Completed a Value Added Course on 'Mobile Application Development' offered by the School of Computer Applications at Babu Banarasi Das University.",
    certificateImage: mad,
    logo: bbdu,
  },
  {
    id: 4,
    title: "O Level (1 year)",
    issuer: "National Institute of Electronics and Information Technology (NIELIT)",
    date: "December 2023",
    description: "Successfully completed all theory and practical modules of the DOEACC 'O' Level Examination, with an overall grade of 'B' and an overall percentage of 70.30%. The subjects covered included Information Technology Tools and Network Basics, Web Designing & Publishing, Programming and Problem Solving through Python, and Internet of Things and its Application.",
    certificateImage: olevel,
    logo: olevellogo,
  },
]

export const extraCurricularActivities = [
  {
    id: 1,
    title: "Poster Making Competition",
    date: "6 August 2024",
    description: "Participated in the 'Poster Making Competition' at the EC Building, SOCA, BBD University, Lucknow, and designed a poster on Gender Equality that was featured on the college notice board.",
    certificateImage: poster2,
  },
  {
    id:2,
    certificateImage:poster1
  },
  {
    id: 3,
    title: "Workshop on Cyber Security and Ethical Hacking",
    date: "Oct 14, 2023",
    description: "Participated in a workshop on Cyber Security and Ethical Hacking conducted by Umaga Technologies Pvt. Ltd., and organized by Team Lakshya, the official Event Management Team of SOCA.",
    certificateImage: umaga,
  },
];

