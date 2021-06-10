import React from 'react'



export default class Carrinho extends React.Component {

    ValorTotal = 0;
    ProdutosNoCarrinho = [];


    


    removerItem = (itemId) => {
        let produtos = this.ProdutosNoCarrinho;
        const tamanhoLista = produtos.length;

        for (let i=0; i<tamanhoLista; i++) {
            if (produtos[i].id === itemId) {
                this.ValorTotal -= produtos[i].valor;
                this.produtos.splice(i, 1);
            }
        }

        this.ProdutosNoCarrinho = produtos;
        return this.ValorTotal;
    }


    getItensUnicos = () => {
        const itens = new Set(this.state.ProdutosNoCarrinho);
        const itensArray = Array.from(itens);

        return itensArray;
    }

    getQuantItem = (itemId) => {
        let quant = 0;
        let item;

        for (item of this.ProdutosNoCarrinho) {
            if (item.id === itemId) {
                quant++;
            }
        }

        return quant;
    }

    

    render() {

        return(
            <div>
            <h2>CARRINHO</h2>
            {}
            <p>Total: ₿ {this.ValorTotal.toFixed(2)}</p>
            </div>
        )
    }
}