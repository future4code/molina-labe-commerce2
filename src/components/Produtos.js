import React from 'react'
import styled from 'styled-components'

const ImagemProduto = styled.img`
    width: 300px;
`

export default class Produtos extends React.Component {

    addCarrinho = (itemId) => {
        this.props.adicionaAoCarrinho(itemId);
        console.log('Produto ' + itemId + ' adicionado ao carrinho!')
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

                return <div>
                    
                <ImagemProduto src={produto.imagemProduto} alt={produto.nomeProduto}/>
                <h3>{produto.nomeProduto}</h3>
                <p>₿ {produto.valor}</p>
                <button onClick={() => this.addCarrinho(produto.id)}>Adicionar ao carrinho</button>
            </div>


            })


       /*  console.log(this.listaFiltrada)
        console.log(this.props.inputValorMinimo, this.props.inputValorMaximo) */

       
        return (
            <div>
                {listaFiltrada}
            </div>
        )
        
    }

}
