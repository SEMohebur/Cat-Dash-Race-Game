import Lottie from "lottie-react";
import catRun from "../assets/Momo Run.json";
import { useEffect, useRef, useState } from "react";

const Cat = ({ isPlaying }) => {
  const lottieRef = useRef();
  const [catPlay, setCatPlay] = useState(true);
  // console.log(isPlaying);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (isPlaying > 0 && isPlaying < 100) {
      setCatPlay(true);
      lottieRef.current.play();
    } else {
      setCatPlay(false);
      lottieRef.current.pause();
    }
  }, [isPlaying]);
  return (
    <div className="w-12 sm:w-16">
      <Lottie
        lottieRef={lottieRef}
        animationData={catRun}
        loop
        className={`h-10 lg:h-20 mb-0 ${catPlay ? "rotate-[90deg]" : ""}`}
      />
    </div>
  );
};

export default Cat;
