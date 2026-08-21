import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userSubmitted, setUserSubmitted] = useState<{ email: string } | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserSubmitted({ email });
  };

  return (
    <div className="card">
      <h2>Iniciar Sesión - Portal Odontológico</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
          <button 
            type="button" 
            className="btn-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Ocultar' : 'Mostrar'} Contraseña
          </button>
        </div>

        <button type="submit" className="btn-primary">Ingresar</button>
      </form>

      {/* Visualización de datos ingresados */}
      {userSubmitted && (
        <div className="preview-data">
          <h3>Sesión Iniciada</h3>
          <p><strong>Usuario Activo:</strong> {userSubmitted.email}</p>
        </div>
      )}
    </div>
  );
};