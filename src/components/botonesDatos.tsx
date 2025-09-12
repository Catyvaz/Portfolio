
import Button from '@mui/material/Button';
import "../styles/botonesDatos.css";

interface BotonesDatosProps {
  icono: React.ComponentType<{ className?: string }>;
  enlace: string;
  texto: string;
  onClick?: () => void;
}
export const BotonesDatos = (prop: BotonesDatosProps) => {
  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        className="botones"
        onClick={prop.onClick ? prop.onClick : undefined}
      >
        <prop.icono className="icono"/>
        {prop.texto}
      </Button>
    </>
  );
};
