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

  state = {
    listaProdutos: listaProdutos,

    inputValorMinimo: -Infinity,
    inputValorMaximo: +Infinity,
    inputBusca: ''
  }

  onChangeInputValorMinimo = (event) => {
    this.setState({inputValorMinimo: Number(event.target.value) })

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
        <Produtos
          listaProdutos={this.state.listaProdutos}
          inputValorMaximo={this.state.inputValorMaximo}
          inputValorMinimo={this.state.inputValorMinimo}
          inputBusca={this.state.inputBusca}


        />
        <Carrinho />

      </Container>
    )
  }





}