import { Modal, Box, Typography, Chip, Button } from "@mui/material";
import type { ProyectoProps } from "../const/listaProyectos";

interface ModalVerProyectoProps {
  modalOpen: boolean;
  cerrarModal: () => void;
  proyectoSeleccionado: ProyectoProps | null;
}

export const ModalVerProyecto = (props: ModalVerProyectoProps) => {
  return (
    <Modal
      open={props.modalOpen}
      onClose={props.cerrarModal}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "85%",
          maxWidth: 800,
          bgcolor: "background.paper",
          borderRadius: 2,
          p: 2,
          pb: 1,
          maxHeight: "90vh",
          overflow: "auto",
        }}
      >
        {props.proyectoSeleccionado && (
          <>
            <h4>{props.proyectoSeleccionado.titulo}</h4>
            <p>{props.proyectoSeleccionado.descripcionCompleta}</p>

            <Box sx={{ mb: 3, justifyContent: "center", display: "flex" }}>
              {props.proyectoSeleccionado.video.includes("youtube.com") ? (
                <iframe
                  width="80%"
                  height="300"
                  src={props.proyectoSeleccionado.video}
                  title="Video del proyecto"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "8px" }}
                />
              ) : (
                <video
                  width="80%"
                  height="300"
                  controls
                  style={{ borderRadius: "8px" }}
                >
                  <source
                    src={props.proyectoSeleccionado.video}
                    type="video/mp4"
                  />
                  Tu navegador no soporta el elemento video.
                </video>
              )}
            </Box>

            <Typography variant="h6" gutterBottom>
              Tecnologías utilizadas:
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1} mb={3}>
              {props.proyectoSeleccionado.tecnologias.map((tech, index) => (
                <Chip key={index} label={tech} color="secondary" />
              ))}
            </Box>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px'}}>
              <Box display="flex" gap={2} mb={2}>
                {props.proyectoSeleccionado.githubUrl && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    href={props.proyectoSeleccionado.githubUrl}
                    target="_blank"
                  >
                    Ver código
                  </Button>
                )}
                {props.proyectoSeleccionado.demoUrl && (
                  <Button
                    variant="contained"
                    href={props.proyectoSeleccionado.demoUrl}
                    target="_blank"
                  >
                    Ver demo
                  </Button>
                )}
              </Box>

              <Button onClick={props.cerrarModal} variant="outlined" color="secondary">
                Cerrar
              </Button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};
