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
        fetch('') // AQUÍ DEBERÍAS ESPECIFICAR LA URL PARA OBTENER EL TOTAL DE USUARIOS
            .then(response => response.json())
            .then(data => {
                setTotalUsers(data.totalUsers);
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
            icon: 'fa-clipboard-list'
        },
        {
            title: 'Total de usuarios',
            color: 'success',
            quantity: totalUsers,
            icon: 'fa-award'
        },
        {
            title: 'Total de categorías',
            color: 'warning',
            quantity: totalCategories,
            icon: 'fa-user-check'
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
