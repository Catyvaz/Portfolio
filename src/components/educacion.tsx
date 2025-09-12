import "../styles/educacion.css";
import { 
  Typography, 
  Card, 
  CardContent, 
  Box, 
  Chip,
  Divider,
  Stack
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LanguageIcon from '@mui/icons-material/Language';
import { educacionData } from "../const/listaEducación";

export const Educacion = () => {
  const getIcon = (tipo: string) => {
    switch (tipo) {
      case 'carrera': return <SchoolIcon sx={{ color: "blueviolet" }} />;
      case 'curso': return <WorkIcon sx={{ color: "blueviolet" }} />;
      case 'idioma': return <LanguageIcon sx={{ color: "blueviolet" }} />;
      default: return <SchoolIcon sx={{ color: "blueviolet" }} />;
    }
  };

  const getColorChip = (estado?: string) => {
    return estado === "En curso" ? "primary" : "success";
  };

  return (
    <section id="educacion" style={{ width: '80%', margin: '0 auto', padding: '40px 0' }}>
      <h2>
        Mi Educación
      </h2>
      <Stack spacing={2}>
        {educacionData.map((item, index) => (
          <Card key={index} elevation={3} sx={{ 
            '&:hover': { 
              transform: 'translateY(-2px)', 
              transition: 'transform 0.3s',
              boxShadow: 6
            } 
          }}>
            <CardContent>
              <Box display="flex" alignItems="flex-start" gap={2}>
                <Box sx={{ pt: 0.5 }}>
                  {getIcon(item.tipo)}
                </Box>
                
                <Box flex={1}>
                  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color:"blueviolet" }}>
                      {item.titulo}
                    </Typography>
                    {item.estado && (
                      <Chip 
                        label={item.estado} 
                        size="medium" 
                        color={getColorChip(item.estado)}
                        variant="filled"
                      />
                    )}
                  </Box>

                  
                  <Typography variant="subtitle1" sx={{ fontWeight: 'medium', color: 'black', mb: 1 }}>
                    📅 {item.periodo}  /  📍 {item.institucion}
                  </Typography>
                  
                  {item.descripcion && (
                    <>
                      <Divider sx={{ my: 1 }} />
                      <Typography variant="body2" sx={{ color: '#555', fontStyle: 'italic' }}>
                        {item.descripcion}
                      </Typography>
                    </>
                  )}
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </section>
  );
};
