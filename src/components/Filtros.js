import { render } from '@testing-library/react';
import React from 'react'
import FiltrosLogica from '../logic/filtros-logica'

export default class Filtros extends React.Component{
    render(){
        onChangeInput=(event) => {
            this.setState(event.target.FiltrosLogica)
           
        }
        return(
            <div>
                <h2>FILTROS</h2>
                <p>Valor Mínimo:</p>
                <input
                type="number"
                value=" "
                onChange={}
                />
                <p>Valor Máximo:</p>
                 <input
                type="number"
                value=" "
                onChange={}
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