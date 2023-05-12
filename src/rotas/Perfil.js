import HeaderUsuario from '../componentes/HeaderUsuario'
import PresentPerfil from '../componentes/Perfil';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 121vh;
  background-color: #D9D9D9;
`

function Perfil() {

    return (
      <AppContainer>
        <HeaderUsuario/>
        <PresentPerfil/>
      </AppContainer>
    );
  }
  
  export default Perfil;