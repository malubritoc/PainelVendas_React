import HeaderUsuario from '../componentes/HeaderUsuario'
import PresentVendas from '../componentes/MostrarVendas';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #D9D9D9;
`

function CadastrarVendas() {

    return (
      <AppContainer>
        <HeaderUsuario/>
        <PresentVendas/>
      </AppContainer>
    );
  }
  
  export default CadastrarVendas;