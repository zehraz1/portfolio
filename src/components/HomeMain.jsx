 
import profilePic from '../assets/zehra.jpeg';
import { motion } from 'framer-motion';

// Typing effect using Framer Motion
const typingEffect = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HomeMain = () => {
  return (
    <>   
      <div id='home' className="flex flex-col justify-center items-center lg:pt-[16rem] lg:pb-[10rem] max-h-screen md:pt-28 md:flex-row-reverse md:justify-between md:items-center w-[90%] md:w-[85%] lg:w-[80%] mx-auto pb-[5rem]">
        {/* Image on top by default, side-by-side on medium screens (on the right) */}
        <div className="flex justify-center pb-12 md:pb-10 md:p-0 md:w-1/2 lg:w-1/2">
          <img src={profilePic} className="rounded-full h-[10rem] w-[10rem] object-cover md:h-[20rem] md:w-[20rem] lg:h-[28rem] lg:w-[28rem]" alt="Profile" />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left md:w-1/2 lg:w-full">
          <h1 className="text-white text-4xl mb-4 md:text-6xl lg:text-9xl font-light">
            <motion.span
              className="ml-2"
              variants={typingEffect}
              initial="hidden"
              animate="visible"
            >
              {"Hi, I'm Zehra".split("").map((char, index) => (
                <motion.span key={index} variants={letterAnimation}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <p className="text-customGray md:text-xl lg:text-2xl lg:w-[70%]">
            I am a <span className="text-white md:leading-loose">Software Engineering</span> student with 
            <span className="text-white md:leading-loose"> Full-Stack Web Development</span> skills actively seeking opportunities 
            to apply my knowledge in <span className="text-white md:leading-loose">real-world projects.</span>
          </p>    

          {/* Button to Download CV */}
          <div className="mt-6">
            <a href="/path-to-your-cv.pdf" download>
              <button className="bg-customPurple text-white font-light xl:text-xl rounded-full px-8 py-3">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeMain;
