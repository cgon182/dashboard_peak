import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function SmallCard(props){
    const [quantity, setQuantity] = useState('No quantity'); // Cambiado el nombre del estado

    useEffect(() => {
        setQuantity(props.quantity);  
    }, [props.quantity]); 

    return(
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}>{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold" style={{ color: props.quantityColor }}>{quantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${props.icon} fa-2x`} style={{ color: props.iconColor }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
    title: 'Sin título',
    color: 'success',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCard.propTypes = {
    title: PropTypes.string.isRequired, // Corregido el nombre del atributo
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired // Definido el tipo de dato de quantity
}

export default SmallCard;
