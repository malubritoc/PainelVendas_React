import HeaderUsuario from '../componentes/HeaderUsuario'
import PresentDashboard from '../componentes/Dashboard';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #D9D9D9;
`

function Dashboard() {
    return (
      <AppContainer>
        <HeaderUsuario/>
        <PresentDashboard />
      </AppContainer>
    );
  }
  
  export default Dashboard;