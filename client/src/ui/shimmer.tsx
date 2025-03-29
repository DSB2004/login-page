import React from "react";

interface ShimmerProps extends React.HTMLProps<HTMLDivElement> {}

const Shimmer: React.FC<ShimmerProps> = (props) => {
  return (
    <div
      {...props} 
      className={` bg-gray-300 rounded-full animate-pulse ${
        props.className || ""
      }`}
    />
  );
};

export default Shimmer;
