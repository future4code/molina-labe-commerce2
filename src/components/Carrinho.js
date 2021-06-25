import React from 'react'
import styled from 'styled-components'

const CarrinhoEstilizado = styled.div`
width: 50%;
margin-left: 20px;
margin-top: 50px;
text-align: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

`

const BotaoCarrinho = styled.button`
    border: none;
    color: #fff;
    color: black;
    margin-left: 5px;
    background-color: #CFCFCF;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    padding: 10px 24px;
    border-radius: 4px;

`
const ItensRemove = styled.p `
font-size: 18px;

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
    

    getProduto(itemId) {
        for (let item of this.props.produtos) {
            if (item.id === itemId) {
                return item;
            }
        }
    }


    renderizaCarrinho = () => {
        let listaItens = []
        for (let itemId of this.getItensUnicos()) {
            listaItens.push(
                <div>
                    <ItensRemove>{this.getQuantItem(itemId)}x {this.getProduto(itemId).nomeProduto}</ItensRemove>
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
                <ItensRemove>Total: ฿ {this.props.valorTotal}</ItensRemove>
                
            </CarrinhoEstilizado>
        )
    }
}