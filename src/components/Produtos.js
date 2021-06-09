import React from 'react'


export default class Produtos extends React.Component {

    state = {
        arrayDeProdutos: [

            {
                imagemProduto: "'https://picsum.photos/200/200&a=1'",
                nomeProduto: "Produto 1",
                valor: 100,
                id: 1
            },

            {
                imagemProduto: "'https://picsum.photos/200/200&a=2'",
                nomeProduto: "Produto 2",
                valor: 100,
                id: 2
            },

            {
                imagemProduto: "'https://picsum.photos/200/200&a=3'",
                nomeProduto: "Produto 3",
                valor: 100,
                id: 3
            },

            {
                imagemProduto: "'https://picsum.photos/200/200&a=4'",
                nomeProduto: "Produto 4",
                valor: 100,
                id: 4
            },

            {
                imagemProduto: "'https://picsum.photos/200/200&a=5'",
                nomeProduto: "Produto 5",
                valor: 100,
                id: 5
            },

            {
                imagemProduto: "'https://picsum.photos/200/200&a=6'",
                nomeProduto: "Produto 6",
                valor: 100,
                id: 6
            }
        ]
    }

    render() {


        const componentesProdutos = this.state.arrayDeProdutos.map((produto, index) => {
            
            return 
        })

        
      


        return (
            <div>
                <h4>Quantidade de produtos: {/*recebe a quantidade que irá mudar dependendo dos produtos que aparecerão na tela baseados no filtro */}</h4>
                <div>
                    <h4> Ordenar por: </h4>
                    <select>
                        <option selected value="Maior Preço">Maior Preço</option>
                        <option value="Menor Preço">Menor Preço</option>

                    </select>
                </div>

                <div> {/* Div que será estilizada para receber cada produto */}
                {componentesProdutos}
                <button>Adicionar ao Carrinho</button>

                </div>

            </div>
        )
    }

}