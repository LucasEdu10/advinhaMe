import React, { Children, useState } from "react";
import { IInfo } from "../../types/infos";
import { IWords } from "../../types/words";
import style from "./Input.module.scss";
import LetterBar from "../letterBar/index";

interface Props {
  onKeyPress: () => boolean;
  showLetter: IInfo;
  words: IWords[];
}

function Input({ words, onKeyPress, showLetter }: Props) {
  const [wordBar, setWordBar] = useState("");

  return (
    <div>
      <input
        onKeyPress={onKeyPress}
        // value={word}
        // label="word"
        onChange={(e) => setWordBar(e.target.value)}
        className={style.word}
        type="text"
        placeholder="Digite uma palavra..."
      ></input>
      <div className={`${showLetter ? style.show : style.notShow}`}>
        <ul>
          {words.map((item) => (
            <LetterBar key={item.id} {...item} />
          ))}
        </ul>
        {/* <LetterBar wordBar={wordBar} /> */}
      </div>
    </div>
  );
}

export default Input;
