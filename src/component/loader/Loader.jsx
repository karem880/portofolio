import "./Loader.css"
const Loader = () => (
  
  <div id="loader" className="fixed  overflow-hidden h-full w-full flex items-center justify-center gap-10 text-start after:bg-blue-600
   after:absolute after:w-full after:h-4 after:-bottom-2 drop-shadow-xl select-none bg-slate-800 dark:text-white">
   
    <img className="w-32 md:w-52 rounded-full z-10 bottomm" src="./assets/WhatsApp Image 2023-05-27 at 6.05.12 PM.jpeg" alt="" />
    <div className="topp">
      <h1 className=" md:text-3xl text-white drop-shadow">   Welocle    </h1>
      <h2 className="mt-2 md:text-2xl drop-shadow text-blue-500 font-semibold"><span className="text-white md:text-2xl  font-extrabold">iam karem mahmoud</span> <br /> Front End DEveloper </h2>
    </div>

    

    <div className="absolute top-[60%] flex justify-center items-center h-20 leftt text-white ">
      <div className="loading-dots flex">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
    </div>
  </div>
);


export default Loader;