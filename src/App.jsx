import { useEffect, useRef, useState } from "react";
import Cat from "./component/Cat";
import winImg from "../src/assets/win.jpg";
import mewSound from "./assets/mew.mp3";
import cheering from "./assets/cheering.mp3";
import running from "./assets/run.mp3";
import startSound from "./assets/gameStartSound.mp3";
import resetSoundE from "./assets/resetSound.mp3";
import Cheers from "./component/Cheers";
import CheringSong from "./assets/CheeringSong.mp3";
import CatDance from "./component/CatDance";
import { MdOutlineReplay } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

import KashingCheer from "./component/kashingCheer";

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

  const [modalOpen, setIsModalOpwn] = useState(false);

  const catCall = () => {
    const mew = new Audio(mewSound);
    mew.volume = 0.1;
    mew.play();

    const cheer = new Audio(cheering);
    cheer.volume = 0.1;
    cheer.play();
  };

  const catRun = () => {
    const run = new Audio(running);
    run.volume = 0.1;
    run.play();
  };

  const readySound = () => {
    const start = new Audio(startSound);
    start.volume = 0.1;
    start.play();
  };

  const resetSoundEffect = () => {
    const resetS = new Audio(resetSoundE);
    resetS.volume = 0.1;
    resetS.play();
  };

  const cheeringSong = () => {
    const song = new Audio(CheringSong);
    song.volume = 0.4;
    song.play();

    setTimeout(() => {
      song.pause();
      song.currentTime = 0;
    }, 10000);
  };

  useEffect(() => {
    if (play) {
      intervalRef.current = setInterval(() => {
        setCats((prevCats) => {
          const newCats = prevCats.map((cat) => {
            const move = Math.floor(Math.random() * 10) + 1;
            return { ...cat, position: Math.min(cat.position + move, 100) };
          });

          // Winner findout
          const win = newCats.find((cat) => cat.position >= 100);
          if (win) {
            setWinner(win.name);
            setPlay(false);
            catCall();
            cheeringSong();
            setIsModalOpwn(!modalOpen);
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
    resetSoundEffect();
    setIsModalOpwn(!modalOpen);
  };
  const gameStartBtn = () => {
    setPlay(!play);
    readySound();
    catRun();
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full p-4 sm:p-6 md:p-8 overflow-x-auto text-gray-700">
      <h1 className="text-center font-bold text-3xl ">Cat Dash Race</h1>

      <div className=" flex justify-center">
        <CatDance />
      </div>
      {/* TRACK AREA */}

      <div className="flex justify-center mt-2 lg:mt-8 p-10">
        <div className="flex gap-1 lg:gap-3 ">
          {cats.map((cat, i) => {
            const safePosition = Math.min(cat.position, 100);
            return (
              <div
                key={i}
                className={`relative w-8 lg:w-20 h-80 ${
                  cat.name == winner ? "bg-success" : "bg-white"
                } rounded shadow flex items-end justify-center`}
              >
                {/* Cat */}
                <div
                  className="absolute transition-all duration-500"
                  style={{ bottom: `${safePosition}%` }}
                >
                  {winner === cat.name ? <KashingCheer /> : ""}
                  <Cat isPlaying={cat.position} winner={winner} />
                </div>

                {/* Name */}
                <div className="absolute -bottom-6 text-[8px] lg:text-sm font-medium">
                  {cat.name}
                </div>
                <div className=" flex flex-col">
                  {cat.name == winner && (
                    <div>
                      <img
                        src={winImg}
                        alt=""
                        className=" h-6 lg:h-12 rounded-full"
                      />
                    </div>
                  )}
                  <p className=" text-center text-[8px] lg:text-sm">
                    {cat.position}m
                  </p>
                </div>

                <div
                  className={`absolute mb-82 lg:mb-85 w-full h-1 ${
                    winner == cat.name ? " bg-success" : "bg-red-500"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* modal  */}
      <dialog open={modalOpen} className="modal">
        <div className="modal-box">
          <div>
            <div className=" flex justify-center">
              {winner ? <Cheers /> : ""}
            </div>
            <p className=" text-center font-bold text-success">{winner}</p>
            <p className=" text-center font-thin">{winner ? "First" : ""}</p>
          </div>

          <div className=" flex justify-center">
            <button onClick={reset} className=" btn  bg-red-400 text-white">
              <MdOutlineReplay /> Play Again
            </button>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Click <span className="font-medium">Play Again</span> to start a new
            race
          </p>
        </div>
      </dialog>

      <div className=" mt-3 flex justify-center gap-3">
        {!winner && (
          <button
            disabled={play}
            onClick={gameStartBtn}
            className=" btn bg-indigo-500 text-white"
          >
            <FaPlay /> Play
          </button>
        )}
      </div>

      {!winner && (
        <div className=" text-center">
          <h2 className="text-lg font-semibold mb-2"> Game Rules</h2>
          <ul className=" list-inside space-y-1 text-gray-700">
            <li>Total 10 cats will race</li>
            <li>Each cat moves at a random speed</li>
            <li>The cat that reaches the 🏁 finish line first is the winner</li>
            <li>The race cannot be paused once it starts</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
