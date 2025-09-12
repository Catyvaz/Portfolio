import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <header>
      <div className="px-3 py-2 border-bottom">
        <div className="container-fluid">
          <div className="contenedor-elementos d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="nombre-completo">
              <a
                href="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
                Catherine Bustos Vazquez
              </a>
            </div>

            <div>
              <ul className="barra-opciones nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="#inicio" className="nav-element text-secondary">
                    {" "}
                    Inicio{" "}
                  </a>
                </li>
                <li>
                  <a href="#sobreMi" className="nav-element text-secondary">
                    {" "}
                    Sobre mí{" "}
                  </a>
                </li>
                <li>
                  <a href="#tecnologias" className="nav-element text-secondary">
                    {" "}
                    Tecnologías{" "}
                  </a>
                </li>
                <li>
                  <a href="#proyectos" className="nav-element text-secondary">
                    {" "}
                    Proyectos{" "}
                  </a>
                </li>
                <li>
                  <a href="#educacion" className="nav-element text-secondary">
                    {" "}
                    Educación{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
