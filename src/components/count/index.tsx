import React, { Children } from "react";
import style from "./Count.module.scss";

function Count() {
  return (
    <div className={style.container}>
      <a>JOGO: </a>
      <a>TENTATIVAS: </a>
    </div>
  );
}

export default Count;
