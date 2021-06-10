import React from 'react';
import Filtros from './components/Filtros';

import styled from 'styled-components';

import Carrinho from './components/Carrinho';
import Produtos from './components/Produtos';

// import CarrinhoLogic from '.  /logic/carrinho'


const Container = styled.div`
  display: flex;
`;

// Lembrar de passar carrinhoLogic com props
// let carrinhoLogic = new CarrinhoLogic();

function App() {
  return (
    <Container>
    <Filtros />
      <Produtos/>
      <Carrinho/>

    </Container>


export default App;
