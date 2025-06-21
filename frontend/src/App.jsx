import React, { useState, useEffect } from 'react';
import './App.css'; // Usaremos un css específico para el componente

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener los productos de la API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
        console.error("Error al obtener los productos:", e);
      }
    };

    fetchProducts();
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez

  if (error) {
    return <div className="error-message">Error al cargar los productos: {error}</div>;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Comparación de Productos</h1>
        <p>Compara características y especificaciones para encontrar el producto ideal para ti.</p>
      </header>
      <main className="comparison-container">
        <h2>Comparando {products.length} productos</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <span className="discount-badge">{product.discount}</span>
                <img src={product.imageUrl} alt={product.name} className="product-image" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  <span className="current-price">${product.price.toFixed(2)}</span>
                  <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                </div>
                <button className="buy-button">Comprar</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App; 