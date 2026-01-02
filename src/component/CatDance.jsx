import React from "react";
import Lottie from "lottie-react";
import catDance from "../assets/Dance cat (1).json";

const CatDance = () => {
  return (
    <div>
      <div className="w-12 sm:w-16">
        <Lottie animationData={catDance} loop className={`h-10 lg:h-20 `} />
      </div>
    </div>
  );
};

export default CatDance;
