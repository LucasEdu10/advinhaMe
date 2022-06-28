import React, { Children } from "react";
import style from "./Button.module.scss";
import iconInfo from "../assets/img/info.png";

function Button() {
  return (
    <button className={style.btnInfo}>
      <img src={iconInfo} alt="Informações" />
    </button>
  );
}

export default Button;
