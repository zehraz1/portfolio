/* eslint-disable react/no-unescaped-entities */
import htmlIcon from '../assets/html.png';
import cssIcon from'../assets/CSS.png';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from'../assets/react.png';
import viteIcon from'../assets/vite.png';
import tailwindIcon from'../assets/tailwind.png';
import framerIcon from'../assets/framer-motion.png';
import figmaIcon from'../assets/figma.png';
import pythonIcon from'../assets/python.png';
import cIcon from'../assets/c.png';
import cPlusIcon from'../assets/cplus.png';
import javaIcon from'../assets/java.png';
import sqlIcon from'../assets/sql.png';
import riscIcon from'../assets/riscv.png';
import nodeIcon from'../assets/nodejs.png';
import gitIcon from'../assets/git.png';
import flaskIcon from'../assets/flask.png';
import junitIcon from'../assets/JUNIT.png';
import githubIcon from '../assets/mdi_github.svg';



const Technologies = () => {
  return (
    <div className="2xl:pl-48 2xl:pt-20 2xl:pb-20">
        <h1 className="text-white text-5xl">These are the<br></br> technolgies I've been using</h1>
        <div className="2xl:pt-10 flex justify-start space-x-28 2xl:text-xl">

            <div className="2xl:w-72 2xl:h-fit border rounded-3xl text-white 2xl:p-8 justify-start hover:border-customPurple">
                <h1>Front-end</h1>
                <ul className="2xl:pt-4 space-y-3 ">
                    <li className="flex items-center"><img src={htmlIcon} className='w-11 mr-2'></img>HTML</li>
                    <li className="flex items-center"><img src={cssIcon} className='w-11 mr-2'></img>CSS</li>
                    <li className="flex items-center"><img src={javascriptIcon} className='w-11 mr-2'></img>Javascript</li>
                    <li className="flex items-center"><img src={reactIcon} className='w-11 mr-2'></img>React JS</li>
                    <li className="flex items-center"><img src={viteIcon} className='w-11 mr-2'></img>Vite</li>
                    <li className="flex items-center"><img src={tailwindIcon} className='w-11 mr-2'></img>Tailwind CSS</li>
                    <li className="flex items-center"><img src={framerIcon} className='w-11 mr-2'></img>Framer Motion</li>
                    <li className="flex items-center"><img src={figmaIcon} className='w-11 mr-2'></img>Figma</li>
                </ul>
            </div>

            <div className="2xl:w-72 2xl:h-fit border rounded-3xl text-white 2xl:p-8 justify-start hover:border-customPurple">
                <h1>Languages</h1>
                <ul className="2xl:pt-4 space-y-3 ">
                    <li className="flex items-center"><img src={pythonIcon} className='w-11 mr-2'></img>Python</li>
                    <li className="flex items-center"><img src={cIcon} className='w-11 mr-2'></img>C#</li>
                    <li className="flex items-center"><img src={cPlusIcon} className='w-11 mr-2'></img>C++</li>
                    <li className="flex items-center"><img src={javaIcon} className='w-11 mr-2'></img>Java</li>
                    <li className="flex items-center"><img src={sqlIcon} className='w-11 mr-2'></img>SQL</li>
                    <li className="flex items-center"><img src={riscIcon} className='w-11 mr-2'></img>RISC-V Assembly</li>
                </ul>
            </div>

            <div className="2xl:w-72 2xl:h-fit border rounded-3xl text-white 2xl:p-8 justify-start hover:border-customPurple">
                <h1>Back-end</h1>
                <ul className="2xl:pt-4 space-y-3 ">
                    <li className="flex items-center"><img src={nodeIcon} className='w-11 mr-2'></img>Node.js </li>
                    <li className="flex items-center">
                        <img src={flaskIcon} className='w-11 mr-2 h-11'></img>Flask </li>
                </ul>
            </div>

            <div className="2xl:w-60 2xl:h-fit border rounded-3xl text-white 2xl:p-8 hover:border-customPurple justify-start">
                <h1>DevOps tools</h1>
                <ul className="2xl:pt-4 space-y-3 ">
                    <li className="flex items-center"><img src={githubIcon} className='w-11 mr-2'></img>Github</li> 
                    <li className="flex items-center"><img src={gitIcon} className='w-11 mr-2'></img>Git</li>                  
                    <li className="flex items-center"><img src={junitIcon} className='w-11 mr-2'></img>JUnit</li>                  
                </ul>
            </div>

        </div>
      
    </div>
  )
}

export default Technologies;
