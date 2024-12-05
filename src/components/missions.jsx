import { MissionList } from "../constants";

const MissionsComponent = function () {
  return (
    <div
      id="mission"
      className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] mx-auto mb-16 lg:mb-24"
    >
      <h2 className="text-xl lg:text-4xl text-white py-4 w-full">
        Our Mission
      </h2>
      <div className="w-full hidden lg:flex flex-col gap-14">
        {MissionList.map((el, i) =>
          i % 2 == 0 ? (
            <Mission key={i} text={el} i={i + 1} />
          ) : (
            <Mission2 key={i} text={el} i={i + 1} />
          )
        )}
      </div>

      <div className="w-full flex lg:hidden flex-col gap-14">
        {MissionList.map((el, i) => (
          <Mission2 key={i} text={el} i={i + 1} />
        ))}
      </div>
    </div>
  );
};

const Mission = function ({ text, i }) {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between ">
      <div className="w-[55%] flex flex-col gap-5 gradient2 p-10 text-center">
        <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white ">
          {text.heading}
        </h3>
        <p className="text-base md:text-xl 2xl:text-2xl font-semibold text-white4">
          {text.description}
        </p>
      </div>

      <img
        src={`/mission${i}.png`}
        alt="mission"
        className="w-full sm:w-[95%] md:w-[80%] lg:w-[40%] 2xl:w-[30%]"
      />
    </div>
  );
};

const Mission2 = function ({ text, i }) {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row lg:justify-between">
      <img
        src={`/mission${i}.png`}
        alt="mission"
        className="w-[60%] md:w-[50%] lg:w-[40%] 2xl:w-[30%]"
      />
      <div className="w-full md:w-[70%] lg:w-[55%] flex flex-col gap-y-10 gap-5 gradient2 p-10 text-center">
        <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white">
          {text.heading}
        </h3>
        <p className="text-base md:text-xl 2xl:text-2xl font-semibold text-white4">
          {text.description}
        </p>
      </div>
    </div>
  );
};
export default MissionsComponent;
