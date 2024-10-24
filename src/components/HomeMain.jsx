 
import profilePic from '../assets/zehrapic.jpg';
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
    <div className='flex justify-center'>
    <div className='w-[95%] flex justify-center'>
      <div id='home' className="flex flex-col justify-center items-center lg:pt-[16rem] lg:pb-[10rem] max-h-screen md:pt-[10rem] md:flex-row-reverse md:justify-between md:items-center w-[90%] md:w-[85%] lg:w-[80%] pb-[5rem] pt-[5rem]">
        {/* Image on top by default, side-by-side on medium screens (on the right) */}
        <div className="flex justify-center pb-12 md:pb-10 md:p-0 md:w-1/2 lg:w-1/2">
          <img src={profilePic} className="transition-transform rounded-full h-[10rem] w-[10rem] object-cover md:h-[20rem] md:w-[20rem] lg:h-[22rem] lg:w-[22rem] " alt="Profile" />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left md:w-1/2 lg:w-full">
          <h1 className="text-white text-4xl mb-4 md:text-6xl lg:text-[6rem] font-light">
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

          <div className='flex justify-center lg:flex-0 lg:justify-start'>
          <p className="text-customGray md:text-xl ml-[1rem] lg:ml-2 w-[80%] lg:text-xl">
            I am a <span className="text-white md:leading-loose ">Software Engineering</span> student with 
            <span className="text-white md:leading-loose"> Full-Stack Web Development</span> skills actively seeking opportunities 
            to apply my knowledge in <span className="text-white md:leading-loose">real-world projects.</span>
          </p>    
        </div>

          {/* Button to Download CV */}
          <div className="mt-6">
            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:US:45bc6a72-fb06-4e1c-a965-27fd20f97fae" download>
              <button className="bg-white text-customPurple font-light xl:text-md rounded-full px-8 py-3">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div></div>
      </div>
    </>
  );
}

export default HomeMain;
