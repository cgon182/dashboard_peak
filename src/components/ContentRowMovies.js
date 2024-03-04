import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowMovies() {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalUsers, setTotalUsers] = useState('No hay registros');
    const [totalCategories, setTotalCategories] = useState('No hay registros');

    useEffect(() => {
        // Fetch para el total de productos
        fetch('http://localhost:3000/api/product-count')
            .then(response => response.json())
            .then(data => {
                if (data.hasOwnProperty('count')) {
                    setTotalProducts(data.count);
                } else {
                    console.error('La respuesta no contiene el recuento de productos');
                }
            })
            .catch(error => {
                console.error('Error al obtener el recuento de productos:', error);
            });

        // Fetch para el total de usuarios
        fetch('http://localhost:3000/api/users/count/users') 
            .then(response => response.json())
            .then(data => {
                setTotalUsers(data.count);
            })
            .catch(error => {
                console.error('Error al obtener el total de usuarios:', error);
            });

        // Fetch para la cantidad de categorías
        fetch('http://localhost:3000/api/count-categories')
            .then(response => response.json())
            .then(data => {
                if (data.hasOwnProperty('count')) {
                    setTotalCategories(data.count);
                } else {
                    console.error('La respuesta no contiene el recuento de categorías');
                }
            })
            .catch(error => {
                console.error('Error al obtener la cantidad de categorías:', error);
            });
    }, []);

    const cartProps = [
        {
            title: 'Total de productos',
            color: 'primary',
            quantity: totalProducts,
            icon: 'fa-solid fa-dolly', 
            iconColor: '#efc84c',
            quantityColor: 'white',
        },
        {
            title: 'Total de usuarios',
            color: 'success',
            quantity: totalUsers,
            icon: 'fa-solid fa-users', 
            iconColor: '#00b8a7',
            quantityColor: 'white'
        },
        {
            title: 'Total de categorías',
            color: 'warning',
            quantity: totalCategories,
            icon: 'fa-solid fa-list',
            iconColor: '#d83f1f',
            quantityColor: 'white',
        }
    ];

    return (
        <div className="row">
            {cartProps.map((movie, i) => (
                <SmallCard {...movie} key={i} />
            ))}
        </div>
    );
}

export default ContentRowMovies;
