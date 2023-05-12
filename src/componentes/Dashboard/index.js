import styled from "styled-components";
import { Link } from 'react-router-dom'
import GraficoVendasPorTempo from "../GraficoVendasPorTempo";
import vendas from '../../imagens/cadastrarvendas.png'
import dashboard_s from '../../imagens/dashboard_selec.png'
import perfil from '../../imagens/perfil.png'
import comissoes from '../../imagens/comissoes.png'

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

const IconsColuna = styled.img`
    width: 10px;
    margin-right: 5px;
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
    display: grid;
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

const TextoVerMais = styled.p`
    color: #FFF;
    width: 200px;
    font-size: 12px;
    margin-left: 200px;
    margin-top: 7px;
    background-color: #18243A;
`

const BaseInfos = styled.div`
    background: #EEEEEE; 
    width: 440px;
    height: 175px;
    padding: auto;
    display: flex;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    margin-right: 20px;
`

const BoxGrafico = styled.div`
    margin: 15px;
`

const TituloGrafico = styled.h1` 
    color: #181C32;
    font-size: 16px;
    height: 17px;
    margin: 3px;
`

const SubTituloGrafico = styled.h1` 
    color: #C6C6C6;
    font-size: 10px;
    height: 17px;
    margin-left: 3px;
    margin-bottom: 10px;
`

function PresentDashboard() {
    return (
        <DashboardContainer>
            <Coluna>
            <BoxColuna>
                <TituloColuna>PAINEL ADMINISTRATIVO</TituloColuna>
                <OpcoesColuna>
                    <Link to='/usuario/2/dashboard' style={{ display: 'flex',textDecoration: 'none', color: '#0988A8' }}>
                        <IconsColuna
                            src={dashboard_s} 
                        />
                        Dashboard</Link>
                    <br/>
                    <Link to='/usuario/2/cadastrarvenda' style={{ textDecoration: 'none', color: '#181C32' }}>
                        <IconsColuna
                            src={vendas} 
                        />
                        Cadastrar venda</Link>
                    <br/>
                    <Link to='/usuario/2/perfil' style={{ textDecoration: 'none', color: '#181C32' }}>
                        <IconsColuna
                            src={perfil} 
                        />
                        Perfil</Link>
                    <p style={{ color: '#181C32'}}>
                        <IconsColuna
                            src={comissoes} 
                        />
                        Comissões</p>
                </OpcoesColuna>
            </BoxColuna>
            </Coluna>
            <BoxGraficos>
            <BaseEvolucao>
                <BoxGrafico>
                    <TituloGrafico>Evolução de venda</TituloGrafico>
                    <SubTituloGrafico>QUANTIDADE TOTAL - 00/00/0000</SubTituloGrafico>
                    <GraficoVendasPorTempo/>
                </BoxGrafico>
            </BaseEvolucao>
            <BoxInfos>
                <BaseInfos>
                    <BoxGrafico>
                        <TituloGrafico>Número de produtos vendidos</TituloGrafico>
                        <SubTituloGrafico>QUANTIDADE TOTAL - 00/00/0000</SubTituloGrafico>
                    </BoxGrafico>
                </BaseInfos>
                <BaseInfos>
                    <BoxGrafico>
                        <TituloGrafico>Número de clientes</TituloGrafico>
                        <SubTituloGrafico>QUANTIDADE TOTAL - MARÇO</SubTituloGrafico>
                    </BoxGrafico>
                </BaseInfos>
            </BoxInfos>
            <BoxVerMais>
                <VerMais>
                    <TextoVerMais>
                        Ver tudo
                    </TextoVerMais>
                </VerMais>
                <VerMais>
                    <TextoVerMais>
                        Ver tudo
                    </TextoVerMais>
                </VerMais>
            </BoxVerMais>
            <BoxInfos>
                <BaseInfos>
                    <BoxGrafico>
                        <TituloGrafico>Pedidos compensados</TituloGrafico>
                        <SubTituloGrafico>MARÇO</SubTituloGrafico>
                    </BoxGrafico>
                </BaseInfos>
                <BaseInfos>
                    <BoxGrafico>
                        <TituloGrafico>Pedidos a compensar</TituloGrafico>
                        <SubTituloGrafico>CLIENTES COM PAGAMENTO PENDENTE</SubTituloGrafico>
                    </BoxGrafico>
                </BaseInfos>
            </BoxInfos>
            <BoxVerMais>
                <VerMais>
                    <TextoVerMais style={{marginLeft: '160px'}}>
                        Detalhar faturamento
                    </TextoVerMais>
                </VerMais>
                <VerMais>
                    <TextoVerMais>
                        Ver tudo 
                    </TextoVerMais>
                </VerMais>
            </BoxVerMais>
            </BoxGraficos>
        </DashboardContainer>
    )
}

export default PresentDashboard;
