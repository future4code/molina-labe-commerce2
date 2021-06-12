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
`

const Filtro = styled.div ` 
  display: flex;
  height: 100%;
  width: 20%;
  justify-content: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  `


const ProdutosEstilizados = styled.div`

display: grid;
width: 80%;
padding: 8px;

`

const Header = styled.div`
display: flex;
justify-content: left;

font-family: 'Times New Roman', Times, serif;
height: 100px;

`

const ImagemLogo = styled.img`
    width: 150px;
    height: 150px;
    margin-top: -24px;

`

const NomeSite = styled.h1`
    font-weight: 600;
    margin-left: 43px;
`

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
            onChageInputBusca={this.onChangeInputBusca}
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