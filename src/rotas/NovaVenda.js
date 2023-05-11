import HeaderNovaVenda from "../componentes/HeaderNovaVenda";
import PresentFormularioVenda from "../componentes/FormularioVenda";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 120vh;
`

function NovaVenda() {

    return (
      <AppContainer>
        <HeaderNovaVenda/>
        <PresentFormularioVenda />
      </AppContainer>
    );
  }
  
  export default NovaVenda;