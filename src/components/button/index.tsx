import React, { Children, useState } from "react";
import style from "./Button.module.scss";
import iconInfo from "../assets/img/info.png";
import incoInte from "../assets/img/icons8-ajuda-16.png";
import incoConfig from "../assets/img/icons8-engrenagem-16.png";
import incoInfo from "../assets/img/info-16.png";

function Button() {
  const [showInfo, setShowInfo] = useState(false);
  const [click, setClick] = useState(true);

  const info = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (click === true) {
      setShowInfo(true);
      setClick(false);
    }
    if (click === false) {
      setShowInfo(false);
      setClick(true);
    }
  };

  return (
    <div>
      <button onClick={info} className={style.btnInfo}>
        <img src={iconInfo} alt="Informações" />
      </button>
      <div className={style.wapperInfo}>
        <div className={`${showInfo ? style.show : style.notShow}`}>
          <div className={style.cardInfo}>
            <button className={style.content}>
              <img
                className={style.image}
                src={incoConfig}
                alt="configurações"
              />
              <span className={style.name}>Configurações</span>
            </button>
            <button className={style.content}>
              <img className={style.image} src={incoInte} alt="Interrogacao" />
              <span className={style.name}>Como jogar</span>
            </button>
            <button className={style.content}>
              <img className={style.image} src={incoInfo} alt="informações" />
              <span className={style.name}>Créditos</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
