import React from 'react';

export interface CardAccionProps {
  titulo: string;
  descripcion: string;
  textoBoton: string;
  modulo: string;
  onEjecutarAccion: (modulo: string, accion: string) => void;
}

const CardAccion: React.FC<CardAccionProps> = ({
  titulo,
  descripcion,
  textoBoton,
  modulo,
  onEjecutarAccion
}) => {
  return (
    <div className="stat-card" style={{ flexDirection: 'column', alignItems: 'flex-start', marginTop: '1.5rem' }}>
      <div className="stat-info">
        <h3>{titulo}</h3>
        <p style={{ margin: '0.5rem 0' }}>{descripcion}</p>
      </div>
      <button 
        className="btn btn-primary"
        onClick={() => onEjecutarAccion(modulo, textoBoton)}
      >
        {textoBoton}
      </button>
    </div>
  );
};

export default CardAccion;