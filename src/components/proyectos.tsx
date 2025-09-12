import { useState } from 'react';
import { Box } from '@mui/material';
import { ModalVerProyecto } from './modalVerProyecto';
import { proyectos, type ProyectoProps } from '../const/listaProyectos';
import { CardProyecto } from './cardProyecto';

export const Proyectos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<ProyectoProps | null>(null);
  const lista = proyectos || [];

  const abrirModal = (proyecto: ProyectoProps) => {
    setProyectoSeleccionado(proyecto);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setProyectoSeleccionado(null);
  };

  return (
    <section id="proyectos" style={{ padding: '20px' }}>

        <h2>
            Mis Proyectos
        </h2>

      <Box display="flex" flexWrap="wrap" gap={3} justifyContent="center">
        {lista.map((proyecto) => (
          <CardProyecto proyecto={proyecto} abrirModal={abrirModal} setSeleccionado={proyectoSeleccionado}/>
        ))}
      </Box>

      <ModalVerProyecto modalOpen={modalOpen} cerrarModal={cerrarModal} proyectoSeleccionado={proyectoSeleccionado} />
      
    </section>
  );
};
