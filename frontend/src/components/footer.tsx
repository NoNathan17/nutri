import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex text-black justify-center items-center gap-3 py-4 bottom-0">
         <span>copyright © 2024 | all rights reserved</span>
         <Link to="https://github.com/NoNathan17/nutri">
            <div className="text-black right-0 hover:scale-105">
                <FaGithub size={30} />
            </div>
         </Link>
         <Link to="https://linkedin.com/in/nathan-ong17">
         <div className="text-black right-0 hover:scale-105 transition-transform">
            <FaLinkedin size={30} />
        </div>
        </Link>
        </footer>
    );
  };
  
  export default Footer;