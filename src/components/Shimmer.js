const Shimmer = () => {
  return (
    <div
      className="flex flex-wrap"
      data-testid="shimmer"
    >
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-52 h-52 m-5 bg-gray-300"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
