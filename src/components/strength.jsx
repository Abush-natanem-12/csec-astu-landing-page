import { SterngthList } from "../constants";

const StrengthComponent = function () {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] overflow-auto flex  flex-shrink-0 gap-5 lg:gap-0 lg:justify-between mx-auto rounded-xl shadow-xl mb-14 lg:mb-24">
      {SterngthList.map((el, i) => {
        return (
          <div
            key={i}
            className="w-[65%] lg:w-[24%] flex flex-col gap-6 items-center gradient2 px-4 py-5 lg:py-6 2xl:py-10 flex-shrink-0 text-center bg-black relative"
          >
            {/* <span className="text-2xl text-white bg-blue-300 rounded-full p-2 absolute top-1 left-1">
              0{i + 1}
            </span> */}
            <h3 className="text-2xl lg:text-xl uppercase text-white1 tracking-[1px] font-[500] flex items-center">
              {el.heading}
            </h3>
            <p className="text-base  text-white4 tracking-[1px]">
              {el.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StrengthComponent;
