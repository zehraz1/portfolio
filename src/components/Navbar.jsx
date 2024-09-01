import linkedinIcon from '../assets/mdi_linkedin.svg';
import githubIcon from '../assets/mdi_github.svg';
import emailIcon from '../assets/material-symbols_mail-rounded.svg';


const Navbar = ()=>{
    return(
        <div className="flex items-center justify-center m-3 mt-10">
            <div className="p-6 bg-customGrey rounded-full flex items-center" >
                <ul className="text-customPurple text-center flex justify-center space-x-12 text-2xl">
                    <li>
                        <a href="#home" className="text-white pl-12">Zehra</a>
                    </li>
                    
                    <li>
                        <a href="#education" className="hover:text-white">education</a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-white">projects</a>
                    </li>

                    <li className='flex items-center space-x-3'>
                        <a href="https://www.linkedin.com/in/zehra-zaidi-bb004b1b2/" className=""> <img src={linkedinIcon} className="h-7" />
                        </a>

                        <a href=""> <img src={githubIcon} className="h-7" />
                        </a>

                        <a href="" className="pr-12"> <img src={emailIcon} className="h-7" />
                        </a>

                    </li>
                </ul>

            </div>
        </div>

    );
};

export default Navbar;