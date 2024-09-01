import linkedinIcon from '../assets/mdi_linkedin.svg';
import githubIcon from '../assets/mdi_github.svg';
import emailIcon from '../assets/material-symbols_mail-rounded.svg';

import { Link } from 'react-scroll';


const Navbar = ()=>{
    return(
        <div className="flex items-center justify-center m-3 mt-10">
            <div className="p-6 bg-customGrey rounded-full flex items-center" >
                <ul className="text-customPurple text-center flex justify-center space-x-12 text-2xl">
                    <li>
                      <Link to="home" smooth={true} duration={500} className="text-white pl-12 cursor-pointer">Zehra</Link>
                    </li>
                    
                    <li>
                        <Link to="projects" smooth={true} duration={500} className="text-customPurple pl-12 hover:text-white cursor-pointer">projects</Link>
                    </li>

                    <li>
                        <Link to="skills" smooth={true} duration={500} className="text-customPurple pl-12 hover:text-white cursor-pointer">skills</Link>
                    </li>

                    <li>
                        <Link to="contact" smooth={true} duration={500} className="text-customPurple pl-12 hover:text-white cursor-pointer">contact</Link>
                    </li>

                    <li className='flex items-center space-x-3'>
                        <a href="https://www.linkedin.com/in/zehra-zaidi-bb004b1b2/" className=""> <img src={linkedinIcon} className="h-7" />
                        </a>

                        <a href="https://github.com/zehraz1/Portfolio-Projects/"> <img src={githubIcon} className="h-7" />
                        </a>

                        <a href="mailto:zehraahmedzaidi@gmail.com" className="pr-12"> <img src={emailIcon} className="h-7" />
                        </a>

                    </li>
                </ul>

            </div>
        </div>

    );
};

export default Navbar;