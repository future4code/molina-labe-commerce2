import React from 'react'
import CarrinhoLogic from '../logic/carrinho'


export default class Carrinho extends React.Component {

    carrinhoLogic = new CarrinhoLogic();

    render() {

        return(
            <div>
            <h2>CARRINHO</h2>
            {}
            <p>Total: ₿ {this.carrinhoLogic.ValorTotal.toFixed(2)}</p>
            </div>
        )
    }
}