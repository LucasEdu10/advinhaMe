import React, { Children, useState } from "react";
import NavBar from "./components/navbar";
import Input from "./components/input";
import But from "./components/button";
import About from "./components/about";
import BaseBoard from "./components/baseBoard";
import "./styles.css";
import InfoBar from "./components/infoBar";

import { IInfo } from "../src/types/infos";
import { IWords } from "../../types/words";

export default function App() {
  const [words, setWords] = useState<IWords[] | []>([]);
  const [count, setCount] = useState(0);
  const [showLetter, setShowLetter] = useState(false);

  const verify = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Entrei");
      verify();
      setWords((tarefasAnteriores) =>
        tarefasAnteriores.map((word) => ({ ...word }))
      );
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
        <Input onKeyPress={onKeyPress} showLetter={showLetter} words={words} />
        <About />
      </div>
      <BaseBoard />
    </div>
  );
}
