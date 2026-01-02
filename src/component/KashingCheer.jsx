import React from "react";
import Lottie from "lottie-react";
import kashingcheers from "../assets/KaShing Cheer.json";

const KashingCheer = () => {
  return (
    <div>
      <div className="w-12 sm:w-16">
        <Lottie
          animationData={kashingcheers}
          loop
          className={`h-20 lg:h-20 mb-0 `}
        />
      </div>
    </div>
  );
};

export default KashingCheer;
