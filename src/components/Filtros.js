import React from 'react'
import Produtos from './Produtos'
import Produto from './Produtos'


export default class Filtros extends React.Component {

   


    render() {


        
        
 
        

        
      
           
  
        
        return (

            <div>
                <h2>FILTROS</h2>
                <p>Valor Mínimo:</p>
                <input
                    type="number"
                    value={this.props.inputValorMinimo}
                    onChange={this.props.onChangeInputValorMinimo}

                />
                <p>Valor Máximo:</p>
                <input
                    type="number"
                    value={this.props.inputValorMaximo}
                    onChange={this.props.onChangeInputValorMaximo}


                />
                <p>Buscar por nome:</p>
                <input
                    type="text"
                    value={this.props.inputBusca}
                    onChange={this.props.onChangeInputBusca}

                />

            </div>
        )
    }

}