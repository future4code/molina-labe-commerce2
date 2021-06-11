import React from 'react'
import styled from 'styled-components'
import Bitcoin from '../img/bitcoin.png'

const CarrinhoEstilizado = styled.div`
width: 20%;
text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`

const BotaoCarrinho = styled.button`
    display: grid;
    background-color: #eee;
    border: 1px solid #ddd;
    color: #333;
    font-size: 1em;
    padding: 5px 10px;
    margin: auto;
    margin-bottom: 5px;
    border-radius: 30px;
    

`

const BitcoinImagem = styled.img`
    margin-top: 297px;
    position: absolute;
    width: 32px;
    margin-left: 82px;

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
                    <BotaoCarrinho onClick={() => this.props.removeDoCarrinho(itemId)}>Remover item</BotaoCarrinho>
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