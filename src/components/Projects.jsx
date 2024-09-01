const Projects = () => {
  return (
    <div>
      <h1 className="text-customPurple text-3xl pl-56 font-semibold">Projects</h1>
      
      <div className="flex space-x-16 m-8">

        <div className="bg-customGrey w-60 h-40 ml-56 mt-4 rounded-3xl flex justify-center text-center pt-3">
            <h1 className="text-white">E-commerce Website</h1>
        </div>

        <div className="bg-customGrey w-60 h-40 ml-56 mt-4 rounded-3xl flex justify-center text-center pt-3">
            <h1 className="text-white">Airline Registration System</h1>
        </div>

        <div className="bg-customGrey w-60 h-40 ml-56 mt-4 rounded-3xl flex justify-center text-center pt-3">
            <h1 className="text-white">To-do List</h1>
        </div>

      </div>
    </div>
  )
}

export default Projects;
 