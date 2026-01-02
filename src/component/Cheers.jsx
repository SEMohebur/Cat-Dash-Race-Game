import React from "react";
import Lottie from "lottie-react";
import cheers from "../assets/Cheers.json";

const Cheers = () => {
  return (
    <div>
      <div className="w-12 sm:w-16">
        <Lottie animationData={cheers} loop className={`h-20 lg:h-20 mb-0 `} />
      </div>
    </div>
  );
};

export default Cheers;
