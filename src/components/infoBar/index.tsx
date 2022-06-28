import React, { Children } from "react";
import { IInfo } from "../../types/infos";
import Button from "../button";
import Count from "../count";
import style from "./Infobar.module.scss";

interface Props {
  count: IInfo;
  verify: () => number;
}

function InfoBar({ verify, count }: Props) {
  return (
    <div className={style.info}>
      <div className={style.infoNames}>
        <span className={style.game}>
          JOGO: <a>#1</a>
        </span>
        <span>
          TENTATIVAS: <a>{count}</a>
        </span>
      </div>
    </div>
  );
}

export default InfoBar;
