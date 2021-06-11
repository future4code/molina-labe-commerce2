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

`

const DivQuantidade = styled.div`
    display: flex;
    justify-content: flex-end;

`

const SelectEstilizado = styled.select`
    height: 50%;
`

const CardProdutos = styled.div`
    border: 1px solid black;
    display: grid;

`

const StyledButton = styled.button`
    margin-bottom: 8px;
    width: 153px;
    border-radius: 16px;


`



export default class Produtos extends React.Component {

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

        const listaFiltrada = this.props.listaProdutos.filter((produto) => {

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




    render() {

        const listaFiltrada = this.filtraProduto().map((produto) => {

            return (

                <CardProdutos>

                    <ImagemProduto src={produto.imagemProduto} alt={produto.nomeProduto} />
                    <h3>{produto.nomeProduto}</h3>
                    <p>₿ {produto.valor}</p>
                    <StyledButton onClick={() => this.addCarrinho(produto.id)}>Adicionar ao carrinho</StyledButton>

                </CardProdutos>
            )


        })

        let quantidade = 0;
        let listaProdutos;

        switch (this.state.maiorMenor) {

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

                <DivQuantidade>
                    <h3>Quantidade de produtos: {listaFiltrada.length}</h3>
                    <label>{"Ordenar por"}:</label>
                    <SelectEstilizado value={this.state.maiorMenor} onChange={this.handleChangeSelect}>
                        <option value="decrescente">{"Maior Preço"}</option>
                        <option value="crescente">{"Menor Preço"}</option>
                    </SelectEstilizado>
                </DivQuantidade>

                <DivProdutos>


                    {listaFiltrada}

                </DivProdutos>

            </div>
        )

    }

}
