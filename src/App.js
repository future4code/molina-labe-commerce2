import React from 'react';
import Filtros from './components/Filtros';

import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Produtos from './components/Produtos';


const Container = styled.div`
  display: flex;
`;

const listaProdutos = [
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


];


export default class App extends React.Component {

  constructor() {
    super()

    this.carrinho = []
  }
  
  state = {
    carrinho: [],
    valorTotal: 0,

    inputValorMinimo: -Infinity,
    inputValorMaximo: +Infinity,
    inputBusca: ""
  }

  getCarrinho = () => {
    // this.setState({carrinho: this.state.carrinho})
    return this.state.carrinho;
  }

  atualizaCarrinho = () => {
    this.setState({
      valorTotal: this.state.valorTotal 
    })
  }

  adicionaAoCarrinho = (itemId) => {
    this.setState(state => {
      const carrinho = state.carrinho.concat(itemId);
      const valorTotal = state.valorTotal + listaProdutos[itemId-1].valor;

      return {
        carrinho,
        valorTotal
      }
    }, () => console.log(this.state.carrinho));
  }

  removeDoCarrinho = (itemId) => {
    console.log('Removendo item ' + itemId + ' do carrinho!')

    let valorTotal = this.state.valorTotal;
    let carrinho = this.state.carrinho;
    
    const tamanhoLista = carrinho.length;

    for (let i=0; i<tamanhoLista; i++) {
      if (carrinho[i] === itemId) {
        valorTotal -= listaProdutos[carrinho[i]-1].valor;
        carrinho.splice(i, 1);

        break;
      }
    }

    this.setState({
      valorTotal: valorTotal,
      carrinho: carrinho
    })
  }

  onChangeInputValorMinimo = (event) => {
    this.setState({ inputValorMinimo: Number(event.target.value) })

  }

  onChangeInputValorMaximo = (event) => {
    this.setState({ inputValorMaximo: Number(event.target.value) })

  }

  onChangeInputBusca = (event) => {
    this.setState({ inputBusca: event.target.value })
  }

  render() {

    return (
      <Container>
        <Filtros
          onChangeInputValorMinimo={this.onChangeInputValorMinimo}
          onChangeInputValorMaximo={this.onChangeInputValorMaximo}
          onChageInputBusca={this.onChangeInputBusca}
          inputValorMaximo={this.state.inputValorMaximo}
          inputValorMinimo={this.state.inputValorMinimo}
          inputBusca={this.state.inputBusca}
        />
        <div>
          <h4>Quantidade de produtos: </h4>
          <h4>Ordenar por:</h4>
          <select>

            <option selected value="Menor Preço">Menor Preço</option>
            <option value="Maior Preço">Maior Preço</option>

          </select>
        </div>

        <Produtos
          listaProdutos={listaProdutos}
          inputValorMaximo={this.state.inputValorMaximo}
          inputValorMinimo={this.state.inputValorMinimo}
          inputBusca={this.state.inputBusca}
          adicionaAoCarrinho={this.adicionaAoCarrinho}
        />

        <Carrinho 
          valorTotal={this.state.valorTotal}
          produtos={listaProdutos}
          getCarrinho={this.getCarrinho}
          removeDoCarrinho={this.removeDoCarrinho}
        />
      </Container>

    )
  }





}