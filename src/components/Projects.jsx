import reactIcon from '../assets/react.png';
import javaIcon from '../assets/java.png';
import cplusIcon from '../assets/cplus.png';
import sqlIcon from '../assets/sql.png';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  // Animation variants for project cards
  const projectVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  // Hook to control animation
  const controls = useAnimation();

  // Hook to detect when the Projects section is in view
  const [ref, inView] = useInView({ threshold: 0.2 });

  // Start animations when Projects section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <div id="projects" className="pt-20 pb-[6rem] md:pb-[10rem] w-[90%] lg:w-[99%] mx-auto" ref={ref}>
        {/* Adjust padding/margin to align with HomeMain header */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl md:ml-[5rem] xl:ml-[11rem] pb-5 text-center md:text-left m-4  md:pb-[4rem] font-light">
          Projects
        </h1>

        {/* Project container */}
        <div className="container mx-auto px-4 md:ml-[8rem] xl:ml-[10rem] pt-6 font-light">
          {/* Mobile view: flex with horizontal scroll; Medium and large screens: 2-column grid */}
          <div className="flex md:grid md:grid-cols-2 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-x-hidden space-x-4 md:space-x-0 scroll-smooth hide-scrollbar w-full">
            
            {/* Project 1: E-Commerce Website */}
            <motion.div
              className="text-white border border-customGrey rounded-3xl hover:border-customGray p-5 mb-10 w-[90%] sm:w-[80%] md:w-full h-fit flex-shrink-0"
              variants={projectVariants}
              initial="hidden"
              animate={controls} // Control animations
            >
              <img src={reactIcon} alt="E-Commerce Website" className="w-12 h-12 mb-4" />
              <h1 className="md:text-2xl text-xl pt-2 lg:text-4xl">E-Commerce Website</h1>
              <p className="pt-2 leading-7 text-sm md:text-base lg:text-xl">
                Designed and developed a full-stack e-commerce website following a provided UI. Used React for the responsive frontend, and Node.js and Flask for the backend.
              </p>
              <div className="mt-4 text-sm md:text-base lg:text-xl">
                <button className="bg-white text-black p-2 rounded mr-2">
                  <a href="#linkhere">View Demo</a>
                </button>
                <button className="bg-white text-black p-2 rounded mt-2">
                  <a href="#linkhere">View Source Code</a>
                </button>
              </div>
            </motion.div>

            {/* Project 2: C++ Airline Registration System */}
            <motion.div
              className="text-white border rounded-3xl border-customGrey hover:border-customGray p-5 mb-10 w-[90%] sm:w-[80%] md:w-full h-fit flex-shrink-0"
              variants={projectVariants}
              initial="hidden"
              animate={controls} // Control animations
            >
              <img src={cplusIcon} alt="C++ Airline Registration System" className="w-12 h-12 mb-4" />
              <h1 className="md:text-2xl text-xl pt-2 lg:text-4xl">C++ Airline Registration System</h1>
              <p className="pt-2 leading-7 text-sm md:text-base lg:text-xl">
                Developed an airline registration system using C++ that efficiently handles passenger bookings, flight management, and ticketing processes.
              </p>
              <div className="mt-4 text-sm md:text-base lg:text-xl">
                <button className="bg-white text-black p-2 rounded mr-2">
                  <a href="#linkhere">View Demo</a>
                </button>
                <button className="bg-white text-black p-2 rounded mt-2">
                  <a href="#linkhere">View Source Code</a>
                </button>
              </div>
            </motion.div>

            {/* Project 3: Java Application */}
            <motion.div
              className="text-white border rounded-3xl border-customGrey hover:border-customGray p-5 mb-10 w-[90%] sm:w-[80%] md:w-full h-fit flex-shrink-0"
              variants={projectVariants}
              initial="hidden"
              animate={controls} // Control animations
            >
              <img src={javaIcon} alt="Java Application" className="w-12 h-12 mb-4" />
              <h1 className="md:text-2xl text-xl pt-2 lg:text-4xl">Java Application</h1>
              <p className="pt-2 leading-7 text-sm md:text-base lg:text-xl">
                Developed a Java application with a GUI for a booking and management system. It includes intuitive navigation and data input validation.
              </p>
              <div className="mt-4 text-sm md:text-base lg:text-xl">
                <button className="bg-white text-black p-2 rounded mr-2">
                  <a href="#linkhere">View Demo</a>
                </button>
                <button className="bg-white text-black p-2 rounded mt-2">
                  <a href="#linkhere">View Source Code</a>
                </button>
              </div>
            </motion.div>

            {/* Project 4: SQL Database Management */}
            <motion.div
              className="text-white border rounded-3xl border-customGrey hover:border-customGray p-5 mb-10 w-[90%] sm:w-[80%] md:w-full h-fit flex-shrink-0"
              variants={projectVariants}
              initial="hidden"
              animate={controls} // Control animations
            >
              <img src={sqlIcon} alt="SQL Database Management" className="w-12 h-12 mb-4" />
              <h1 className="md:text-2xl text-xl pt-2 lg:text-4xl">SQL Database Management</h1>
              <p className="pt-2 leading-7 text-sm md:text-base lg:text-xl">
                Implemented a robust database management system using SQL for handling large datasets with efficient query optimization techniques.
              </p>
              <div className="mt-4 text-sm md:text-base lg:text-xl">
                <button className="bg-white text-black p-2 rounded mr-2">
                  <a href="#linkhere">View Demo</a>
                </button>
                <button className="bg-white text-black p-2 rounded mt-2">
                  <a href="#linkhere">View Source Code</a>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
