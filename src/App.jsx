import { useEffect, useRef, useState } from "react";
import Cat from "./component/Cat";
import winImg from "../src/assets/win.jpg";

const App = () => {
  const [cats, setCats] = useState([
    { name: "Cat 1", position: 0 },
    { name: "Cat 2", position: 0 },
    { name: "Cat 3", position: 0 },
    { name: "Cat 4", position: 0 },
    { name: "Cat 5", position: 0 },
    { name: "Cat 6", position: 0 },
    { name: "Cat 7", position: 0 },
    { name: "Cat 8", position: 0 },
    { name: "Cat 9", position: 0 },
    { name: "Cat 10", position: 0 },
  ]);

  const [play, setPlay] = useState(false);
  const [winner, setWinner] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (play) {
      intervalRef.current = setInterval(() => {
        setCats((prevCats) => {
          const newCats = prevCats.map((cat) => {
            const move = Math.floor(Math.random() * 10) + 1;
            return { ...cat, position: Math.min(cat.position + move, 100) };
          });

          // Winner detect
          const win = newCats.find((cat) => cat.position >= 100);
          if (win) {
            setWinner(win.name);
            setPlay(false);
          }

          return newCats;
        });
      }, 500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [play]);

  const reset = () => {
    clearInterval(intervalRef.current);
    setWinner(null);
    setCats((prevCats) => prevCats.map((cat) => ({ ...cat, position: 0 })));
  };
  return (
    <div className="bg-gray-100 min-h-screen  p-4 sm:p-6 md:p-8 overflow-x-auto">
      <h1 className="text-center font-bold text-3xl mb-16">🐱 Cat Dash Race</h1>

      {/* TRACK AREA */}

      <div className="flex justify-center mt-10 p-10">
        <div className="flex gap-1 lg:gap-3 ">
          {cats.map((cat, i) => {
            const safePosition = Math.min(cat.position, 100);
            return (
              <div
                key={i}
                className={`relative w-10 lg:w-20 h-80 ${
                  cat.name == winner ? "bg-success" : "bg-white"
                } rounded shadow flex items-end justify-center`}
              >
                {/* Cat */}
                <div
                  className="absolute transition-all duration-500"
                  style={{ bottom: `${safePosition}%` }}
                >
                  <Cat isPlaying={cat.position} />
                </div>

                {/* Name */}
                <div className="absolute -bottom-6 text-sm font-medium">
                  {cat.name}
                </div>
                <div className=" flex flex-col">
                  {cat.name == winner && (
                    <div>
                      <img src={winImg} alt="" className=" h-12 rounded-full" />
                    </div>
                  )}
                  <p className=" text-center">{cat.position}</p>
                </div>

                <div
                  style={{ bottom: `${107}%` }}
                  className="absolute  w-full h-1 bg-red-500"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" mt-10 flex justify-center">
        <button
          onClick={() => setPlay(!play)}
          className=" btn bg-indigo-500 text-white"
        >
          Game Start
        </button>

        <button onClick={reset} className=" btn  bg-red-400 text-white">
          Reset Race
        </button>
      </div>
    </div>
  );
};

export default App;
