type SidebarProps = {
  setPaginaActual: (pagina: string) => void;
  paginaActual: string;
};

const Sidebar = ({ setPaginaActual, paginaActual }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", icon: "📊", label: "Dashboard" },
    { id: "usuarios", icon: "👥", label: "Usuarios" },
    { id: "servicios", icon: "💊", label: "Servicios" },
  ];

  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`sidebar-item ${paginaActual === item.id ? "active" : ""}`}
              onClick={() => setPaginaActual(item.id)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;