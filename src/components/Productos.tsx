import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

export const Productos: React.FC = () => {
  const [nombre, setNombre] = useState<string>('');
  const [cantidad, setCantidad] = useState<number>(1);
  const [precio, setPrecio] = useState<number>(0);
  const [productos, setProductos] = useState<Producto[]>([]);

  const handleAgregarProducto = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nombre) return;

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre,
      cantidad,
      precio,
    };

    setProductos([...productos, nuevoProducto]);
    setNombre('');
    setCantidad(1);
    setPrecio(0);
  };

  return (
    <div className="card">
      <h2>Gestión de Insumos Dentales</h2>
      <form onSubmit={handleAgregarProducto}>
        <div className="form-group">
          <label>Nombre del Insumo/Producto:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
            placeholder="Ej: Resina Fotocurable"
            required
          />
        </div>

        <div className="form-group">
          <label>Cantidad (Unidades):</label>
          <input
            type="number"
            value={cantidad}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCantidad(Number(e.target.value))}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>Precio Unitario ($):</label>
          <input
            type="number"
            value={precio}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPrecio(Number(e.target.value))}
            min="0"
            required
          />
        </div>

        <button type="submit" className="btn-primary">Guardar Insumo</button>
      </form>

      {/* Visualización en tiempo real */}
      <div className="preview-data">
        <h3>Inventario Actual</h3>
        {productos.length === 0 ? (
          <p>No hay insumos registrados.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio U.</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.nombre}</td>
                  <td>{prod.cantidad}</td>
                  <td>${prod.precio}</td>
                  <td>${prod.cantidad * prod.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Productos;