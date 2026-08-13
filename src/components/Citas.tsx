import React from 'react';
import CardAccion from './CardAccion';

export interface CitasProps {
  onAccionModulo: (modulo: string, accion: string) => void;
}

const Citas: React.FC<CitasProps> = ({ onAccionModulo }) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>📅 Agendamiento de Citas</h2>
          <p className="subtitle">Gestión e historial de consultas médicas</p>
        </div>
      </div>

      <CardAccion 
        titulo="Agendar Consulta"
        descripcion="Asigna un turno de atención para un paciente en OdontoSoft."
        textoBoton="Confirmar Turno"
        modulo="Citas"
        onEjecutarAccion={onAccionModulo}
      />
    </div>
  );
};

export default Citas;