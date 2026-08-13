import React from 'react';
import CardAccion from './CardAccion';

export interface LoginProps {
  onAccionModulo: (modulo: string, accion: string) => void;
}

const Login: React.FC<LoginProps> = ({ onAccionModulo }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const usuario = formData.get('usuario') as string;
    const contrasena = formData.get('contrasena') as string;

    alert(`[LOGIN EXITOSO]\nUsuario: ${usuario}\nContraseña: ${contrasena}`);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>🔐 Acceso a OdontoSoft</h2>
      </div>

      <form onSubmit={handleSubmit} className="recent-section" style={{ maxWidth: '400px', marginBottom: '1.5rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Usuario / Email:</label>
          <input type="text" name="usuario" required style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Contraseña:</label>
          <input type="password" name="contrasena" required style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc' }} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Ingresar</button>
      </form>

      <CardAccion 
        titulo="Opciones de Acceso"
        descripcion="Solicita la restauración de tu credencial si la has olvidado."
        textoBoton="Restablecer Contraseña"
        modulo="Login"
        onEjecutarAccion={onAccionModulo}
      />
    </div>
  );
};

export default Login;