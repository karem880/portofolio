import "./Loader.css"
const Loader = () => (
  
  <div id="loader" className="fixed bg-white overflow-hidden h-full w-full flex items-center justify-center text-right after:bg-[#6e237e] after:absolute after:w-full after:h-4 after:-bottom-2 drop-shadow-xl select-none dark:bg-slate-800 dark:text-white">
    <img className="w-32 md:w-52" src="/logo.png" alt="" />
    <div>
      <h1 className="text-xl md:text-3xl drop-shadow"><Trans> Karem mahmoud</Trans><br /> <Trans> Welocle To My website</Trans></h1>
      <h2 className="mt-2 md:text-2xl drop-shadow text-[#6e237e] font-semibold"><Trans>Front End DEveloper </Trans></h2>
    </div>

    

    <div className="absolute top-[60%] flex justify-center items-center h-20">
      <div className="loading-dots flex">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
    </div>
  </div>
);


export default Loader;