import React from "react";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="section">
          <img src="img/Logo.png" alt="" />
          <h2 id="alcance">Al alcance de tu mano</h2>
          <a href="/register">
            <h2>Regístrate</h2>
          </a>
        </div>
        <div className="section">
          <h2>Información</h2>
          <a href="/informacion">
            <h3>Misión</h3>
          </a>
          <a href="/informacion">
            <h3>Visión</h3>
          </a>
          <a href="/informacion">
            <h3>Justificación</h3>
          </a>
        </div>
        <div className="section">
          <h2>Menú</h2>
        </div>
        <div className="section">
          <h2>Redes Sociales</h2>
          <div className="facebook">
            <a href="https://www.facebook.com/share/kdBcQETc9FZBoLnc/?mibextid=LQQJ4d">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.facebook.com/share/kdBcQETc9FZBoLnc/?mibextid=LQQJ4d">
              <h3>Facebook</h3>
            </a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/wittyasesorias?igsh=d3RzYWdpZW03ZTho">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.instagram.com/wittyasesorias?igsh=d3RzYWdpZW03ZTho">
              <h3>Instagram</h3>
            </a>
          </div>
        </div>
      </div>
      <div className="foot">
        <h2>2024 @ Copyright | Witty</h2>
      </div>
    </div>
  );
}

export default Footer;
