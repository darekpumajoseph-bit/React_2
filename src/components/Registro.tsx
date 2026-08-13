import React from 'react';
import CardAccion from './CardAccion';

export interface RegistroProps {
  onAccionModulo: (modulo: string, accion: string) => void;
}

const Registro: React.FC<RegistroProps> = ({ onAccionModulo }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData.get('nombre') as string;
    const correo = formData.get('correo') as string;
    const contrasena = formData.get('contrasena') as string;

    alert(`[REGISTRO EXITOSO]\nNombre: ${nombre}\nCorreo: ${correo}\nContraseña: ${contrasena}`);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>📝 Registro de Personal</h2>
      </div>

      <form onSubmit={handleSubmit} className="recent-section" style={{ maxWidth: '400px', marginBottom: '1.5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Nombre Completo:</label>
          <input type="text" name="nombre" required style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Correo Electrónico:</label>
          <input type="email" name="correo" required style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Contraseña:</label>
          <input type="password" name="contrasena" required style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc' }} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Crear Cuenta</button>
      </form>

      <CardAccion 
        titulo="Políticas del Sistema"
        descripcion="Aceptación de normativas internas del sistema OdontoSoft."
        textoBoton="Aceptar Políticas"
        modulo="Registro"
        onEjecutarAccion={onAccionModulo}
      />
    </div>
  );
};

export default Registro;