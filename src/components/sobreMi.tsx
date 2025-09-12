import "../styles/sobreMi.css";

export const SobreMi = () => {
  return (
    <section id="sobreMi" className="contenedor-sobre-mi">
      <h2 style={{margin: "0%"}}>Sobre mí</h2>
      <ul className="lista-sobre-mi">
        <li className="lista-sobreMi">
          ✨ Me encuentro en mi último año de la Tecnicatura en Desarrollo de
          Software. Me interesa especialmente el <b>desarrollo fullstack</b> y el área
          de <b>testing</b> (manual y automatizado), disfruto tanto de crear soluciones
          como de asegurar su calidad.
        </li>
        <li className="lista-sobreMi">
          💻 A lo largo de mi formación, adquirí experiencia en <b>Python</b>, 
          <b> TypeScript</b>, <b>JavaScript</b>, <b>React</b>, <b>HTML</b>, <b>CSS</b> y en el uso de bases de datos como
          <b> MySql</b> y <b>MongoDB</b>. También he trabajado con herramientas de testing como
          Selenium, Appium y Maven, además de manejar Git/GitHub, Jira y Trello
          para la gestión de proyectos.
        </li>
        <li className="lista-sobreMi">
          🚀 Actualmente desarrollo un proyecto de gestión de alojamientos
          llamado <b>"MiAlquiler"</b> como tesis, y he trabajado en proyectos de
          escritorio para el sector de salud, lo que me permitió aplicar mis
          conocimientos en contextos reales.
        </li>
        <li className="lista-sobreMi">
          🔎 Me defino como una persona curiosa, organizada y orientada a la
          mejora continua, con ganas de crecer en entornos colaborativos donde
          pueda aportar valor mientras sigo aprendiendo.
        </li>
      </ul>
    </section>
  );
};
