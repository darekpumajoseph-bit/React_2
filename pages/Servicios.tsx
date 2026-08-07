import { useState } from "react";

type Servicio = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion: string;
  popular: boolean;
};

const Servicios = () => {
  const [servicios] = useState<Servicio[]>([
    {
      id: 1,
      nombre: "Limpieza Dental",
      descripcion: "Limpieza profunda con ultrasonido y profilaxis",
      precio: 250,
      duracion: "45 min",
      popular: true,
    },
    {
      id: 2,
      nombre: "Blanqueamiento Dental",
      descripcion: "Blanqueamiento con luz LED y peróxido de hidrógeno",
      precio: 450,
      duracion: "60 min",
      popular: true,
    },
    {
      id: 3,
      nombre: "Ortodoncia (Brackets)",
      descripcion: "Tratamiento de ortodoncia con brackets metálicos",
      precio: 800,
      duracion: "90 min",
      popular: false,
    },
    {
      id: 4,
      nombre: "Extracción Simple",
      descripcion: "Extracción de piezas dentales con anestesia local",
      precio: 300,
      duracion: "30 min",
      popular: false,
    },
    {
      id: 5,
      nombre: "Endodoncia",
      descripcion: "Tratamiento de conducto radicular",
      precio: 1600,
      duracion: "90 min",
      popular: true,
    },
    {
      id: 6,
      nombre: "Implante Dental",
      descripcion: "Colocación de implante dental de titanio",
      precio: 1200,
      duracion: "120 min",
      popular: false,
    },
  ]);

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h2>💊 Servicios Odontológicos</h2>
          <p className="subtitle">
            Catálogo de servicios profesionales odontológicos
          </p>
        </div>
        <button className="btn btn-primary">+ Nuevo Servicio</button>
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
              <th>Popular</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((servicio) => (
              <tr key={servicio.id}>
                <td>{servicio.id}</td>
                <td>
                  <strong>{servicio.nombre}</strong>
                </td>
                <td>{servicio.descripcion}</td>
                <td>
                  <span className="price">${servicio.precio}</span>
                </td>
                <td>
                  <span className="duracion-badge">{servicio.duracion}</span>
                </td>
                <td>
                  <span
                    className={`popular-badge ${
                      servicio.popular ? "popular-si" : "popular-no"
                    }`}
                  >
                    {servicio.popular ? "⭐ Popular" : "—"}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit">✏️</button>
                    <button className="action-btn delete">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="page-footer">
        <span>Total de servicios: {servicios.length}</span>
        <span>
          Servicios populares:{" "}
          {servicios.filter((s) => s.popular).length}
        </span>
        <span>
          Precio promedio: $
          {Math.round(
            servicios.reduce((acc, s) => acc + s.precio, 0) / servicios.length
          )}
        </span>
      </div>
    </div>
  );
};

export default Servicios;