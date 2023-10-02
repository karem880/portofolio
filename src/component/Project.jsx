import { NavLink } from "react-router-dom";

const Project = ({ title, text, link, img,more }) => {
    return (
      <div className=" md:w-[430px] hover:scale-[1.1] rightt duration-1000 flex flex-col overflow-hidden rounded-md md:rounded-2xl border  dark:bg-slate-800 border-gray-400 drop-shadow-2xl bg-white h-[400px] md:h-[440px] mb-4 md:mb-0 w-[90%]">
        <img
          src={img}
          alt="project img"
          className="w-full flex items-center justify-center object-cover h-[65%] md:h-[70%] hover:scale-105 duration-1000"
        />
        <p className="mt-8 text-lg dark:text-gray-200 font-semibold ml-3 text-black drop-shadow-2xl">
          {title}
        </p>
        <div className='w-full p-2  flex justify-between mt-2 items-center '>
          <p className='text-lg dark:text-gray-200 md:text-2xl text-black font-bold  ml-2'>{text}</p>
          <NavLink to={link} className=" text-sm md:text-xl font-bold text-blue-500 dark:text-[#00ff91] hover:text-blue-700" >{more}</NavLink>
         
        </div>
      </div>
    );
  };
  export default Project