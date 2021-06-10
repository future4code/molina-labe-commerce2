import React from 'react'

import styled from 'styled-components'


const ImagemProduto = styled.img`
    width: 300px;
`

export default class Produtos extends React.Component {

    state = {

        ListaProdutos = [
            {
                imagemProduto: "https://blog.enem.com.br/wp-content/uploads/2020/04/img-materia-r7-inter.jpg",
                nomeProduto: "Planeta Miller",
                valor: 85,
                id: 1
            },
            
            {
                imagemProduto: "https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2019/04/buraco-negro-gargantua-970x444.jpg",
                nomeProduto: "Buraco Negro Gargantua",
                valor: 90,
                id: 2
            },
            
            {
                imagemProduto: "https://blogdoishii.files.wordpress.com/2018/07/k01vra.jpg",
                nomeProduto: "Planeta Ranger",
                valor: 55,
                id: 3
            },
            {
                imagemProduto: "https://imagens.publico.pt/imagens.aspx/885789?tp=UH&db=IMAGENS&type=JPG",
                nomeProduto: "Planeta Pandora",
                valor: 75,
                id: 4
            },
            
            {
                imagemProduto: "https://super.abril.com.br/wp-content/uploads/2020/01/agua-marte-curiosity.jpg",
                nomeProduto: "Planeta Marte",
                valor: 20,
                id: 5
            },
            
            {
                imagemProduto: "https://cdn.universoracionalista.org/wp-content/uploads/2020/06/ceres-dawn.jpg",
                nomeProduto: "Asteróide B-612",
                valor: 32,
                id: 6
            }
        ]

    }

   
    

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

    somarItem = (itemId) => {
        this.ValorTotal += this.ListaProdutos[itemId-1].valor;
        this.ProdutosNoCarrinho.push(ListaProdutos[itemId-1]);
        
        return this.ValorTotal;
    }

    render() {

        return <div>{this.renderizaProdutos()}</div>
    }

}
