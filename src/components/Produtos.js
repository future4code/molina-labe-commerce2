/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const ImagemProduto = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    
    
`

const DivProdutos = styled.div`
 
    flex-grow: 1;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 15px;
    column-gap: 15px;

`

const DivQuantidade = styled.div`
    display: flex;
    justify-content: space-between;

`

const SelectEstilizado = styled.select`
    height: 30%;
`

const CardProdutos = styled.div`
    border: 1px solid black;
    display: grid;
    text-align:center;
    font-size:  1.3em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    
`

const StyledButton = styled.button`
   display: grid;
    background-color: #eee;
    border: 1px solid #ddd;
    color: #333;
    font-size: 1em;
    padding: 10px 15px;
    margin: auto;
    margin-bottom: 5px;
    border-radius: 30px;



`

const OrdernarEstilizado = styled.div`
display: flex;
align-items: center;

`


export default class Produtos extends React.Component {

    listaProdutos = this.props.listaProdutos();

    state = {
        maiorMenor: 'crescente',
    }

    handleChangeSelect = (event) => {
        this.setState({ maiorMenor: event.target.value })
    }

    addCarrinho = (itemId) => {
        this.props.adicionaAoCarrinho(itemId);
    }


    filtraProduto = () => {

        const listaFiltrada = this.listaProdutos.filter((produto) => {

            if (produto.valor > this.props.inputValorMinimo && produto.valor < this.props.inputValorMaximo) {
                return true

            } else {
                return false
            }

        }).filter((produto) => {
            if (produto.nomeProduto.includes(this.props.inputBusca)) {
                return true
            } else {
                return false
            }

        })

        return listaFiltrada
    }


    ordernaLista = () => {
        switch (this.state.maiorMenor) {

            case 'crescente':
                this.listaProdutos.sort((a, b) => b.valor - a.valor)
                break;
            case 'decrescente':
                this.listaProdutos.sort((a, b) => a.valor - b.valor)
                break;
            default:
                this.listaProdutos.sort((a, b) => b.valor - a.valor)
                break;
        }

    }



    render() {

        this.ordernaLista();

        const listaFiltrada = this.filtraProduto().map((produto) => {

            return (

                <CardProdutos>

                    <ImagemProduto src={produto.imagemProduto} alt={produto.nomeProduto} />
                    <h3>{produto.nomeProduto}</h3>
                    <h3> ₿ {produto.valor}</h3>
                    <StyledButton onClick={() => this.addCarrinho(produto.id)}>Adicionar ao carrinho</StyledButton>

                </CardProdutos>
            )


        })


        return (
            <div>

                <DivQuantidade>
                    
                        <h3>Quantidade de produtos: {listaFiltrada.length}</h3>
                        <OrdernarEstilizado>
                        <label>{"Ordenar por"}:</label>
                        <SelectEstilizado value={this.state.maiorMenor} onChange={this.handleChangeSelect}>
                            <option value="decrescente">{"Maior Preço"}</option>
                            <option value="crescente">{"Menor Preço"}</option>

                        </SelectEstilizado>
                        </OrdernarEstilizado>
                    
                </DivQuantidade>

                <DivProdutos>


                    {listaFiltrada}

                </DivProdutos>

            </div>
        )

    }

}
