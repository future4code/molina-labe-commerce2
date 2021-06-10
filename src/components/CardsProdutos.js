import React from 'react';
import styled from 'styled-components'

const FotoProduto = styled.img`



`
const CardProduto = styled.div`
display: flex;
flex-direction: column;
height: 100px;
width: 100px;

`

let onClickAdicionarCarrinho = () =>{
    console.log('Adicionado')
}




export default class CardProdutos extends React.Component{

    render (){

        return(
            <CardProduto>
                <FotoProduto src={this.props.imagemProduto} alt={'Foto do produto'}/>
                <p>{this.props.nomeProduto}</p> 
                <p>{this.props.valor}</p>
                <button onClick={onClickAdicionarCarrinho}>Adicionar ao Carrinho</button>
            </CardProduto>
        )
    }

}