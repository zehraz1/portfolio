/* eslint-disable react/no-unescaped-entities */
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/CSS.png';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import viteIcon from '../assets/vite.png';
import tailwindIcon from '../assets/tailwind.png';
import framerIcon from '../assets/framer-motion.png';
import figmaIcon from '../assets/figma.png';
import pythonIcon from '../assets/python.png';
import cIcon from '../assets/c.png';
import cPlusIcon from '../assets/cplus.png';
import javaIcon from '../assets/java.png';
import sqlIcon from '../assets/sql.png';
import riscIcon from '../assets/riscv.png';
import nodeIcon from '../assets/nodejs.png';
import gitIcon from '../assets/git.png';
import flaskIcon from '../assets/flask.png';
import junitIcon from '../assets/JUnit.png';
import githubIcon from '../assets/mdi_github.svg';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Technologies = () => {
  // Animation variants for each box
  const boxVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="pb-[6rem] pt-20" id="skills" ref={ref}>
      <h1 className="text-white text-3xl md:pb-[4rem] text-center lg:text-6xl md:text-left md:ml-[5rem] xl:ml-[11rem] md:text-5xl m-4 font-light">
        These are the
        <br />
        technologies I've been using
      </h1>

      {/* Mobile: Horizontal scroll; Medium/Large: Side-by-side */}
      <div className="flex justify-center">
        <div className="w-[90%] pt-10 flex overflow-x-auto hide-scrollbar lg:w-[99%] lg:flex-wrap lg:justify-evenly space-x-5 md:space-x-6 lg:overflow-visible ml-[2rem] mr-[2rem] ">
          {/* DevOps Tools Box */}
          <motion.div
            className="h-fit w-[80%] sm:w-[45%] lg:w-[20%] border p-8 rounded-xl text-white hover:border-customGray flex-shrink-0 order-1  border-customGrey "
            variants={boxVariants}
            initial="hidden"
            animate={controls}
          >
            <h1 className="md:text-2xl md:pb-6 text-md font-light">DevOps tools</h1>
            <ul className="pt-4 space-y-3 md:text-xl">
              <li className="flex items-center">
                <img src={githubIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="GitHub" />
                GitHub
              </li>
              <li className="flex items-center">
                <img src={gitIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="Git" />
                Git
              </li>
              <li className="flex items-center">
                <img src={junitIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="JUnit" />
                JUnit
              </li>
            </ul>
          </motion.div>

          {/* Back-end Box */}
          <motion.div
            className="h-fit w-[80%] sm:w-[45%] lg:w-[20%] border rounded-xl text-white p-8 hover:border-customGray flex-shrink-0 order-4 border-customGrey"
            variants={boxVariants}
            initial="hidden"
            animate={controls}
          >
            <h1 className="md:text-2xl md:pb-6 font-light">Back End</h1>
            <ul className="pt-4 md:space-y-7 space-y-5 text-md md:text-xl">
              <li className="flex items-center">
                <img src={nodeIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="Node.js" />
                Node.js
              </li>
              <li className="flex items-center">
                <img src={flaskIcon} className="w-[2rem] md:w-[3rem] mr-2 h-[2rem] md:h-[3rem]" alt="Flask" />
                Flask
              </li>
            </ul>
          </motion.div>

          {/* Front-end Box */}
          <motion.div
            className="h-fit w-[80%] sm:w-[45%] lg:w-[20%] border rounded-xl text-white p-8 hover:border-customGray flex-shrink-0 order-2 border-customGrey"
            variants={boxVariants}
            initial="hidden"
            animate={controls}
          >
            <h1 className="md:text-2xl md:pb-6 font-light">Front End Design</h1>
            <ul className="pt-4 space-y-3 text-md md:text-xl">
              <li className="flex items-center">
                <img src={htmlIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="HTML" />
                HTML
              </li>
              <li className="flex items-center">
                <img src={cssIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="CSS" />
                CSS
              </li>
              <li className="flex items-center">
                <img src={javascriptIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="JavaScript" />
                JavaScript
              </li>
              <li className="flex items-center">
                <img src={reactIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="React JS" />
                React JS
              </li>
              <li className="flex items-center">
                <img src={viteIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="Vite" />
                Vite
              </li>
              <li className="flex items-center">
                <img src={tailwindIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="Tailwind" />
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <img src={framerIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="Framer Motion" />
                Framer Motion
              </li>
              <li className="flex items-center">
                <img src={figmaIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="Figma" />
                Figma
              </li>
            </ul>
          </motion.div>

          {/* Languages Box */}
          <motion.div
            className="h-fit w-[80%] sm:w-[45%] lg:w-[20%] border rounded-xl text-white p-8 hover:border-customGray flex-shrink-0 order-3 mr-[2rem] border-customGrey "
            variants={boxVariants}
            initial="hidden"
            animate={controls}
          >
            <h1 className="md:text-2xl md:pb-6 font-light">Languages</h1>
            <ul className="pt-4 space-y-3 text-md md:text-xl">
              <li className="flex items-center">
                <img src={pythonIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="Python" />
                Python
              </li>
              <li className="flex items-center">
                <img src={cIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="C#" />
                C#
              </li>
              <li className="flex items-center">
                <img src={cPlusIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="C++" />
                C++
              </li>
              <li className="flex items-center">
                <img src={javaIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="Java" />
                Java
              </li>
              <li className="flex items-center">
                <img src={sqlIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="SQL" />
                SQL
              </li>
              <li className="flex items-center">
                <img src={riscIcon} className="w-[2rem] md:w-[3rem] mr-2" alt="RISC-V Assembly" />
                RISC-V Assembly
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
