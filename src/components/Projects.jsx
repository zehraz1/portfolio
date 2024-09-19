import websitePic2 from '../assets/website2.png';

const Projects = () => {
  return (
    <>
      <div id="projects" className="pt-20">
        {/* Adjust padding/margin to align with HomeMain header */}
        <h1 className="text-white text-4xl md:text-5xl lg:text-8xl  md:ml-[5rem] xl:ml-[11rem] pb-5 text-center md:text-left">Projects</h1>

        <div className="container mx-auto px-4 md:ml-[8rem] xl:ml-[10rem] overflow-x-auto flex space-x-4 scroll-smooth overflow-scroll hide-scrollbar">
          {/* Project 1 */}
          <div className="text-white border rounded-3xl hover:border-customPurple p-5 mb-10 inline-block w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] h-fit flex-shrink-0">
            <h1 className="text-2xl pt-2">E-Commerce Website</h1>
            <p className="pt-2 leading-7">
              Designed and developed a full-stack e-commerce website using Figma for the UI design, React and Tailwind CSS for the responsive frontend, and Node.js with SQL for the backend. The project also features smooth animations powered by Framer Motion, creating an engaging user experience.
            </p>
            <div className="mt-4">
              <button className="bg-white text-black p-2 font-semibold rounded mr-2">
                <a href="#linkhere">View Demo</a>
              </button>
              <button className="bg-white text-black p-2 font-semibold rounded mt-2">
                <a href="#linkhere">View Source Code</a>
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="text-white border rounded-3xl hover:border-customPurple p-5 mb-10 inline-block w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] h-fit flex-shrink-0">
            <h1 className="text-2xl pt-2">C++ Airline Registration System</h1>
            <p className="pt-2 leading-7">
              Developed an airline registration system using C++ that efficiently handles passenger bookings, flight management, and ticketing processes. The system operates via a command-line interface, focusing on core functionalities such as user data management, flight schedules, and reservation tracking.
            </p>
            <div className="mt-4">
              <button className="bg-white text-black p-2 font-semibold rounded mr-2">
                <a href="#linkhere">View Demo</a>
              </button>
              <button className="bg-white text-black p-2 font-semibold rounded mt-2">
                <a href="#linkhere">View Source Code</a>
              </button>
            </div>
          </div>

          {/* Project 3 */}
          <div className="text-white border rounded-3xl h-fit hover:border-customPurple p-5 mb-10 inline-block w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] flex-shrink-0">
            <h1 className="text-2xl pt-2">Java Application</h1>
            <p className="pt-2 leading-7">
              Developed a Java application with a graphical user interface (GUI) for a booking and management system. The application includes intuitive navigation, data input validation, and responsive design elements, offering a seamless and user-friendly experience for managing bookings and administrative tasks.
            </p>
            <div className="mt-4">
              <button className="bg-white text-black p-2 font-semibold rounded mr-2">
                <a href="#linkhere">View Demo</a>
              </button>
              <button className="bg-white text-black p-2 font-semibold rounded mt-2">
                <a href="#linkhere">View Source Code</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
