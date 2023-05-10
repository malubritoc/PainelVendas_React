import styled from "styled-components";
import { Link } from 'react-router-dom'

const DashboardContainer = styled.div`
    display: flex;
`

const Coluna = styled.div`
    display: grid;
    width: 200px;
    height: 790px;
    background-color: #EDEDED;
    border-right: 1px solid rgba(153, 159, 162, 0.5);
`

const TituloColuna = styled.p`
    font-family: 'Inter';
    font-size: 12px;
    margin: 0;
    padding-left: 25px;
    padding-top: 30px;
    
`

function PresentDashboard() {
    return (
        <DashboardContainer>
            <Coluna>
            <TituloColuna>PAINEL ADMINISTRATIVO</TituloColuna>
            <Link to='/usuario/2/dashboard'>Dashboard</Link>
            <Link to='/usuario/2/cadastrarvenda'>Cadastrar venda</Link>
            </Coluna>
        </DashboardContainer>
    )
}

export default PresentDashboard;
