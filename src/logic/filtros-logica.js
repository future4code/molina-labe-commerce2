import React from "react"
import Filtros from '../components/Filtros'

export default class FiltrosLogica extends React.Component {
    render() {
        const ListaFiltrada = Filtros.filter((numero) => {
            if(numero > 10 && numero < 100) {
                return true
            } else {
                return false
            }

        })
        return (
            <div>
                
            </div>
        )
    }
}
