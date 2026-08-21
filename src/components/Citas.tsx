import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface Cita {
  id: number;
  paciente: string;
  fecha: string;
  servicio: string;
}

export const Citas: React.FC = () => {
  const [paciente, setPaciente] = useState<string>('');
  const [fecha, setFecha] = useState<string>('');
  const [servicio, setServicio] = useState<string>('Valoración Inicial');
  const [citas, setCitas] = useState<Cita[]>([]);

  const handleAgregarCita = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!paciente || !fecha) return;

    const nuevaCita: Cita = {
      id: Date.now(),
      paciente,
      fecha,
      servicio,
    };

    setCitas([...citas, nuevaCita]);
    setPaciente('');
    setFecha('');
  };

  return (
    <div className="card">
      <h2>Agendar Cita Odontológica</h2>
      <form onSubmit={handleAgregarCita}>
        <div className="form-group">
          <label>Nombre del Paciente:</label>
          <input
            type="text"
            value={paciente}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPaciente(e.target.value)}
            placeholder="Ingrese el nombre"
            required
          />
        </div>

        <div className="form-group">
          <label>Fecha y Hora:</label>
          <input
            type="datetime-local"
            value={fecha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFecha(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Servicio / Tratamiento:</label>
          <select 
            value={servicio} 
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setServicio(e.target.value)}
          >
            <option value="Valoración Inicial">Valoración Inicial</option>
            <option value="Limpieza Dental">Limpieza Dental</option>
            <option value="Ortodoncia">Ortodoncia</option>
            <option value="Endodoncia">Endodoncia</option>
            <option value="Diseño de Sonrisa">Diseño de Sonrisa</option>
          </select>
        </div>

        <button type="submit" className="btn-primary">Confirmar Cita</button>
      </form>

      {/* Renderizado y Visualización de Datos */}
      <div className="preview-data">
        <h3>Citas Programadas ({citas.length})</h3>
        {citas.length === 0 ? (
          <p>No hay citas agendadas.</p>
        ) : (
          <ul className="data-list">
            {citas.map((cita) => (
              <li key={cita.id}>
                <strong>{cita.paciente}</strong> - {cita.servicio} | Fecha: {new Date(cita.fecha).toLocaleString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Citas;