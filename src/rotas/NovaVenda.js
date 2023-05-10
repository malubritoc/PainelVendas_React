import HeaderNovaVenda from "../componentes/HeaderNovaVenda";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function NovaVenda() {

    return (
      <AppContainer>
        <HeaderNovaVenda/>
      </AppContainer>
    );
  }
  
  export default NovaVenda;