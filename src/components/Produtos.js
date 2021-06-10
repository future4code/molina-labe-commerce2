import React from 'react'
import CardProdutos from './CardsProdutos'


export default class Produtos extends React.Component {

    state = {
        arrayDeProdutos: [

            {
                imagemProduto: "https://picsum.photos/50/70",
                nomeProduto: "Produto 1",
                valor: 100,
                id: 1
            },

            {
                imagemProduto: "https://picsum.photos/50/71",
                nomeProduto: "Produto 2",
                valor: 100,
                id: 2
            },

            {
                imagemProduto: "https://picsum.photos/50/72",
                nomeProduto: "Produto 3",
                valor: 100,
                id: 3
            },

            {
                imagemProduto: "https://picsum.photos/50/73",
                nomeProduto: "Produto 4",
                valor: 100,
                id: 4
            },

            {
                imagemProduto: "https://picsum.photos/50/74",
                nomeProduto: "Produto 5",
                valor: 100,
                id: 5
            },

            {
                imagemProduto: "https://picsum.photos/50/75",
                nomeProduto: "Produto 6",
                valor: 100,
                id: 6
            }
        ]
    }

    render() {


        let componentesProdutos = this.state.arrayDeProdutos.map((produto, index) => {
            
            return <CardProdutos key={index}
                imagemProduto={produto.imagemProduto}
                nomeProduto={produto.nomeProduto}
                valor={produto.valor}
                
                />
                
                    
                    
        })

       console.log("Meus produtos", componentesProdutos)
      


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

                
                       
                       
                       {componentesProdutos}
                

               

            </div>
        )
    }

}