import React, { Children } from "react";
import style from "./About.module.scss";
import incoInte from "../assets/img/interrogacao.png";

function About() {
  return (
    <div className={style.about}>
      <div className={style.content}>
        <div className={style.btn}>
          <img src={incoInte} alt="Interrogacao" />
          <div className={style.teste}>
            <h2>Como jogar</h2>
          </div>
        </div>
        <div className={style.sub}>
          <p>
            {" "}
            Descubra a palavra secreta. Você pode tentar quantas vezes precisar.{" "}
          </p>
        </div>
        <div className={style.sub}>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            non curabitur gravida arcu. Lectus arcu bibendum at varius vel.
            Lectus magna fringilla urna porttitor rhoncus dolor purus. Pulvinar
            mattis nunc sed blandit. Est placerat in egestas erat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
