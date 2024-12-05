const Light = function ({ size, top, left, right }) {
  const positionStyle = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}px`,
    left: left !== undefined ? `${left}px` : undefined,
    right: right !== undefined ? `${right}px` : undefined,
  };

  return (
    <div
      style={positionStyle}
      className="bg-[rgba(141,82,181,0.3)] rounded-full blur-3xl absolute"
    ></div>
  );
};

export default Light;
