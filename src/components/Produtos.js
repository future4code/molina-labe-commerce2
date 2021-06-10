import React from 'react'
import { ListaProdutos } from '../logic/produtos'
import styled from 'styled-components'


const ImagemProduto = styled.img`
    width: 300px;
`

export default class Produtos extends React.Component {

    renderizaProdutos = () => {
        let lista = [];
        for (let produto of ListaProdutos) {
            lista.push(
                <div>
                    <ImagemProduto src={produto.imagemProduto} alt={produto.nomeProduto}/>
                    <h3>{produto.nomeProduto}</h3>
                    <p>₿ {produto.valor.toFixed(2)}</p>
                    <button /*onClick={carrinhoLogic.somarItem(produto.id)}*/>Adicionar ao carrinho</button>
                </div>
            );
        }

        return lista;
    }

    render() {

        return <div>{this.renderizaProdutos()}</div>
    }

}
