import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Puedes reemplazar estas URLs por las de tus imágenes
const imagenes = [
  "/imagenesCarrusel/css-3.png",
  "/imagenesCarrusel/html-5.png",
  "/imagenesCarrusel/git.png",
  "/imagenesCarrusel/icons8-github-192.png",
  "/imagenesCarrusel/icons8-javascript-144.png",
  "/imagenesCarrusel/icons8-mongodb-96.png",
  "/imagenesCarrusel/icons8-nodejs-144.png",
  "/imagenesCarrusel/icons8-reaccionar-160.png",
  "/imagenesCarrusel/icons8-transportado-144.png",
  "/imagenesCarrusel/mysql.png",
  "/imagenesCarrusel/pythoned.png",
  "/imagenesCarrusel/typescript.png",
];

export const Tecnologias = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 650,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="tecnologias"
      className="contenedor-tecnologias"
      style={{ width: "70%", margin: "0 auto" }}
    >
      <h2 style={{ padding: "3% 0%" }}>Tecnologías</h2>
      <Slider {...settings}>
        {imagenes.map((img, idx) => (
          <div key={idx} style={{ padding: 10 }}>
            <img
              src={img}
              alt={`Imagen ${idx + 1}`}
              style={{ width: "55%", objectFit: "contain" }}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};
