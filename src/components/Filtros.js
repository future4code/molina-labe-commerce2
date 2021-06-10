import { render } from '@testing-library/react';
import React from 'react'

export default class Filtros extends React.Component{
    render(){
        return(
            <div>
                <h2>FILTROS</h2>
                <p>Valor Mínimo:</p>
                <input
                type="number"
                value=" "
                />
                <p>Valor Máximo:</p>
                 <input
                type="number"
                value=" "
                />
                <p>Buscar por nome:</p>
                <input
                type="text"
                value=" "
                />

            </div>
        )
    }

}