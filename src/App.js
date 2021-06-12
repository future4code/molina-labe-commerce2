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
import Logo from './img/logo.png'


const Container = styled.div`
  display: flex;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px;
  color: saddlebrown;
    background-image: url(https://static.vecteezy.com/system/resources/previews/001/218/845/non_2x/colorful-holographic-gradient-background-design-vector.jpg);
`

const Filtro = styled.div ` 
  margin: 50px 20px 0 10px;
`



const Header = styled.div`
display: flex;
justify-content: center;
background-image: url(https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-space-universe-banner-background-universetechnology-backgroundgradient-backgroundgradual-image_54068.jpg)

`

const ImagemLogo = styled.img`
    width: 150px;
    height: 135px;
    margin-top: -10px;
    object-fit: cover;

`

const NomeSite = styled.h1`
color:whitesmoke ;
margin-top: 40px;
margin-left: 10px;
font-style: italic;
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
          <ImagemLogo src={Logo}/>
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