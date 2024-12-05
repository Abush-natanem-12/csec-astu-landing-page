const Footer = function () {
  return (
    <div className="w-full  bg-[rgba(100,5,167,0.2)] h-[25vh]">
      <footer className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] mx-auto flex flex-col md:flex-row gap-10 items-center py-1 md:py-6 2xl:py-12 md:justify-between text-center">
        <div className="flex flex-col w-[90%] gap-3 items-start md:w-[45%] text-center">
          <span className="text-xl lg:text-3xl text-gray-200 tracking-[2px] uppercase">
            For More Information
          </span>
          <span className="text-[1rem] text-gray-400 tracking-[2px] uppercase">
            Telegram &nbsp; @csec_astu
          </span>
          <span className="text-[1rem] text-gray-400 tracking-[2px] uppercase">
            Linkedin @csec_astu
          </span>

          <span className="text-[1rem] text-gray-400 tracking-[2px] uppercase">
            Youtube @csec_astu
          </span>
        </div>

        <p className="text-base md:text-xl  xl:text-3xl uppercase tracking-[2px] text-white4 md:w-[45%]">
          Computer sciemce and Engineering Club
        </p>
      </footer>
    </div>
  );
};

export default Footer;
