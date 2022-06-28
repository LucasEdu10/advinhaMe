import React, { Children } from "react";
import style from "./Navbar.module.scss";

function NavBar() {
  return (
    <nav className={style.navbar}>
      <span>ADIVINHA.ME</span>
    </nav>
  );
}

export default NavBar;
