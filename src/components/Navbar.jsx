import linkedinIcon from '../assets/mdi_linkedin.svg';
import githubIcon from '../assets/mdi_github.svg';
import emailIcon from '../assets/material-symbols_mail-rounded.svg';

import { Link } from 'react-scroll';


const Navbar = ()=>{
    return(
        <div className='flex justify-center h-full m-3 md:mt-5'>
        <div className="md:w-3/4 lg:w-1/2 w-[99.5%]  bg-customGrey rounded-full p-2 md:p-4 md:text-2xl lg:text-3xl ">
            <div >
                <ul className="text-customPurple text-center flex justify-center space-x-2 md:space-x-5 lg:space-x-8">
                    <li>
                      <Link to="home" smooth={true} duration={500} className="text-white cursor-pointer">Zehra </Link>
                    </li>
                    
                    <li>
                        <Link to="projects" smooth={true} duration={500} className="text-customPurple hover:text-white cursor-pointer">projects </Link>
                    </li>

                    <li>
                        <Link to="skills" smooth={true} duration={500} className="text-customPurple hover:text-white cursor-pointer">skills </Link>
                    </li>

                    <li>
                        <Link to="contact" smooth={true} duration={500} className="text-customPurple hover:text-white cursor-pointer">contact </Link>
                    </li>

                    <li className='flex items-center space-x-1'>
                        <a href="https://www.linkedin.com/in/zehra-zaidi-bb004b1b2/" className=""> <img src={linkedinIcon} className="" />
                        </a>

                        <a href="https://github.com/zehraz1/Portfolio-Projects/"> <img src={githubIcon} className="" />
                        </a>

                        <a href="mailto:zehraahmedzaidi@gmail.com" className=""> <img src={emailIcon} className="" />
                        </a>

                    </li>
                </ul>

            </div>
        </div>
</div>
    );
};

export default Navbar;