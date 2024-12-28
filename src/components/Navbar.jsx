import logo from "../assets/logo.png";
import { FaLinkedin} from "react-icons/fa";
import { FaGithub} from "react-icons/fa"; import { FaWhatsapp} from "react-icons/fa";
import {motion} from "framer-motion";


const Navbar = () => {
  return (<nav className=" mb-20 flex items-center justify-between py-6">
    <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:0.5}}

    className="flex flex-shrink-0 items-center">
        <img  className="mx-8 w-40" src={logo} alt="logo"/>
    </motion.div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/garima-jain-19s/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a>
    <a href="https://github.com/Garimatech19" target="_blank" rel="noopener noreferrer"> <FaGithub /></a>
    <a href="https://wa.me/qr/EIT6HSLJIRNFL1" target="_blank" rel="noopener noreferrer">  <FaWhatsapp/></a> 
    </div>
  </nav>
  );
};

export default Navbar;