import websitePic2 from '../assets/website2.png';

const Projects = () => {
  return (
    <>
    <div>
      <h1 className="text-white text-5xl 2xl:pl-48">Projects</h1>
      
      <div className='2xl:mr-56'>

        <div className="text-white border rounded-3xl hover:border-customPurple 2xl:h-80 2xl:ml-48 2xl:m-10 2xl:p-5 space-y-8 relative">
        <h1 className="text-2xl 2xl:pt-2">E-Commerce Website</h1>
        <p className="text-xl 2xl:mr-[400px] leading-10"> Designed and developed a full-stack e-commerce website using Figma for the UI design, React and Tailwind CSS for the responsive frontend, and Node.js with SQL for the backend. The project also features smooth animations powered by Framer Motion, creating an engaging user experience.</p>
        <button className="bg-white text-black p-2 font-semibold rounded"><a href="#linkhere"></a>View Demo</button>
        <button className="bg-white text-black p-2 font-semibold rounded ml-2"><a href="#linkhere"></a>View Source Code</button>
        </div>
        <img className="w-72 absolute 2xl:left-[1250px] 2xl:-bottom-32 " src={websitePic2}></img>

        <div className="text-white border rounded-3xl hover:border-customPurple 2xl:h-80 2xl:ml-48 2xl:m-10 2xl:p-5 space-y-8 relative">
        <h1 className="text-2xl 2xl:pt-2">C++ Airline Registration System</h1>
        <p className="text-xl 2xl:mr-[400px] leading-10"> Developed an airline registration system using C++ that efficiently handles passenger bookings, flight management, and ticketing processes. The system operates via a command-line interface, focusing on core functionalities such as user data management, flight schedules, and reservation tracking.</p>
        <button className="bg-white text-black p-2 font-semibold rounded"><a href="#linkhere"></a>View Demo</button>
        <button className="bg-white text-black p-2 font-semibold rounded ml-2"><a href="#linkhere"></a>View Source Code</button>
        </div>
        <img className="w-72 absolute 2xl:left-[1250px] 2xl:-bottom-[490px] " src={websitePic2}></img>


        <div className="text-white border rounded-3xl hover:border-customPurple 2xl:h-80 2xl:ml-48 2xl:m-10 2xl:p-5 space-y-8 relative">
        <h1 className="text-2xl 2xl:pt-2">Java Application</h1>
        <p className="text-xl 2xl:mr-[400px] leading-10"> 
        Developed a Java application with a graphical user interface (GUI) for a booking and management system. The application includes intuitive navigation, data input validation, and responsive design elements, offering a seamless and user-friendly experience for managing bookings and administrative tasks.</p>
        <button className="bg-white text-black p-2 font-semibold rounded"><a href="#linkhere"></a>View Demo</button>
        <button className="bg-white text-black p-2 font-semibold rounded ml-2"><a href="#linkhere"></a>View Source Code</button>
        </div>
        <img className="w-72 absolute 2xl:left-[1250px] 2xl:-bottom-[850px] " src={websitePic2}></img>


        <div className="text-white border rounded-3xl hover:border-customPurple 2xl:h-80 2xl:ml-48 2xl:m-10 2xl:p-5 space-y-8 relative">
        <h1 className="text-2xl 2xl:pt-2">Admin Dashboard</h1>
        <p className="text-xl 2xl:mr-[400px] leading-10"> Developed an admin dashboard using React, designed to provide a seamless and intuitive user interface for managing data and operations. The dashboard features real-time data visualization, user management, and dynamic content handling, ensuring efficient oversight and control of various administrative tasks.</p>
        <button className="bg-white text-black p-2 font-semibold rounded"><a href="#linkhere"></a>View Demo</button>
        <button className="bg-white text-black p-2 font-semibold rounded ml-2"><a href="#linkhere"></a>View Source Code</button>
        </div>
        <img className="w-72 absolute 2xl:left-[1250px] 2xl:-bottom-[1210px] " src={websitePic2}></img>

      
        </div>
    </div>
    </>
  );
}

export default Projects;
 