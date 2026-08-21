import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const Notificaciones = () => {
  const { posts, loading, error, lastUpdated } = useSelector(
    (state: RootState) => state.posts,
  );

  const horaActualizacion = lastUpdated
    ? new Date(lastUpdated).toLocaleTimeString('es-CO', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    : 'Sin actualización';

  return (
    <aside className="notification-panel" aria-label="Panel de notificaciones">
      <div className="notification-header">
        <div>
          <h3>🔔 Notificaciones</h3>
          <p>Información de la API REST</p>
        </div>
        <span className={`api-status ${error ? 'offline' : 'online'}`}>
          {error ? 'Sin conexión' : 'En línea'}
        </span>
      </div>

      <div className="notification-meta">
        <span>Actualización: {horaActualizacion}</span>
        <span>Auto: 15 s</span>
      </div>

      {loading && <p className="notification-message">Consultando la API...</p>}

      {error && (
        <div className="notification-error">
          <strong>Error de conexión</strong>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <p className="notification-message">No hay información disponible.</p>
      )}

      <div className="notification-list">
        {posts.map((post) => (
          <article className="notification-item" key={post.id}>
            <div className="notification-item-title">
              <span>📌</span>
              <strong>Publicación #{post.id}</strong>
            </div>
            <p>{post.title}</p>
            <small>Usuario API: {post.userId}</small>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default Notificaciones;
