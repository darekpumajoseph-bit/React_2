import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

export const Usuarios: React.FC = () => {
  const [filtro, setFiltro] = useState<string>('');
  const [contadorActivos, setContadorActivos] = useState<number>(3);

  const usuariosIniciales = [
    { id: 1, nombre: 'Carlos Mendoza', rol: 'Odontólogo General' },
    { id: 2, nombre: 'Ana Gómez', rol: 'Higienista Dental' },
    { id: 3, nombre: 'Laura Ruiz', rol: 'Recepcionista' },
  ];

  return (
    <div className="card">
      <h2>Directorio de Personal ({contadorActivos} activos)</h2>
      
      <div className="form-group">
        <label>Buscar Personal por Nombre:</label>
        <input
          type="text"
          value={filtro}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFiltro(e.target.value)}
          placeholder="Escriba para filtrar..."
        />
      </div>

      <div className="preview-data">
        <h3>Lista de Usuarios</h3>
        <ul>
          {usuariosIniciales
            .filter((u) => u.nombre.toLowerCase().includes(filtro.toLowerCase()))
            .map((u) => (
              <li key={u.id}>
                <strong>{u.nombre}</strong> - {u.rol}
              </li>
            ))}
        </ul>
      </div>

      <button 
        className="btn-secondary"
        onClick={() => setContadorActivos(contadorActivos + 1)}
      >
        Simular Nuevo Personal Activo (+1)
      </button>
    </div>
  );
};

export default Usuarios;