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
  export default ContactInfo;