import React from 'react'
import styled from 'styled-components'

const CarrinhoEstilizado = styled.div`
width: 20%;
border: 1px solid black;

`


export default class Carrinho extends React.Component {


    getItensUnicos = () => {
    
        const itens = new Set(this.props.getCarrinho());
        const itensArray = Array.from(itens);
        return itensArray;
    }

    getQuantItem = (itemId) => {
        let quant = 0;
        let item;

        for (item of this.props.getCarrinho()) {
            if (item === itemId) {
                quant++;
            }
        }

        return quant;
    }


    renderizaCarrinho = () => {
        let listaItens = []
        for (let itemId of this.getItensUnicos()) {
            listaItens.push(
                <div>
                    <p>{this.getQuantItem(itemId)}x {this.props.produtos[itemId].nomeProduto}</p>
                    <button onClick={() => this.props.removeDoCarrinho(itemId)}>Remover item</button>
                </div>
            )
        }

        return listaItens;
    }




    render() {
       
        return(
            <CarrinhoEstilizado>

                <h2>CARRINHO</h2>
                {this.renderizaCarrinho()}
                {<p>Total: ₿ {this.props.valorTotal}</p>}
            
            </CarrinhoEstilizado>
        )
    }
}