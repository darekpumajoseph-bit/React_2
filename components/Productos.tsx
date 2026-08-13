import React from 'react';
import CardAccion from './CardAccion';

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion: string;
  popular: boolean;
}

export interface ProductosProps {
  onAccionModulo: (modulo: string, accion: string) => void;
}

const Productos: React.FC<ProductosProps> = ({ onAccionModulo }) => {
  const servicios: Servicio[] = [
    { id: 1, nombre: "Limpieza Dental", descripcion: "Limpieza profunda con ultrasonido", precio: 250, duracion: "45 min", popular: true },
    { id: 2, nombre: "Blanqueamiento Dental", descripcion: "Blanqueamiento con luz LED", precio: 450, duracion: "60 min", popular: true },
    { id: 3, nombre: "Ortodoncia (Brackets)", descripcion: "Tratamiento de brackets metálicos", precio: 800, duracion: "90 min", popular: false },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>💊 Catálogo de Productos y Servicios</h2>
          <p className="subtitle">Gestión de tratamientos odontológicos e insumos</p>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((servicio) => (
              <tr key={servicio.id}>
                <td>{servicio.id}</td>
                <td><strong>{servicio.nombre}</strong></td>
                <td>{servicio.descripcion}</td>
                <td><span className="price">${servicio.precio}</span></td>
                <td><span className="duracion-badge">{servicio.duracion}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CardAccion 
        titulo="Actualizar Insumos"
        descripcion="Ajustar disponibilidad y catálogo de tratamientos OdontoSoft."
        textoBoton="Actualizar Inventario"
        modulo="Productos"
        onEjecutarAccion={onAccionModulo}
      />
    </div>
  );
};

export default Productos;