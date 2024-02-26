import React, { useState, useEffect } from "react";

function GenresInDb() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/categories/product-count-by-category');
        // const response = await fetch('http://localhost:3000/api/products');
        if (!response.ok) {
          throw new Error('El servidor no respondió');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error al traer las categorías:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Cantidad de productos
          </h5> divididos por categorías
        </div>
        <div className="card-body">
          <div className="row">
            {Object.keys(categories).map((category, index) => (
              <div key={index} className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{category}: {categories[category]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;

