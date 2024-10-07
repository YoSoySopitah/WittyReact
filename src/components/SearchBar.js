import React from "react";

function SearchBar() {
  return (
    <div className="buscador">
      <form id="buscar-carreras-form" action="/buscar-carreras" method="POST">
        <input
          type="text"
          placeholder="¿Qué necesitas hacer hoy?"
          name="term"
          id="term"
          className="input-with-image"
        />
        <button type="submit" style={{ display: "none" }}>
          Buscar
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
