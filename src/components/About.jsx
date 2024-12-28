import aboutImg from "../assets/about image.jpeg";
import {ABOUT_TEXT } from "../constants";
import {motion } from "framer-motion";

const About = () => {
  return( <div className="border-b border-neutral-900 pb-4">
    <h2 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500">Me</span>
        </h2>
        <div className="flex flex-wrap">
            <motion.div
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:0.5}}
             className="w-full  lg:w-1/2 lg:p-8">
             <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="about"/>
             </div>
             </motion.div>
             <motion.div
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:0.5}}
             className="w-full lg:w-1/2">
               <div className="flex justify-center lg:justify-start">
                  <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
               </div>
             </motion.div>
        </div>
        <div className="flex justify-center mt-1">
        <a
          href="https://drive.google.com/file/d/1lSEzuH5RM1qTOK2uvYvwdyN2Gu2-lDVz/view?usp=sharing"
          className="px-8 py-5 text-white bg-purple-600 rounded hover:bg-blue-700 transition duration-300"
        >
         My Resume
        </a>
      </div>
  </div>
  );
};

export default About;
