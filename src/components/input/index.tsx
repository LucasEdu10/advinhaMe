import React, { Children, useState } from "react";
import { IInfo } from "../../types/infos";
import { IWords } from "../../types/words";
import style from "./Input.module.scss";
import { v4 as uuidv4 } from "uuid";
import LetterBar from "../letterBar/index";
import Button from "../button";

interface Props {
  onKeyPress: () => boolean;
  verify: () => number;
  showLetter: IInfo;
  setWords: React.Dispatch<React.SetStateAction<IWords[]>>;
}

function Input({ onKeyPress, showLetter, verify }: Props) {
  const [word, setWord] = useState<
    { name: string; id: number; position: number }[]
  >([]);
  const [closee, setClosee] = useState("");
  const [message, setMessage] = useState("");
  const [wordInput, setWordInput] = useState("");
  const [verificador, setVerificador] = useState(false);

  function close() {
    var elemento = (document.getElementById("word").value = "");
  }

  function verificaVazio() {
    var elemento = document.getElementById("word").value;
    if (elemento === "") {
      return true;
    } else {
      return false;
    }
  }

  const handleWord = (event) => {
    var input = event.target.value;
    if (input.length <= 0) {
      setVerificador(true);
      setMessage("Digite uma palavra!");
    } else {
      setWordInput(event.target.value);
    }
  };

  const onKeyPressT = (event) => {
    // var found = { name: "" };
    var found;
    var i = 0;
    if (event.key === "Enter") {
      for (var index in word) {
        i++;
        found = word.find((element) => element.name === wordInput);
        console.log(found?.name, "achei");
      }
      // if (found?.name === undefined && found?.name.length <= 0) {
      //   setVerificador(true);
      //   setMessage("Digite uma palavra!");
      // } else {
      // }
      if (found?.name === wordInput) {
        setVerificador(true);
        setMessage("Palavra " + found?.name + " já foi.");
      } else {
        setVerificador(false);
        verify();
        setWord((teste) => [
          ...teste,
          { name: wordInput, id: uuidv4(), position: i }
        ]);
      }

      close();
    }
  };

  function addedRowWord(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
  }

  return (
    <form onSubmit={addedRowWord}>
      <input
        onKeyPress={onKeyPressT}
        // onChange={(e) => setWord(e.target.value)}
        onChange={handleWord}
        className={style.word}
        type="text"
        id="word"
        name="wordNew"
        placeholder="Digite uma palavra..."
      ></input>
      <div className={style.massage}>
        <span className={`${verificador ? style.show : style.notShow}`}>
          {message}
        </span>
      </div>
      {/* <div> */}
      <div className={`${showLetter ? style.show : style.notShow}`}>
        {/* <ul>
          {wordsTeste.map((item) => (
            <LetterBar words={word} key={item.id} {...item} />
          ))}
        </ul> */}
        {word.map((item, index) => {
          return (
            <div className={style.rowWrapper} key={item.id}>
              <div className={style.rowCurrent}>
                <span>{item.name}</span>
                <span>{item.position}</span>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default Input;
