const Dashboard = () => {
  const stats = [
    { icon: "🦷", label: "Pacientes Activos", value: "156", color: "#2e86c1" },
    { icon: "📅", label: "Citas Hoy", value: "12", color: "#2ecc71" },
    { icon: "💰", label: "Ingresos Mensuales", value: "$8,450,000", color: "#f39c12" },
    { icon: "👨‍⚕️", label: "Doctores", value: "5", color: "#1a5276" },
  ];

  const citasRecientes = [
    { paciente: "María González", servicio: "Limpieza Dental", hora: "09:00", estado: "Completada" },
    { paciente: "Carlos Ruiz", servicio: "Ortodoncia", hora: "10:30", estado: "En Progreso" },
    { paciente: "Ana Martínez", servicio: "Extracción", hora: "12:00", estado: "Pendiente" },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>📊 Panel de Control</h2>
        <p className="subtitle">Bienvenido al sistema de gestión OdontoSoft</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="recent-section">
        <h3>📋 Citas Recientes</h3>
        <table className="recent-table">
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Servicio</th>
              <th>Hora</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {citasRecientes.map((cita, index) => (
              <tr key={index}>
                <td>{cita.paciente}</td>
                <td>{cita.servicio}</td>
                <td>{cita.hora}</td>
                <td>
                  <span
                    className={`status-badge status-${cita.estado
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {cita.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;