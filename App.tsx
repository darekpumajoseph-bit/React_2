import { useState } from 'react';
import Usuarios from './components/Usuarios';
import Productos from './components/Productos';
import Login from './components/Login';
import Registro from './components/Registro';
import Citas from './components/Citas';
import './App.css';

function App() {
  const [pagina, setPagina] = useState<string>('usuarios');

  const manejarAccionHijo = (modulo: string, accion: string) => {
    alert(`[ACCIÓN EN EL PADRE]\nMódulo origen: ${modulo}\nAcción efectuada: ${accion}`);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setPagina('usuarios')} className="btn btn-primary">Ver Usuarios</button>
        <button onClick={() => setPagina('productos')} className="btn btn-primary" style={{ marginLeft: '10px' }}>Ver Productos</button>
        <button onClick={() => setPagina('login')} className="btn btn-primary" style={{ marginLeft: '10px' }}>Ver Login</button>
        <button onClick={() => setPagina('registro')} className="btn btn-primary" style={{ marginLeft: '10px' }}>Ver Registro</button>
        <button onClick={() => setPagina('citas')} className="btn btn-primary" style={{ marginLeft: '10px' }}>Ver Citas</button>
      </nav>

      <hr />

      <main style={{ marginTop: '20px' }}>
        {pagina === 'usuarios' && <Usuarios onAccionModulo={manejarAccionHijo} />}
        {pagina === 'productos' && <Productos onAccionModulo={manejarAccionHijo} />}
        {pagina === 'login' && <Login onAccionModulo={manejarAccionHijo} />}
        {pagina === 'registro' && <Registro onAccionModulo={manejarAccionHijo} />}
        {pagina === 'citas' && <Citas onAccionModulo={manejarAccionHijo} />}
      </main>
    </div>
  );
}

export default App;