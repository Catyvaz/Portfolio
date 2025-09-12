export interface ProyectoProps {
  id: number;
  titulo: string;
  estado?: string;
  descripcionCorta: string;
  descripcionCompleta: string;
  imagen: string;
  video: string;
  tecnologias: string[];
  githubUrl?: string;
  demoUrl?: string;
}

// Datos de ejemplo - puedes reemplazar con tus proyectos reales
export const proyectos: ProyectoProps[] = [
  {
    id: 1,
    titulo: "Lista de Tareas",
    estado: "Completado",
    descripcionCorta: "Lista de Tareas Avanzada",
    descripcionCompleta: "Se trata de una lista de tareas que permite a los usuarios agregar, editar, eliminar y marcar tareas como completadas. Además, incluye funcionalidades como filtros por estado (todas, activas, completadas) y persistencia de datos utilizando el almacenamiento local del navegador.",
    imagen: "/proyectos/listaTareas.png", 
    video: "https://www.youtube.com/embed/4yh0msOz_PA",
    tecnologias: ["React", "TypeScript", "Material-UI", "Vite", "Toastify"],
    githubUrl: "https://github.com/Catyvaz/Lista-de-Tareas-Avanzada",
  },
  {
    id: 2,
    titulo: "Proyecto 2",
    descripcionCorta: "Descripción breve del segundo proyecto",
    descripcionCompleta: "Descripción detallada del segundo proyecto con todas sus características y funcionalidades.",
    imagen: "/imagenes/proyecto2.jpg",
    video: "/videos/proyecto2-demo.mp4",
    tecnologias: ["Node.js", "MongoDB", "Express"],
  }
];
