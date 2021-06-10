import { ListaProdutos } from './produtos';


export default class CarrinhoLogic {

    ValorTotal = 0;
    ProdutosNoCarrinho = [];


    somarItem = (itemId) => {
        this.ValorTotal += ListaProdutos[itemId-1].valor;
        this.ProdutosNoCarrinho.push(ListaProdutos[itemId-1]);
        
        return this.ValorTotal;
    }


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
        const itens = new Set(this.ProdutosNoCarrinho);
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


}