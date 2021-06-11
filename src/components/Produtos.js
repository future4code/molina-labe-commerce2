/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const ImagemProduto = styled.img`
    width: 300px;
`

export default class Produtos extends React.Component {

    state = {
        maiorMenor: 'crescente',
    }

    handleChangeSelect = (event) => {
        this.setState({maiorMenor: event.target.value})
    }

    addCarrinho = (itemId) => {
        this.props.adicionaAoCarrinho(itemId);
    }


    filtraProduto = () =>{
     
      const  listaFiltrada = this.props.listaProdutos.filter((produto) => {
            
        if (produto.valor > this.props.inputValorMinimo && produto.valor < this.props.inputValorMaximo) {
            return true
        
        } else {
            return false
        }

        }).filter((produto)=>{
        if (produto.nomeProduto.includes(this.props.inputBusca)){
            return true
        }else{
            return false
        }

    })

     return listaFiltrada
    }
     
     


    render() {

        const listaFiltrada = this.filtraProduto().map((produto)=>{

            return (

                <div>

                    <ImagemProduto src={produto.imagemProduto} alt={produto.nomeProduto}/>
                    <h3>{produto.nomeProduto}</h3>
                    <p>₿ {produto.valor}</p>
                    <button onClick={() => this.addCarrinho(produto.id)}>Adicionar ao carrinho</button>
                    
                </div>
            )


        })

        let quantidade = 0;
        let listaProdutos;
    
        switch(this.state.maiorMenor) {

          case 'crescente':
            listaProdutos = this.props.listaProdutos.sort((a, b) => b.valor - a.valor)
            break;
          case 'decrescente':
            listaProdutos = this.props.listaProdutos.sort((a, b) => a.valor - b.valor)
            break;
          default:
            listaProdutos = this.props.listaProdutos.sort((a, b) => b.valor - a.valor)
            break;
        }

         listaProdutos = listaProdutos.map((produto) => {
          quantidade++;
         })
       
       
        return (
            <div>
                <div>
                        <h3>Quantidade de produtos: {listaFiltrada.length}</h3>
                        <label>{"Ordenar por"}:</label>
                        <select value={this.state.maiorMenor} onChange={this.handleChangeSelect}>
                            <option value="decrescente">{"Maior Preço"}</option>
                            <option value="crescente">{"Menor Preço"}</option>
                        </select>
                </div>

                {listaFiltrada}

            </div>
        )
        
    }

}
