import  {    useState } from 'react';
import {  FaFacebook ,FaUser,FaLinkedin, FaCode,FaVideo,FaUserGraduate  } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {  MdEditLocation,  MdPhoneBluetoothSpeaker, MdEmail } from 'react-icons/md';
import { BiShowAlt } from 'react-icons/bi/';




import Navbar from '../component/navbar';
import Loader from '../component/loader/Loader';


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

    if(i > intro.length){
      i=11
    }
}

setInterval(function(){
text()
}
,300)

    return (
        <>
     <Navbar  />
    

    <div id='about' className='flex flex-col md:flex-row  justify-around  p-1 md:p-5 md:h-[90vh] h-fit ' style={{ background: 'linear-gradient( to right, black, gray)' }}  >
      <div className='w-full md:w-[60%] flex flex-col justify-center leftt text-white mt-20 md:mt-0 ml-0 md:ml-52  ' >
        <h1 className='text-white text-4xl'>Hello,iam karem</h1>
        <h1 className='text-[40px] font-blod text-blue-400 mt-5'>student in we school </h1>
        <h1 className='text-4xl font-blod text-white mt-5 uppercase' id='intro'>Front end Developer</h1>
        <button className='w-[150px]  h-[50px] border border-blue-400 rounded-md  mt-10 flex items-center justify-center relative  before:absolute before:bottom-0 before:w-0 before:bg-blue-500 before:h-full hover:before:w-full   transition-all duration-500 before:transition-all before:duration-500 '><a href="#" className='z-0'>veiw my work</a></button>
        <div className=' w-[70%] md:w-[30%] flex justify-between items-center mt-10 md:mt-20'>
      <a href="https://www.facebook.com/profile.php?id=100010546894506" target="_blank" rel="noopener noreferrer">
        <FaFacebook    className='' size={28} />
      </a>
      <a href="https://www.freelancer.com/u/karem88" target="_blank" rel="noopener noreferrer">
        <FaUser  className='' size={28} />
      </a>
      <a href="https://www.linkedin.com/in/karem-mahmoud-963b84262/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin  className='' size={28} />
      </a>
    
    </div>
        
      </div>
      <div className='w-full mt-24 md:mt-0 md:w-[40%] flex justify-center items-center rightt'>
  <img className='  object-cover w-[60%] clip-zigzag' src="./assets/WhatsApp Image 2023-05-27 at 6.05.12 PM.jpeg" id='animation-img' alt="" />
</div>

    </div>
     

     <section id='services' className='mt-[200px]'>
      <h1 className='text-blue-500  text-center text-4xl font-bold mt-24 bottomm'>Services</h1>
      <div className='flex flex-col justify-around  items-center md:flex-row w-[90%] m-auto mt-20'>
        <Services  icon={<FaCode />} title={"programming"} text={"Front-end development involves creating the user interface and client-side functionality of websites and web applications, encompassing everything users see and interact with in their browsers."} />
        <Services  icon={<FaUserGraduate />} title={" Course Instructor"} text={"As a Zoom Meeting Course Instructor, you'll be responsible for conducting engaging online classes, sharing valuable knowledge, and facilitating interactive discussions to ensure a productive learning experience for participants."} />
        <Services  icon={<FaVideo />} title={"Content Creator"} text={"A Content Creator's role is to produce engaging and interactive content for websites and web applications, shaping the user interface and client-side functionality to captivate and engage users in their online experiences."} />
        
      
      </div>
     </section>
        
        <section id='projects' className='mt-[200px]'>

      <h1 className='text-blue-500  text-center text-4xl font-bold mt-32 bottomm'>Projects</h1>
      <div className='flex md:flex-row gap-10 justify-evenly items-center  w-full flex-col mt-20'>
        <Project img={"./assets/chat.png"}title={"my caht boat with open ai api  "} text={'karem caht'} link={"https://karemmahmouud.netlify.app/project%20js/chat/index.html"} more={"show the website "} />
        <Project img={"./assets/zaman.png"} title={"A website for building real estate trading "} text={"ZAMAN WEBSITE"} more={"show the website"} link={"https://zaman-web.vercel.app/"}  />
        <Project img={"/assets/we.png"} title={`We school website  "MERN STACK"`} text={"WE SCHOOL"} link={"https://we-school.vercel.app/"} more={"show the website "}/>

      </div>
      <button onClick={() => { setIsShowMore(!isShowMore) }} className="bg-blue-800 mt-24 text-white drop-shadow p-2 rounded m-auto w-40 text-center flex items-center justify-center gap-2 cursor-pointer hover:scale-110 transition-all ">{isShowMore ? '  Show more  ' : 'show less'}<BiShowAlt /></button>

     


      <div className='flex md:flex-row gap-10 justify-evenly items-center  w-full flex-col mt-20'>
      {!isShowMore && (
        <>
        
        <Project img={"./assets/qr.png"}title={"QRCODE generator by api  "} text={'QRCODE '} link={"https://karemmahmouud.netlify.app/project%20js/qurcode%20generator/qr.html"} more={"show the website "} />
        <Project img={"./assets/stop.png"} title={"Timer and stopwatch "} text={"STOPWATCH"} link={"https://karemmahmouud.netlify.app/stop%20watch/stopwatch.html"} more={"show the website"} />
        <Project img={"./assets/snake.png"} title={"SNACK GAME BY JS"} text={"SNAKE GAME"} link={"https://karemmahmouud.netlify.app/project%20js/games/index.html"} more={"show the website "}/>
        
        </>
      )}
      </div>



      <div className='flex md:felx-row justify-between items-center w-[80%] felx-col'>


        

      </div>





        </section>


        
        <h1 className='text-blue-500  text-center text-4xl font-bold mt-[200px]'>Contact US</h1>
       
        <section id="contact" className="lg:w-[50%] w-[80%] mt-20 flex flex-col md:flex-row-reverse bg-gray drop-shadow-2xl bg-white  border-0.5 border-gray-400 rounded-md m-auto justify-between p-2 md:p-10 gap-2 dark:bg-slate-700 dark:text-white">

  <div className="w-full flex flex-col md:w-[45%]">
    <h1 className="p-2 text-blue-700 dark:text-sec text-4xl">Contact </h1>
    <p className="text-md md:text-2xl p-2">We are here for you. How can we assist you?</p>
    <form onSubmit={handleSubmit} className="mt-5">
      <input type="text" required name="name" placeholder="Enter your name" className="w-full bg-gray-200 placeholder-black outline-none p-5 rounded-md mt-5 dark:bg-slate-800 dark:placeholder:text-white" />
      <input type="email" required name="email" placeholder="Enter your email" className="w-full bg-gray-200 placeholder-black outline-none p-5 rounded-md mt-4 dark:bg-slate-800 dark:placeholder:text-white" />
      <input type="text" required name="message" placeholder="Enter your message" className="w-full bg-gray-200 placeholder-black outline-none p-8 rounded-md mt-10 dark:bg-slate-800 dark:placeholder:text-white" />
      <input type="submit" value="Send" className="w-full rounded-xl h-16 p-2 text-center -700 bg-blue-700 text-white mt-10" />
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

        


        

           <section className='mt-[200px] w-full bg-blue-400 h-24 text-white flex items-center justify-center text-xl font-extrabold '>
            <h1>All COPYRIGHT FOR @ <a href="https://www.facebook.com/profile.php?id=100010546894506">KAREM MAHMOUD</a></h1>
           </section>
            
        </>
    );
}

export default Home;

const Services = ( { icon , title , text} ) => {
  return(
    <div className='border-[1px] topp border-gray-400  hover:scale-[1.1] mt-16 md:mt-0  duration-1000 rounded-lg bg-white drop-shadow-2xl  w-[80%] md:w-[370px] h-auto md:h-[420px] flex flex-col p-1 justify-center items-center '>
      <h1 className='text-center text-blue-600 text-[50px]  hover:scale-[1.1]'> {icon}</h1>
      <h1 className='text-center text-blue-500 text-2xl mt-10 font-bold '> {title}</h1>
      <p className='text-start text-gray-700 text-md mt-5 ml-2 '>{text}</p>

    </div>
  )
}


const Project = ({ title, text, link, img,more }) => {
  return (
    <div className=" md:w-[430px] hover:scale-[1.1] rightt duration-1000 flex flex-col overflow-hidden rounded-md md:rounded-2xl border border-gray-400 drop-shadow-2xl bg-white h-auto md:h-[440px] mb-4 md:mb-0 w-[80%]">
      <img
        src={img}
        alt="project img"
        className="w-full flex items-center justify-center object-cover h-[65%] md:h-[70%] hover:scale-105 duration-1000"
      />
      <p className="mt-8 text-lg font-semibold ml-3 text-black drop-shadow-2xl">
        {title}
      </p>
      <div className='w-full p-2  flex justify-between mt-2 items-center '>
        <p className='text-lg md:text-2xl text-black font-bold  ml-2'>{text}</p>
        <NavLink to={link} className=" text-sm md:text-xl font-bold text-blue-500 hover:text-blue-700" >{more}</NavLink>
       
      </div>
    </div>
  );
};
const ContactInfo = ({ icon, text }) => {
  return (
    <div className="w-full h-[40%] flex flex-row justify-start items-center mt-10">
      <div className="text-blue-700 bg-[#bdd8f4] rounded-[50px] w-[50px] h-[50px] flex justify-center items-center text-sm md:text-2xl">
        {icon}
      </div>
      <p className="ml-0 text-md md:text-xl md:ml-10">{text}</p>
    </div>
  );
};