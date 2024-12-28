import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a final-year IIIT Ranchi B.Tech (Computer Science Engineering) student .I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Node.js, MySQL, PHP, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career and now I am constantly  seeking opportunites to expand my knowledge and expertise in this field.  I have completed over 900+ DSA questions on various coding platforms. also won a diva spot in the CODERUSH2024 coding competition.  I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects. And currently served as a TAP Cell Cordinator in IIIT Ranchi.`;


export const PROJECTS = [
  {
    title: "Internet-Banking-System",
    image: project1,
    description:
      "A fully functional and  user- friendly Internet Banking System with features like money transaction, different panels, and user authentication.",
    technologies: ["HTML", "CSS", "PHP", "MYSQL", "Javascript","Chart.js","Vanilla CSS"],
  },
  {
    title: "Healthy Life Website",
    image: project2,
    description:
      "An user-friendly application for maintaing our lives healthy, with features such as doctor availibilty, health tracking and ChatBot feature is also available. Different Working and responsive user profile segments for the ease of users.",
    technologies: ["HTML", "CSS","JavaScript", "jQuery", "Firebase"],
  },
  {
    title: "Smart Conversational ChatBot using MERN Stack",
    image: project5,
    description:
      "Created an innovative customer support chatbot using MERN Stack technology; drove a notable 30% increase in user engagement by providing instant responses during peak inquiry periods for added accessibility. Integrated OTP verification, enhancing security and reducing unauthorized access by 40%",
    technologies: ["MERN-Stack", "JS","HTML", "CSS", "Third-party API integrations"],
  },

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap","Framer-motion"],
  },
  {
    title: "Serverless-Web Application on AWS",
    image: project4,
    description:
      "A platform for hosting the web application's static files.Build a Lambda function to handle create, read, update, and delete (CRUD) operations on the  DynamoDB table.",
    technologies: ["HTML", "CSS", "Javascript", "DynamoDB", "S3","CloudFront","AWS-Lambda"],
  },
];

