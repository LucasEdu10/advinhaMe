import React, { useState } from "react";
import NavBar from "./components/navbar";
import Input from "./components/input";
import But from "./components/button";
import About from "./components/about";
import BaseBoard from "./components/baseBoard";
import "./styles.css";
import InfoBar from "./components/infoBar";

import { IWords } from "../../types/words";
import LetterBar from "./components/letterBar";

export default function App() {
  const [words, setWords] = useState<IWords[] | []>([]);
  const [count, setCount] = useState(0);
  const [showLetter, setShowLetter] = useState(false);
  const [digitado, setDigitado] = useState<IWords>();

  const verify = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
    setShowLetter(true);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      // console.log("Entrei");
      verify();
      setShowLetter(true);
      console.log(count);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <div className="wapper">
        <InfoBar verify={verify} count={count} />
        <But />
        <Input verify={verify} showLetter={showLetter} />
        {/* <LetterBar words={words} palavraDigitada={palavraDigitada} /> */}
        <About showLetter={showLetter} />
      </div>
      <BaseBoard />
    </div>
  );
}
