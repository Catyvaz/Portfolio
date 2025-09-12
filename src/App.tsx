import { Navbar } from "./components/navbar";
import { Presentacion } from "./components/presentacion";

function App() {
  return (
    <>
      <Navbar />
      <div className="contenedor-contenido">
        <Presentacion />
      </div>
    </>
  );
}

export default App;
