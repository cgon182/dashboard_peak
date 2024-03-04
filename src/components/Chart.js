import React, { useState, useEffect } from 'react';
import ChartRow from './ChartRow';

function Chart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products') // Endpoint para obtener todos los productos
      .then(response => response.json())
      .then(data => {
        setProducts(data.products); // Actualiza el estado con los datos de los productos
      })
      .catch(error => console.error('Error al obtener los productos:', error));
  }, []); 

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Cod</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Nombre</th>
                {/* <th>Precio</th> */}
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <ChartRow
                  key={product.id}
                  id={product.id}
                  category={product.category.description}
                  description={product.description}
                  name={product.name}
                  price={product.prices}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;

