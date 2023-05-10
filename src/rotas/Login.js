import Header from '../componentes/Header'
import Log_In from '../componentes/Login';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #D9D9D9;
`

function Login() {
  return (
    <AppContainer>
      <Header/>
      <Log_In />
    </AppContainer>
  );
}

export default Login;
