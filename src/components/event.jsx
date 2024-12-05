import { eventsList } from "../constants";

const EventsComponent = function () {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] mx-auto">
      <h2 className="text-xl lg:text-2xl text-white py-4 w-full">
        Some Of Previous Events
      </h2>

      <p className="text-base lg:text-xl text-white4 tracking-[.5px] font-[300] mb-6">
        At our club, we are dedicated to fostering growth, knowledge-sharing,
        and collaboration among students and members. We host a variety of
        seminar events designed to inspire, educate, and empower our community.
        From hands-on workshops to insightful guest speaker sessions, we create
        opportunities for everyone to learn, connect, and excel. <br />
        Our events cover a wide range of topics, including technology, personal
        development, career guidance, and much more. Whether you’re looking to
        sharpen your skills, explore new ideas, or simply meet like-minded
        individuals, we have something for you!
      </p>
      {eventsList.map((el, i) => {
        return (
          <div
            key={i}
            className="w-full flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between mb-14"
          >
            <div className="w-full md:w-[40%]">
              <img
                src={`/ev${i + 1}.jpg`}
                alt="event"
                className="w-full border-2 border-primary rounded-2xl"
              ></img>
            </div>
            <div className="w-full md:w-[50%] flex flex-col gap-4 bg-[rgba(11,63,93,0.1)] p-2">
              <div className="flex gap-3 items-center">
                <span className="text-base md:text-xl lg:text-2xl text-white tracking-[.5px]">
                  Title :{" "}
                </span>
                <span className="text-base md:text-xl lg:text-2xl text-white2 tracking-[.5px]">
                  {el.title}
                </span>
              </div>

              <p className="text-xl lg:text-2xl text-white4 tracking-[.5px] font-[200]">
                {el.description}
              </p>

              <div className="flex gap-3 items-center">
                <span className="text-base md:text-xl lg:text-2xl text-white tracking-[.5px]">
                  {el.host}
                </span>
                <span className="text-base md:text-xl lg:text-2xl text-white2 tracking-[.5px] font-[300]">
                  {el.role}
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <span className="text-base md:text-xl lg:text-2xl text-white tracking-[.5px]">
                  Date :
                </span>
                <span className="text-base md:text-xl lg:text-2xl text-white2 tracking-[.5px] font-[300]">
                  {el.date}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EventsComponent;
