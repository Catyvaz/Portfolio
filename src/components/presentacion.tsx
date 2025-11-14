import "../styles/presentacion.css";
import { BotonesDatos } from "./botonesDatos";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Presentacion = () => {
  const handleClick = (enlace: string) => {
    if (enlace.startsWith("mailto:")) {
      const email = enlace.replace("mailto:", "");
      navigator.clipboard.writeText(email).then(() => {
        toast.success("Correo copiado al portapapeles y redirigiendo: " + email, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      });
      window.open(enlace, "");
    } else {
      window.open(enlace, "_blank");
    }
  };

  return (
    <section id="inicio" className="contenedor-presentacion">
      <div className="presentacion-nombre">
        <h1>Hola!👋 Soy Caty</h1>
      </div>
      <div className="presentacion-titulos contenedor-carrusel">
        <span>FullStack Developer</span>
        <span style={{ paddingLeft: "7%" }}>QA Tester</span>
      </div>
      <div className="presentacion-frase">
        <h3>
          Creo que la mejor forma de crecer es aprender, adaptarse y construir
          con otros; por eso combino mi mirada crítica de QA con mi entusiasmo
          por el desarrollo.
        </h3>
      </div>
      <div className="presentacion-contactos">
        <BotonesDatos
          icono={EmailTwoToneIcon}
          enlace="mailto:catybusvaz2@gmail.com"
          texto="catybusvaz2@gmail.com"
          onClick={() => handleClick("mailto:catybusvaz2@gmail.com")}
        />
        <BotonesDatos icono={ContactPageIcon} enlace="" texto="Curriculum" />
        <BotonesDatos icono={GitHubIcon} enlace="https://github.com/Catyvaz" texto="Catyvaz" />
        <BotonesDatos
          icono={LinkedInIcon}
          enlace="https://www.linkedin.com/in/catherine-bustos-vazquez-82479b232"
          texto="Catherine Bustos Vazquez"
        />
      </div>

      <div className="presentacion-foto">
        <img
          src="/imagenPortada.jpg"
          alt="Foto de perfil"
          className="imagenPerfil"
        />
      </div>
    </section>
  );
};
