import profilePic from '../assets/zehra.jpeg';

const HomeMain = () => {
  return (
    <>   
      <div className="flex flex-col justify-center items-center pt-5 max-h-screen md:pt-28 md:flex-row-reverse md:justify-between md:items-center w-[90%] md:w-[85%] lg:w-[80%] mx-auto ">
        {/* Image on top by default, side-by-side on medium screens (on the right) */}
        <div className="flex justify-center pb-12 md:pb-10 md:p-0 md:w-1/2 lg:w-1/2 ">
          <img src={profilePic} className="rounded-full h-[10rem] w-[10rem] object-cover md:h-[20rem] md:w-[20rem] lg:h-[28rem] lg:w-[28rem]" alt="Profile" />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left md:w-1/2 lg:w-full lg:pl-12">
          <h1 className="text-white text-4xl mb-4 md:text-6xl lg:text-9xl ">Hi, I'm Zehra</h1>
          <p className="text-customGray md:text-xl lg:text-2xl lg:w-[70%]">
            I am a <span className="text-white md:leading-loose">Software Engineering</span> student with 
            <span className="text-white md:leading-loose"> Full-Stack Web Development</span> skills actively seeking opportunities 
            to apply my knowledge in <span className="text-white md:leading-loose">real-world projects</span>.
          </p>                
        </div>
      </div>
    </>
  );
}

export default HomeMain;
