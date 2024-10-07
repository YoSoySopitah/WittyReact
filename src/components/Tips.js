import React from "react";

function Tips() {
  return (
    <div className="consejos">
      <h2 id="consejostitle">Consejos</h2>
      <div className="consejoswrapper">
        <Tip 
          image="img/uno.png"
          title="Cómo ser menos procrastinador"
          text="Los dispositivos electrónicos son parte de nuestro día a día, pero para estudiar..."
        />
        <Tip 
          image="img/dos.png"
          title="Desventajas del celular"
          text="El uso constante del celular puede afectar nuestra productividad y bienestar..."
        />
        <Tip 
          image="img/tres.png"
          title="Hábitos para el estudio"
          text="Establecer hábitos de estudio efectivos es clave para lograr el éxito académico..."
        />
      </div>
    </div>
  );
}

function Tip({ image, title, text }) {
  return (
    <div className="consejoscontainer">
      <img src={image} alt="" />
      <div className="consejoinfo">
        <h1>{title}</h1>
        <h2>{text}</h2>
        <hr />
      </div>
      <div className="consejobtn">
        <i id="icons" className="fa fa-comment-o"></i>
        <i id="icons" className="fa fa-heart-o"></i>
      </div>
    </div>
  );
}

export default Tips;
