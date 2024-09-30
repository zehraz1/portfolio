import linkedinIcon from '../assets/mdi_linkedin.svg';
import githubIcon from '../assets/mdi_github.svg';
import emailIcon from '../assets/material-symbols_mail-rounded.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='flex justify-center'>
    <div id='nav' className="w-[90%] flex justify-center h-full m-3 md:mt-5 sticky top-0  z-50 pb-[rem] md:pb-0">
      <div className="w-[99.5%] bg-customGray rounded-full sm:w-fit md:p-3 backdrop-blur-lg backdrop-filter bg-opacity-25 ">
        <div className="overflow-x-auto md:overflow-visible whitespace-nowrap hide-scrollbar ">
          <ul className="text-customPurple text-center flex space-x-12 md:space-x-7 lg:space-x-8 text-lg p-4 sm:text-2xl sm:p-3 md:justify-center lg:text-lg">
            <li>
              <Link to="home" smooth={true} duration={500} className="text-white cursor-pointer">
                Zehra
              </Link>
            </li>

            <li>
              <Link to="projects" smooth={true} duration={500} className="text-customPurple hover:text-white cursor-pointer">
                Projects
              </Link>
            </li>

            <li>
              <Link to="skills" smooth={true} duration={500} className="text-customPurple hover:text-white cursor-pointer">
                Skills
              </Link>
            </li>

            <li>
              <Link to="contact" smooth={true} duration={500} className="text-customPurple hover:text-white cursor-pointer">
                Contact
              </Link>
            </li>

            {/* Icons Section */}
            <li className="flex items-center space-x-4 pr-3 flex-shrink-0">
              <a href="https://www.linkedin.com/in/zehra-zaidi-bb004b1b2/" className="">
                <img src={linkedinIcon} className="h-6 w-6 md:h-6 md:w-6" alt="LinkedIn" />
              </a>

              <a href="https://github.com/zehraz1/projects">
                <img src={githubIcon} className="h-6 w-6 md:h-6 md:w-6" alt="GitHub" />
              </a>

              <a href="mailto:zehraahmedzaidi@gmail.com">
                <img src={emailIcon} className="h-6 w-6 md:h-6 md:w-6" alt="Email" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
