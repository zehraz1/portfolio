/* eslint-disable react/no-unescaped-entities */

import profilePic from '../assets/zehra.jpeg';

const HomeMain =() => {
    return(
        <><div className='flex 2xl:mb-40' id='home'>
            <div className='inline-block'> 
                <h1 className="text-white 2xl:text-9xl 2xl:pt-60 2xl:pl-48 2xl:pb-10 inline-block">Hi, I'm Zehra</h1>
                <p className="text-customGray 2xl:pl-48 2xl:text-3xl leading-[2]">I am a <span className="text-white leading-[2]"> Software Engineering student</span> with <span className="text-white leading-[2]"> Full-Stack Web Development</span> <br></br>skills <span className="text-white leading-loose">actively seeking opportunities</span> <span className='leading-[2]'>to apply my knowledge in <br></br>real-world projects.</span></p>            
                </div>
            <img src={profilePic} className='rounded-full object-cover inline-block 2xl:h-96 2xl:w-96 2xl:mt-52 2xl:ml-28'></img>
        </div>
        </>
    );
}

export default HomeMain;