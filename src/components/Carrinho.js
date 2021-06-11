import React from 'react'

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


    renderizaCarrinho = () => {
        let listaItens = []
        for (let itemId of this.getItensUnicos()) {
            listaItens.push(
                <div>
                    <p>{this.getQuantItem(itemId)}x {this.props.produtos[itemId].nomeProduto}</p>
                    <button onClick={() => this.props.removeDoCarrinho(itemId)}>Remover item</button>
                </div>
            )
        }

        return listaItens;
    }




    render() {
       
        return(
            <div>

                <h2>CARRINHO</h2>
                {this.renderizaCarrinho()}
                {<p>Total: ₿ {this.props.valorTotal}</p>}
            
            </div>
        )
    }
}