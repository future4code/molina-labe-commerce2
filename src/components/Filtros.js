
import React from 'react'


export default class Filtros extends React.Component {

    state = {

        inputValorMinimo: "",
        inputValorMaximo: "",
        inputBusca: ""
    }

    onChangeInputValorMinimo = (event) => {
        this.setState({ inputValorMinimo: event.target.value })

    }

    onChangeInputValorMaximo = (event) => {
        this.setState({ inputValorMaximo: event.target.value })

    }

    onChangeInputBusca = (event) => {
        this.setState({ inputBusca: event.target.value })
    }



    render() {

        

        
      
           
  
        
        return (

            <div>
                <h2>FILTROS</h2>
                <p>Valor Mínimo:</p>
                <input
                    type="number"
                    value={this.state.inputValorMinimo}
                    onChange={this.onChangeInputValorMinimo}

                />
                <p>Valor Máximo:</p>
                <input
                    type="number"
                    value={this.state.inputValorMaximo}
                    onChange={this.onChangeInputValorMaximo}


                />
                <p>Buscar por nome:</p>
                <input
                    type="text"
                    value={this.state.inputBusca}
                    onChange={this.onChangeInputBusca}

                />

            </div>
        )
    }

}