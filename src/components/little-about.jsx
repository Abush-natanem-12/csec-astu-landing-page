import { Link } from "react-router-dom";
import Light from "./light";

const LittleAboutComponent = function () {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-center gradient1 mb-14 lg:mb-24 relative"
    >
      <Light size={500} top={-100} left={undefined} right={-100} />
      <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] flex flex-col lg:flex-row lg:justify-between flex-wrap items-center mx-auto">
        <h2 className="w-full py-10 mb-4 text-2xl lg:text-4xl text-white tracking-[1px] font-bold border-b-2 border-[rgba(100,5,167,0.5)]">
          Little About US
        </h2>
        <div className="w-[100%] lg:w-[40%] flex flex-col gap-4 lg:gap-10 items-start gradient2 p-5">
          <h3 className="text-xl lg:text-2xl uppercase tracking-[.5px] text-white3">
            Welcome to the Club of Visionaries
          </h3>

          <p className="text-white4 text-base lg:text-xl font-semibold">
            Our club is more than just a gathering of individuals it is a
            thriving community where developers, competitive programmers,
            designers, and data scientists come together to create, innovate,
            and inspire. Whether you are looking to grow your skills, build
            meaningful connections, or make a real-world impact, you heve found
            the right place. We are a dynamic collective of passionate
            individuals dedicated to advancing technology and fostering a
            collaborative environment. Our members come from diverse backgrounds
            in software development, data science, and competitive programming,
            united by a common goal of innovation and excellence
          </p>

          <Link
            to={"/about"}
            className="text-white text-xl lg:text-2xl rounded-lg uppercase tracking-[1px] font-bold bg-primary px-4 py-2"
          >
            Read More
          </Link>
        </div>

        <div className="w-full lg:w-[55%] h-[50vh] lg:h-[70vh] relative ">
          <img
            className="w-[70%] sm:w-[50%] lg:w-[50%] absolute top-0 left-8"
            src="/img1.jpg"
            alt="about us"
          />

          <img
            className="w-[70%] sm:w-[50%] lg:w-[60%] absolute bottom-14 lg:bottom-2 right-0"
            src="/img3.jpg"
            alt="about us"
          />

          <img
            className="w-[60%] md:w-[50%] lg:w-[40%] absolute bottom-3 lg:bottom-10 left-4 lg:left-20 right-0"
            src="/img2.jpg"
            alt="about us"
          />
        </div>
      </div>
    </div>
  );
};

export default LittleAboutComponent;
