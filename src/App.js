import React from 'react';
import Filtros from './components/Filtros';
import styled from 'styled-components';
import Carrinho from './components/Carrinho';
import Produtos from './components/Produtos';
import Miller from './img/miller.jpg'
import Gargantua from './img/gargantua.jpg'
import Ranger from './img/ranger.jpg'
import Pandora from './img/pandora.jpg'
import Marte from './img/marte.jpg'
import Asteroid from './img/asteroid.jpg'

import Astronauta from './img/astronauta.png'



const Container = styled.div`
  display: flex;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px;
  color: white; 
  text-shadow: black 0.1em 0.1em 0.2em;
    background-image: url("https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/potw2115a.jpg");

   
`


const Filtro = styled.div ` 
  margin: 50px 20px 0 10px;
`



const Header = styled.div`
display: flex;
justify-content: center;
background-color:#8c8c8c;

`

const ImagemLogo = styled.img`
    width: 160px;
    height: 173px;
    margin-top: 5px;

`


const NomeSite = styled.h1`
    letter-spacing: 8px;
    color: black;
    margin-top: 65px;
    margin-left: 10px;
    font-family: system-ui;
`





const listaProdutos = [
  {
    imagemProduto: Miller,
    nomeProduto: "Planeta Miller",
    valor: 85,
    id: 1
  },
  {
    imagemProduto: Gargantua,
    nomeProduto: "Buraco Negro Gargantua",
    valor: 90,
    id: 2
  },
  {
    imagemProduto: Ranger,
    nomeProduto: "Planeta Ranger",
    valor: 55,
    id: 3
  },
  {
    imagemProduto: Pandora,
    nomeProduto: "Planeta Pandora",
    valor: 75,
    id: 4
  },
  {
    imagemProduto: Marte,
    nomeProduto: "Planeta Marte",
    valor: 20,
    id: 5
  },
  {
    imagemProduto: Asteroid,
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

  

  getListaProdutos = () => {
    return listaProdutos;
  }
  

  getCarrinho = () => {
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
      const valorTotal = state.valorTotal + listaProdutos[itemId -1].valor;

      return {
        carrinho,
        valorTotal
      }
    }, () => console.log(this.state.carrinho));
  }

  removeDoCarrinho = (itemId) => {

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
      <div>


        <Header>
          <ImagemLogo src={Astronauta}/>
          <NomeSite>AstroDev - Turismo Intergaláctico</NomeSite>
        </Header>
      
      <Container>

        <Filtro>

          <Filtros
            onChangeInputValorMinimo={this.onChangeInputValorMinimo}
            onChangeInputValorMaximo={this.onChangeInputValorMaximo}
            onChangeInputBusca={this.onChangeInputBusca}
            inputValorMaximo={this.state.inputValorMaximo}
            inputValorMinimo={this.state.inputValorMinimo}
            inputBusca={this.state.inputBusca}
          />

        </Filtro>


        <div>
          <Produtos
            listaProdutos={this.getListaProdutos}
            inputValorMaximo={this.state.inputValorMaximo}
            inputValorMinimo={this.state.inputValorMinimo}
            inputBusca={this.state.inputBusca}
            adicionaAoCarrinho={this.adicionaAoCarrinho}
          />
       </div>
       

        <Carrinho 
          valorTotal={this.state.valorTotal}
          produtos={this.getListaProdutos()}
          getCarrinho={this.getCarrinho}
          removeDoCarrinho={this.removeDoCarrinho}
        />

      </Container>

      </div>

    )
  }





}