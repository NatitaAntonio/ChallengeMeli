const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Leer los datos de los productos desde el archivo JSON
const products = require('./products.json');

// Rutas de la API
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
}); 