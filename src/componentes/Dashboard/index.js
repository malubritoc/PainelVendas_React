import styled from "styled-components";
import { Link } from 'react-router-dom'

const DashboardContainer = styled.div`
    display: flex;
    padding: 0;
`

const Coluna = styled.div`
    display: grid;
    width: 200px;
    height: 790px;
    background-color: #EDEDED;
    border-right: 1px solid rgba(153, 159, 162, 0.5);
`

const TituloColuna = styled.p`
    font-family: 'Arial';
    font-size: 9px;
    padding-left: 25px;
    padding-top: 30px;
    height: 20px;
    margin: 0px;
    color: #878B8D;
`
const OpcoesColuna = styled.div`
    height: 70px;
    display: grid;
    font-family: 'Arial';
    font-size: 12px;
    margin-left: 60px;
    margin-top: 10px;
`

const BoxColuna = styled.div`
    height: 50px;
`

const BoxGraficos = styled.div `
    display: grid;
    padding: 0;
`

const BaseEvolucao = styled.div`
    background: #EEEEEE; 
    width: 900px;
    height: 215px;
    padding: 0;
    display: flex;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    margin-top: 80px;
    margin-left: 120px;
`

const BoxInfos =styled.div`
    width: 920px;
    height: 120px;
    display: flex;
    margin-left: 120px;
    padding: 0;
`

const BoxVerMais = styled.div` 
    width: 920px;
    display: flex;
    margin-left: 120px;
`

const VerMais = styled.div`
    background: #18243A; 
    width: 440px;
    height: 30px;
    padding: 0;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    margin-right: 20px;
`

const BaseInfos = styled.div`
    background: #EEEEEE; 
    width: 440px;
    height: 175px;
    padding: auto;
    display: flex;
    align-items: center;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    margin-right: 20px;
`

function PresentDashboard() {
    return (
        <DashboardContainer>
            <Coluna>
            <BoxColuna>
                <TituloColuna>PAINEL ADMINISTRATIVO</TituloColuna>
                <OpcoesColuna>
                    <Link to='/usuario/2/dashboard' style={{ textDecoration: 'none', color: '#181C32' }}>Dashboard</Link>
                    <br/>
                    <Link to='/usuario/2/cadastrarvenda' style={{ textDecoration: 'none', color: '#181C32' }}>Cadastrar venda</Link>
                    <br/>
                    <Link to='/usuario/2/perfil' style={{ textDecoration: 'none', color: '#181C32' }}>Perfil</Link>
                    <p style={{ color: '#181C32'}}>Comissões</p>
                </OpcoesColuna>
            </BoxColuna>
            </Coluna>
            <BoxGraficos>
            <BaseEvolucao>
                oie
            </BaseEvolucao>
            <BoxInfos>
                <BaseInfos />
                <BaseInfos />
            </BoxInfos>
            <BoxVerMais>
                <VerMais />
                <VerMais />
            </BoxVerMais>
            <BoxInfos>
                <BaseInfos />
                <BaseInfos />
            </BoxInfos>
            <BoxVerMais>
                <VerMais />
                <VerMais />
            </BoxVerMais>
            </BoxGraficos>
        </DashboardContainer>
    )
}

export default PresentDashboard;
