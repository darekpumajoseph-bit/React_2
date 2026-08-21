import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface RegistroData {
  nombre: string;
  documento: string;
  telefono: string;
  rol: string;
}

export const Registro: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [documento, setDocumento] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [rol, setRol] = useState<string>('Paciente');
  const [registroExitoso, setRegistroExitoso] = useState<RegistroData | null>(null);

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const datos: RegistroData = { nombre, documento, telefono, rol };
    setRegistroExitoso(datos);

    setNombre('');
    setDocumento('');
    setTelefono('');
  };

  return (
    <div className="card">
      <h2>Registro de Usuarios / Pacientes</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Nombre Completo:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Documento de Identidad:</label>
          <input
            type="text"
            value={documento}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDocumento(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Teléfono de Contacto:</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTelefono(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Rol:</label>
          <select 
            value={rol} 
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setRol(e.target.value)}
          >
            <option value="Paciente">Paciente</option>
            <option value="Odontólogo">Odontólogo</option>
            <option value="Recepcionista">Recepcionista</option>
          </select>
        </div>

        <button type="submit" className="btn-primary">Registrar Usuario</button>
      </form>

      {/* Visualización de datos enviados */}
      {registroExitoso && (
        <div className="preview-data">
          <h3>Último Usuario Registrado:</h3>
          <p><strong>Nombre:</strong> {registroExitoso.nombre}</p>
          <p><strong>Documento:</strong> {registroExitoso.documento}</p>
          <p><strong>Teléfono:</strong> {registroExitoso.telefono}</p>
          <p><strong>Rol:</strong> {registroExitoso.rol}</p>
        </div>
      )}
    </div>
  );
};

export default Registro;