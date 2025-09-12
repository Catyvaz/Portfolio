import "../styles/presentacion.css";

export const Presentacion = () => {
  return (
    <div className="contenedor-presentacion">
      <div className="presentacion-nombre">
        <h1>Hola!👋 Soy Caty</h1>
      </div>
      <div className="presentacion-titulos"></div>
      <div className="presentacion-frase">
        <h3>
          Creo que la mejor forma de crecer es aprender, adaptarse y construir
          con otros; por eso combino mi mirada crítica de QA con mi entusiasmo
          por el desarrollo.
        </h3>
      </div>
      <div className="presentacion-contactos"></div>

      <div className="presentacion-foto">
        <img
          src="public/imagenPortada.jpg"
          alt="Foto de perfil"
          style={{ width: "50svh" }}
          className="imagenPerfil"
        />
      </div>
    </div>
  );
};
