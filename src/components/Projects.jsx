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
      <div className="flex justify-center">
        <div className="w-full max-w-7xl">
          <div id="projects" className="pt-20 pb-[6rem] md:pb-[10rem] w-full" ref={ref}>
            <h1 className="text-white text-3xl md:text-5xl lg:text-5xl text-center md:text-left mx-4 md:mx-12 pb-[3rem] font-light">
              Projects
            </h1>

            {/* Project container */}
            <div className="container mx-auto pt-[2rem] font-light lg:flex lg:justify-center lg:w-[89%]">
              <div className="flex md:grid md:grid-cols-2 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 scroll-smooth hide-scrollbar w-full px-4">
                
                {/* Project 1: E-Commerce Website */}
                <motion.div
                  className="text-white border border-customGrey rounded-3xl hover:border-customGray p-[1rem] mb-10 w-[90%] sm:w-[80%] md:w-full flex-shrink-0"
                  variants={projectVariants}
                  initial="hidden"
                  animate={controls} // Control animations
                >
                  <img src={reactIcon} alt="E-Commerce Website" className="w-12 h-12 mb-4" />
                  <h1 className="md:text-2xl text-xl pt-2 lg:text-3xl">E-Commerce Website</h1>
                  <p className="pt-2 leading-7 text-sm md:text-base">
                    Designed and developed a full-stack e-commerce website following a provided UI. Used React for the responsive frontend, and Node.js and Flask for the backend.
                  </p>
                  <div className="mt-4 text-sm md:text-base">
                    <button className="bg-white text-black p-2 rounded mt-2 hover:text-customPurple">
                      <a href="https://github.com/zehraz1/projects/tree/main/E-commerce%20React">View Source Code</a>
                    </button>
                  </div>
                </motion.div>

                {/* Project 2: C++ Airline Registration System */}
                <motion.div
                  className="text-white border border-customGrey rounded-3xl hover:border-customGray p-[1rem] mb-10 w-[90%] sm:w-[80%] md:w-full flex-shrink-0"
                  variants={projectVariants}
                  initial="hidden"
                  animate={controls} // Control animations
                >
                  <img src={cplusIcon} alt="C++ Airline Registration System" className="w-12 h-12 mb-4" />
                  <h1 className="md:text-2xl text-xl pt-2 lg:text-3xl">C++ Airline Registration System</h1>
                  <p className="pt-2 leading-7 text-sm md:text-base">
                    Developed an airline registration system using C++ that efficiently handles passenger bookings, flight management, and ticketing processes.
                  </p>
                  <div className="mt-4 text-sm md:text-base">
                    <button className="bg-white text-black p-2 rounded mt-2 hover:text-customPurple">
                      <a href="https://github.com/zehraz1/projects/tree/main/Airline%20C%2B%2B">View Source Code</a>
                    </button>
                  </div>
                </motion.div>

                {/* Project 3: Java Application */}
                <motion.div
                  className="text-white border border-customGrey rounded-3xl hover:border-customGray p-[1rem] mb-10 w-[90%] sm:w-[80%] md:w-full flex-shrink-0"
                  variants={projectVariants}
                  initial="hidden"
                  animate={controls} // Control animations
                >
                  <img src={javaIcon} alt="Java Application" className="w-12 h-12 mb-4" />
                  <h1 className="md:text-2xl text-xl pt-2 lg:text-3xl">Java Application</h1>
                  <p className="pt-2 leading-7 text-sm md:text-base">
                  Developed a disaster relief system to track individuals housed in temporary shelters following natural disasters, facilitating family reunification by logging their locations, relationships, and contact with relief services.
                  </p>
                  <div className="mt-4 text-sm md:text-base">

                    <button className="bg-white text-black p-2 rounded mt-2 hover:text-customPurple">
                      <a href="https://github.com/zehraz1/projects/tree/main/Database%20Java">View Source Code</a>
                    </button>
                  </div>
                </motion.div>

                {/* Project 4: SQL Database Management */}
                <motion.div
                  className="text-white border border-customGrey rounded-3xl hover:border-customGray p-[1rem] h-fit mb-10 w-[90%] sm:w-[80%] md:w-full flex-shrink-0"
                  variants={projectVariants}
                  initial="hidden"
                  animate={controls} // Control animations
                >
                  <img src={sqlIcon} alt="SQL Arts Database Management" className="w-12 h-12 mb-4" />
                  <h1 className="md:text-2xl text-xl pt-2 lg:text-3xl">SQL Database Management</h1>
                  <p className="pt-2 leading-7 text-sm md:text-base">
                  Designed and implemented a robust SQL database for an art museum, optimizing the storage and retrieval of data on art objects, exhibitions, and users.
                  </p>
                  <div className="mt-4 text-sm md:text-base">

                    <button className="bg-white text-black p-2 rounded mt-2 hover:text-customPurple">
                      <a href="https://github.com/zehraz1/projects/tree/main/Museum%20SQL%20Python">View Source Code</a>
                    </button>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
