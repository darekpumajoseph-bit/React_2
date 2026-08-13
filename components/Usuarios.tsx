import React from 'react';
import CardAccion from './CardAccion';

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
  estado: "Activo" | "Inactivo";
}

export interface UsuariosProps {
  onAccionModulo: (modulo: string, accion: string) => void;
}

const Usuarios: React.FC<UsuariosProps> = ({ onAccionModulo }) => {
  const usuarios: Usuario[] = [
    { id: 1, nombre: "Dra. María Pérez", email: "maria@odontosoft.com", rol: "Odontóloga", estado: "Activo" },
    { id: 2, nombre: "Dr. Carlos Gómez", email: "carlos@odontosoft.com", rol: "Odontólogo", estado: "Activo" },
    { id: 3, nombre: "Laura Martínez", email: "laura@odontosoft.com", rol: "Asistente", estado: "Activo" },
    { id: 4, nombre: "Pedro Ramírez", email: "pedro@odontosoft.com", rol: "Recepcionista", estado: "Inactivo" },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>👥 Usuarios del Sistema</h2>
          <p className="subtitle">Gestión de usuarios y personal odontológico</p>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td><strong>{usuario.nombre}</strong></td>
                <td>{usuario.email}</td>
                <td><span className="rol-badge">{usuario.rol}</span></td>
                <td>
                  <span className={`status-badge ${usuario.estado === "Activo" ? "status-activo" : "status-inactivo"}`}>
                    {usuario.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CardAccion 
        titulo="Crear Nuevo Usuario"
        descripcion="Permite agregar un nuevo profesional al sistema OdontoSoft."
        textoBoton="Registrar Usuario"
        modulo="Usuarios"
        onEjecutarAccion={onAccionModulo}
      />
    </div>
  );
};

export default Usuarios;