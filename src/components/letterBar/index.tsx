import React, { Children } from "react";
import { IInfo } from "../../types/infos";
import { IWords } from "../../types/words";
import style from "./LetterBar.module.scss";

interface Props extends IWords {
  wordBar: IInfo;
}

function LetterBar({ wordBar, word, wordNumber, id }: Props) {
  return (
    <div className={style.rowWrapper}>
      <div className={style.rowCurrent}>
        <span>{wordBar}</span>
        <span>10000</span>
      </div>
    </div>
  );
}

export default LetterBar;
