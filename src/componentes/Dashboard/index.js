import styled from "styled-components";

const Coluna = styled.div`
    width: 200px;
    height: 100%;
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
        <Coluna>
        <TituloColuna>PAINEL ADMINISTRATIVO</TituloColuna>
        </Coluna>
    )
}

export default PresentDashboard;
