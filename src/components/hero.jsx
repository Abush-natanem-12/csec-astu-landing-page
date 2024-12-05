import { Link } from "react-router-dom";

const Hero = function () {
  return (
    <section className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] mx-auto flex flex-col xl:flex-row xl:justify-between items-center pt-8 lg:pt-16 2xl:pt-24 relative mb-14 lg:mb-24 xl:py-52">
      <div className="w-[95%] md:w-[90%] lg:w-[60%] 2xl:w-[55%] flex flex-col items-start gap-5 lg:gap-10">
        <h3 className="text-white4 text-base lg:text-2xl 2xl:text-3xl font-light tracking-[1px] uppercase">
          Empowering Developers, Building the Future
        </h3>
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl text-white1 tracking-[.5px]">
          Join a community of passionate{" "}
          <span className="font-bold text-primary">Softwere Engineers</span> and
          <span className="font-bold text-primary"> Problem Solvers </span>
          working together
        </h1>

        <p className="text-base lg:text-xl text-white6 font-[500] tracking-[1px]">
          We are a team of skilled developers, designers, and problem-solvers
          committed to pushing the boundaries of technology. Whether you are
          looking to collaborate on exciting projects, sharpen your coding
          skills, or make a real impact, you have come to the right place.
          Together, we build, learn, and grow as we take on the challenges of
          the ever-evolving tech landscape
        </p>

        <Link
          to="/about"
          className="text-xl lg:text-2xl bg-primary text-white1 px-4 py-2 rounded-lg"
        >
          Learn More
        </Link>
      </div>

      <div>
        <img src="/sec.png" alt="hero" className="w-[40rem]" />
      </div>
    </section>
  );
};

export default Hero;
