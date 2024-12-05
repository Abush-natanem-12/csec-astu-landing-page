const WholeImage1Component = function () {
  return (
    <div className="w-full h-[100vh] bg-fixed bg-cover relative mb-14 lg:mb-24 ">
      <img
        src="/bgbig1.jpg"
        alt="background"
        className="w-full h-full object-cover object-center"
      />

      {/* NOTE */}
      <div className="w-full h-full absolute inset-0 bg-[rgba(0,0,0,.7)]"></div>
    </div>
  );
};

export default WholeImage1Component;
