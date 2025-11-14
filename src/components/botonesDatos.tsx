
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import "../styles/botonesDatos.css";

interface BotonesDatosProps {
  icono: React.ComponentType<{ className?: string }>;
  enlace: string;
  texto: string;
  onClick?: () => void;
}

export const BotonesDatos = (prop: BotonesDatosProps) => {
  const isClickableOnly = Boolean(prop.onClick);
  const isAnchor = !isClickableOnly && Boolean(prop.enlace);
  const isMailTo = prop.enlace?.startsWith("mailto:");

  const tooltip = isClickableOnly
    ? "Copiar correo"
    : isMailTo
    ? "Abrir cliente de correo"
    : isAnchor
    ? "Abrir enlace en una nueva pestaña"
    : undefined;

  return (
    <Tooltip title={tooltip ?? ""} disableHoverListener={!tooltip} arrow>
      <Button
        variant="contained"
        color="secondary"
        className="botones"
        component={isAnchor ? ("a" as any) : ("button" as any)}
        href={isAnchor ? prop.enlace : undefined}
        target={isAnchor ? "_blank" : undefined}
        rel={isAnchor ? "noopener noreferrer" : undefined}
        onClick={prop.onClick}
        aria-label={prop.texto}
        startIcon={<prop.icono className="icono" />}
      >
        {prop.texto}
      </Button>
    </Tooltip>
  );
};
