import React from "react";

function Header() {
  return (
    <header>
      <div className="header-center">
        <img src="https://i.imgur.com/zxHjzgd.png" alt="Logo" />
      </div>
      <div className="header-right">
        <h2>Hola, Usuario</h2>
        <img className="user" src="img/user.png" alt="Usuario" />
      </div>
    </header>
  );
}

export default Header;
