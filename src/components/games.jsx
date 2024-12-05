import { useEffect, useState } from "react";
import Light from "./light";

const GameFunComponent = function () {
  const slideInterval = 5000;
  const [activePic, setActivePic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      activePic < 2 ? setActivePic((prev) => prev + 1) : setActivePic(0);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [activePic]);
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] mx-auto flex flex-col items-start gap-5 relative mb-14 lg:mb-24">
      <Light size={500} right={-400} left={-300} />
      <h2 className="text-2xl lg:text-3xl text-white1 font-bold tracking-[1px]">
        Some of Our Fun and Game Nights
      </h2>

      <div className="w-full h-[50vh] lg:h-[65vh] relative">
        {Array.from({ length: 3 }, function (el, i) {
          return (
            <img
              key={i}
              src={`/fun${i + 1}.jpg`}
              alt="About"
              className={
                i === activePic
                  ? `w-[100%] h-full  object-cover  opacity-100 translate-x-0 absolute inset-0 transition-all duration-900 mb-10 `
                  : `w-[100%] h-full  object-cover  opacity-0 translate-x-full absolute inset-0 transition-all duration-900 mb-10`
              }
            />
          );
        })}
        <div className="w-full h-full absolute inset-0 bg-[rgba(0,0,0,.7)]"></div>
      </div>
    </div>
  );
};

export default GameFunComponent;
