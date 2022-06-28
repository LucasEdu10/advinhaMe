import React from "react";
import style from "./BaseBoard.module.scss";

function BaseBoard() {
  return (
    <footer className={style.base}>
      <p>
        © Desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/lucaseducarvalho/">
          Lucas Carvalho
        </a>{" "}
        | 2022
      </p>
    </footer>
  );
}

export default BaseBoard;
