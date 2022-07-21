import React, { Children } from "react";
import { IInfo } from "../../types/infos";
import { IWords } from "../../types/words";
// import style from "./LetterBar.module.scss";

interface Props extends IWords {
  palavraDigitada: (digitado: IWords) => void;
}

function Bar({ word, wordNumber, id, palavraDigitada, digitado }: Props) {
  return (
    <div>
      <span>{word}</span>
      <span>{wordNumber}</span>
    </div>
  );
}

export default Bar;
