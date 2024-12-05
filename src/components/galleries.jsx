const Galleries = function () {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] mx-auto flex justify-between flex-wrap items-center">
      <h2 className="text-xl lg:text-2xl text-white py-8 w-full">
        From Our Galleries
      </h2>
      {Array.from({ length: 12 }, (_, i) => {
        return <GallerryImage key={i} img={`img${i + 1}.jpg`} />;
      })}
    </div>
  );
};

const GallerryImage = function ({ img }) {
  return (
    <div className="border-4 border-primary rounded-2xl w-full md:w-[47%] 2xl:w-[23%]">
      <img
        src={img}
        alt="gallerry"
        className="w-full h-full object-center object-cover"
      />
    </div>
  );
};

export default Galleries;
