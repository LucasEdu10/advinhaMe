import React, { Children } from "react";
import { IInfo } from "../../types/infos";
import { IWords } from "../../types/words";
import style from "./LetterBar.module.scss";
import Bar from "../bar/index";

interface Props {
  words: IWords[];
  palavraDigitada: (digitado: IWords) => void;
}

function LetterBar({ words, palavraDigitada }: Props) {
  return (
    <div className={style.rowWrapper}>
      <div className={style.rowCurrent}>
        <ul>
          {words.map((item) => (
            <Bar palavraDigitada={palavraDigitada} key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LetterBar;
