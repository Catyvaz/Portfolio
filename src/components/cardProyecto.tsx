import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import type { ProyectoProps } from "../const/listaProyectos";

interface CardProyectoProps {
  proyecto: ProyectoProps;
  abrirModal: (proyecto: ProyectoProps) => void;
  setSeleccionado: ProyectoProps | null;
}

export const CardProyecto = (props: CardProyectoProps) => {

  const getColorChip = (estado?: string) => {
    return estado === "En curso" ? "primary" : "success";
  };
  return (
    <Card
      key={props.proyecto.id}
      sx={{
        maxWidth: 345,
        cursor: "pointer",
        "&:hover": { transform: "scale(1.05)", transition: "transform 0.3s" },
      }}
      onClick={() => props.abrirModal(props.proyecto)}
    >
      <CardMedia
        component="img"
        height="200"
        image={props.proyecto.imagen}
        alt={props.proyecto.titulo}
      />
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.proyecto.titulo}
          </Typography>
          {props.proyecto.estado && (
                      <Chip 
                        label={props.proyecto.estado} 
                        size="medium" 
                        color={getColorChip(props.proyecto.estado)}
                        variant="filled"
                      />
                    )}
        </div>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {props.proyecto.descripcionCorta}
        </Typography>

        {/* Chips de tecnologías */}
        <Box display="flex" flexWrap="wrap" gap={1}>
          {props.proyecto.tecnologias.map((tech, index) => (
            <Chip key={index} label={tech} size="small" variant="outlined" />
          ))}
        </Box>

        <Box display="flex" alignItems="center" mt={2}>
          <PlayArrowIcon color="primary" />
          <Typography variant="caption" ml={1}>
            Click para ver detalles y video
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
