import React from 'react';

function Filtros(props) {
    const listaFiltrada = props.lista.filter((numero) => {
        if(numero > 10 && numero < 100) {
            return true
        } else {
            return false
        }
        
    })
    return (
        <div>
            <h3>Filtros</h3>
            <ul>
                {props.lista.map(numero => {
                    return <li>{numero}</li>;
                })}
            </ul>
        </div>
    );
}

export default Filtros;