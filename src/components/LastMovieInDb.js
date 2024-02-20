import React, { useState, useEffect } from 'react';
const imagePath = '/assets/images/';



function LastMovieInDb() {
    const [lastProduct, setLastProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/products/last-product')
            .then(response => response.json())
            .then(data => setLastProduct(data))
            .catch(error => console.error('Error fetching last product:', error));
    }, []);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body">
                    {lastProduct ? (
                        <>
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={imagePath + lastProduct.img} alt={lastProduct.name} />
                            </div>
                            <p>{lastProduct.description}</p>
                            <a className="btn btn-danger" href={`/products/productDetail/${lastProduct.id}`}>Ver detalle</a>

                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LastMovieInDb;
