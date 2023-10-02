import  {    useState } from 'react';
import {  FaFacebook ,FaUser,FaLinkedin, FaCode,FaVideo,FaUserGraduate,FaYoutubeSquare  } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {  MdEditLocation,  MdPhoneBluetoothSpeaker, MdEmail , } from 'react-icons/md';
import { BiShowAlt } from 'react-icons/bi/';




import Navbar from '../component/navbar';
import ContactInfo from '../component/ContactInfo';
import Project from '../component/Project';


function Home() {
  const [isShowMore, setIsShowMore] = useState(true)



  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const emailBody = `اسم: ${name}%0Aبريد إلكتروني: ${email}%0Aرسالة: ${message}`;
    const recipientEmail = 'elalamymee@gmail.com'; 
    const emailLink = `mailto:${recipientEmail}?subject=رسالة من ${name}&body=${emailBody}`;
    window.location.href = emailLink;
  };
  


    let intro =`
FRONT END DEVOLOPER

`
let i = 0
function text(){
    document.getElementById("intro").innerHTML =intro.slice(0,i)
    i++

    // if(i > intro.length){
     
    // }
}

setInterval(function(){
text()
}
,600)

    return (
        <>
     <Navbar  />
    

    <div id='about' className='flex flex-col md:flex-row  justify-around  p-2 md:p-5 md:h-[99vh] h-fit dark:bg-transparent bg-slate-700 '   >
      <div className='w-full md:w-[60%] flex flex-col justify-center leftt text-white mt-20 md:mt-0 ml-0 md:ml-52  ' >
        <h1 className='text-white text-xl font-extrabold md:text-4xl'>Hello,iam karem</h1>
        <h1 className='text-xl md:text-[40px] font-extrabold text-blue-500 dark:text-[#00ff91] mt-5'>student in we school </h1>
        <div className='h-[50px] flex items-center'>
        <h1 className='text-xl md:text-4xl font-extrabold text-white mt-5 uppercase' id='intro'>Front end Developer</h1>
        </div>
        <button className='w-[150px]  h-[50px] border border-blue-400 dark:border-[#00ff91]  rounded-md  mt-10 flex items-center justify-center relative  before:absolute before:bottom-0 before:w-0 before:bg-blue-500 dark:before:bg-[#00ff91] before:h-full hover:before:w-full   transition-all duration-500 before:transition-all before:duration-500 '><a href="#projects" className='z-0'>veiw my work</a></button>
        <div className=' w-[70%] md:w-[30%] flex justify-between items-center mt-10 md:mt-20'>
      <a href="https://www.facebook.com/profile.php?id=100010546894506" target="_blank" rel="noopener noreferrer">
        <FaFacebook    className='' size={28} />
      </a>
      <a href="https://www.freelancer.com/u/karem88" target="_blank" rel="noopener noreferrer">
        <FaUser  className='' size={28} />
      </a>
      <a href="https://www.linkedin.com/in/karem-mahmoud-963b84262/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin  className=' text-shadow' size={28} />
      </a>
    
    </div>
        
      </div>
      <div className='w-full mt-24 md:mt-0 md:w-[40%] flex justify-center items-center rightt'>
  <img className='  object-cover w-[80%] md:w-[70%] rounded-full md:rounded-2xl animation-img clip-zigzag' src="./assets/WhatsApp Image 2023-05-27 at 6.05.12 PM.jpeg" id='' alt="" />
</div>

    </div>
     

     <section id='services' className='mt-[200px] bg-gradient-to-br flex flex-col items-center min-h-[500px]'>
      <h1 className='text-blue-500 dark:text-[#00ff91] text-center text-4xl font-bold mt-24 bottomm'>Services</h1>
      <div className='flex flex-col justify-center gap-10  items-center md:flex-row w-full m-auto mt-20 flex-wrap'>
        
      <Services
  icon={<FaCode />}
  title={"Front-End Developer "}
  text={"Are you looking for a seasoned professional to handle your front-end development needs? Look no further! I am an experienced front-end developer ready to bring your web projects to life. With a deep understanding of user interfaces and client-side functionality, I excel in creating visually appealing and interactive experiences that captivate your audience. Let's elevate your web presence together!"}
/>
      <Services
  icon={<FaCode />}
  title={"Beginner Back-End Development "}
  text={"Are you new to back-end development and interested in learning Node.js? Welcome aboard! This service is designed especially for beginners like you, who are eager to dive into the world of back-end web development using Node.js. You'll embark on a journey to understand the core concepts, build server-side functionality, and grasp the foundations of creating powerful web applications with Node.js."}
/>
<Services
  icon={<FaUserGraduate />}
  title={"Course Instructor"}
  text={
    "Are you eager to expand your horizons and acquire new skills? Join me as a Course Instructor, and together, we'll embark on a knowledge-sharing journey. In my engaging online classes, I'll provide you with the tools and insights needed for personal and professional growth. You can expect interactive sessions, expert guidance, and a supportive learning community. "
  }
/>

        
      
      </div>
     </section>



     <h1 className='text-blue-500 dark:text-[#00ff91] text-center text-4xl font-bold mt-24 bottomm'>skills</h1>

     <section className="lg:w-[60%] w-[95%] mt-20 flex flex-col border   border-blue-600 dark:border-green-500  bg-gray drop-shadow-2xl shadow-slate-700 bg-white  border-0.5  rounded-md m-auto justify-between p-2 md:p-10 gap-2 dark:bg-slate-700 dark:text-white">

     


    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>HTML</h1>
        <h1>95%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[95%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>




    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>CSS</h1>
        <h1>90%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[90%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>






    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>js</h1>
        <h1>75%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[75%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>





    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>Bootstrab</h1>
        <h1>80%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[80%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>




    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>TAilwind css</h1>
        <h1>90%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[90%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>




    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>React js</h1>
        <h1>85%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[85%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>


    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>python</h1>
        <h1>70%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[70%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400" ></div>
      </div>
    </div>




    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>Node js</h1>
        <h1>50%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[50%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>





    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>Express</h1>
        <h1>50%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[50%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>




    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>Php Basics</h1>
        <h1>90%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[90%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>





    <div className="flex flex-col items-center justify-between text-black dark:text-white w-full p-3 mt-3 rounded-full">
      <div className="flex items-center justify-between w-full">
        <h1>GUI tkinter</h1>
        <h1>50%</h1>
      </div>
      <div className="w-full h-2 rounded-sm bg-blue-400 dark:bg-green-800 relative mt-2">
        <div className="before:absolute before:top-0 before:left-0 before:w-[50%] rounded-full before:h-full before:bg-blue-600 before:rounded-full before:dark:bg-green-400"  ></div>
      </div>
    </div>










     </section>
        
        <section id='projects' className='mt-[200px]'>

      <h1 className='text-blue-500 dark:text-[#00ff91] text-center text-4xl font-bold mt-32 bottomm'>Projects</h1>
      <div className='flex md:flex-row gap-10 justify-evenly items-center  w-full flex-col mt-20'>
        <Project img={"./assets/chat.png"}title={"my caht boat with open ai api  "} text={'karem caht'} link={"https://karemmahmouud.netlify.app/project%20js/chat/index.html"} more={"show the website "} />
        <Project img={"./assets/zaman.png"} title={"A website for building real estate trading "} text={"ZAMAN WEBSITE"} more={"show the website"} link={"https://zaman-web.vercel.app/"}  />
        <Project img={"/assets/we.png"} title={`We school website  "MERN STACK"`} text={"WE SCHOOL"} link={"https://we-school.vercel.app/"} more={"show the website "}/>

      </div>
      <button onClick={() => { setIsShowMore(!isShowMore) }} className="bg-blue-800 dark:bg-[#00ff91] mt-24 text-white drop-shadow p-2 rounded m-auto w-40 text-center flex items-center justify-center gap-2 cursor-pointer hover:scale-110 transition-all ">{isShowMore ? '  Show more  ' : 'show less'}<BiShowAlt /></button>

     


      <div className='flex md:flex-row gap-10 justify-evenly items-center  w-full flex-col mt-20'>
      {!isShowMore && (
        <>
        
        <Project img={"./assets/qr.png"}title={"QRCODE generator by api  "} text={'QRCODE '} link={"https://karemmahmouud.netlify.app/project%20js/qurcode%20generator/qr.html"} more={"show the website "} />
        <Project img={"./assets/dash.png"} title={"API DASHBOARD "} text={"DASHBOARD"} link={"Dashboard"} more={"show the website"} />
        <Project img={"./assets/weather.png"} title={"weather APP"} text={"react weather app"} link={"https://weather-app-pro-seven.vercel.app/"} more={"show the website "}/>
        
        </>
      )}
      </div>



    





        </section>


        
        <h1 className='text-blue-500 dark:text-[#00ff91] text-center text-4xl font-bold mt-[200px]'>Contact US</h1>
       
        <section id="contact" className="lg:w-[50%] w-[80%] mt-20 flex flex-col border  border-blue-600 dark:border-green-500 md:flex-row-reverse bg-gray drop-shadow-2xl bg-white  border-0.5  rounded-md m-auto justify-between p-2 md:p-10 gap-2 dark:bg-slate-700 dark:text-white">

  <div className="w-full flex flex-col md:w-[45%]">
    <h1 className="p-2 text-blue-700 dark:text-sec text-4xl">Contact </h1>
    <p className="text-md md:text-2xl p-2">We are here for you. How can we assist you?</p>
    <form onSubmit={handleSubmit} className="mt-5">
      <input type="text" required name="name" placeholder="Enter your name" className="w-full bg-gray-200 placeholder-black outline-none p-5 rounded-md mt-5 dark:bg-slate-800 dark:placeholder:text-white" />
      <input type="email" required name="email" placeholder="Enter your email" className="w-full bg-gray-200 placeholder-black outline-none p-5 rounded-md mt-4 dark:bg-slate-800 dark:placeholder:text-white" />
      <input type="text" required name="message" placeholder="Enter your message" className="w-full bg-gray-200 placeholder-black outline-none p-8 rounded-md mt-10 dark:bg-slate-800 dark:placeholder:text-white" />
      <input type="submit" value="Send" className="w-full rounded-xl h-16 p-2 text-center  dark:bg-[#00ff91] bg-blue-700 text-white mt-10" />
    </form>
  </div>
  <div className="w-full flex flex-col md:w-[45%]">
    <div className="w-full md:w-[100%]">
      <img src="./assets/undraw_profile_data_re_v81r.svg" className="object-cover md:w-full h-full w-1/2 m-auto" alt="" />
    </div>
    <div className="w-full h-[40%] flex flex-col justify-between space-y-5 mt-10">
      <ContactInfo icon={<MdEditLocation />} text="Mansoura, Dakahlia" />
      <ContactInfo icon={<MdPhoneBluetoothSpeaker />} text="01003217589" />
      <ContactInfo icon={<MdEmail />} text="elalamymee@gmail.com" />
    </div>
  </div>
</section>

        


        

           <section className='mt-[200px] w-full bg-blue-400  dark:bg-slate-500 h-24 text-white flex items-center justify-center text-sm md:text-xl font-extrabold '>
            <h1>All COPYRIGHT FOR @ <a href="https://www.facebook.com/profile.php?id=100010546894506">KAREM MAHMOUD</a></h1>
           </section>
            
        </>
    );
}

export default Home;

const Services = ( { icon , title , text} ) => {
  return(
    <div className='border topp border-blue-500 dark:border-gray-400  hover:scale-[1.1] mt-16 md:mt-0  duration-1000 rounded-lg dark:bg-gradient-to-br from-slate-800 via-slate-600 to-slate-700 bg-white drop-shadow-2xl shadow-white w-[90%] md:w-[370px] min-h-[350px] md:min-h-[420px] flex flex-col p-1 justify-center items-center '>
      <h1 className='text-center  text-blue-600  dark:text-[#00ff91] text-[50px]  hover:scale-[1.1]'> {icon}</h1>
      <h1 className='text-center   text-blue-500 dark:text-[#00ff91] text-2xl mt-10 font-bold '> {title}</h1>
      <p className='text-center  dark:text-gray-200 text-gray-700 text-md mt-5 ml-2 '>{text}</p>

    </div>
  )
}









