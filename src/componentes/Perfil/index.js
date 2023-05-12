import styled from "styled-components";
import { Link } from 'react-router-dom'
import FormularioPerfil from "../FormularioPefil";
import vendas from '../../imagens/cadastrarvendas.png'
import dashboard from '../../imagens/dashboard.svg'
import perfil_s from '../../imagens/perfil_selec.png'
import comissoes from '../../imagens/comissoes.png'
import editar from '../../imagens/editarperfil.png'
import notif from '../../imagens/notificacoes.png'
import seguranca from '../../imagens/seguranca.png'
import ajuda from '../../imagens/ajuda.png'


const PerfilContainer = styled.div`
    display: flex;
`

const Coluna = styled.div`
    display: grid;
    width: 200px;
    height: 800px;
    background-color: #EDEDED;
    border-right: 1px solid rgba(153, 159, 162, 0.5);
`

const TituloColuna = styled.p`
    font-family: 'Arial';
    font-size: 9px;
    margin: 0;
    padding-left: 25px;
    padding-top: 30px;
    height: 20px;
    color: #878B8D
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
    height: 150px;
`

const BoxAzul = styled.div`
    background-color: #181C32;
    height: 600px;
    width: 100px;
    padding: 20px;
    border-radius: 20px 0 0 20px;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    margin-left: 50px;
    margin-top: 50px;
`

const OpcoesBoxAzul = styled.div`
    height: 70px;
    display: grid;
    font-family: 'Arial';
    font-size: 12px;
    margin-left: 0px;
    margin-top: 10px;
    color: #FFF;
`

const BasePerfil = styled.div`
    background: #EEEEEE; 
    width: 850px;
    height: 640px;
    padding: auto;
    display: grid;
    align-items: center;
    border-radius: 0 20px 20px 0;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    margin-top: 50px;
    margin-right: 0;;
`

function PresentPerfil() {
    return (
        <PerfilContainer>
            <Coluna>
            <BoxColuna>
                <TituloColuna>PAINEL ADMINISTRATIVO</TituloColuna>
                <OpcoesColuna>
                    <Link to='/usuario/2/dashboard' style={{ display: 'flex',textDecoration: 'none', color: '#181C32' }}>
                        <IconsColuna
                            src={dashboard} 
                        />
                        Dashboard</Link>
                    <br/>
                    <Link to='/usuario/2/cadastrarvenda' style={{ textDecoration: 'none', color: '#181C32' }}>
                        <IconsColuna
                            src={vendas} 
                        />
                        Cadastrar venda</Link>
                    <br/>
                    <Link to='/usuario/2/perfil' style={{ textDecoration: 'none', color: '#0988A8' }}>
                        <IconsColuna
                            src={perfil_s} 
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
            <BoxAzul>
                <OpcoesBoxAzul>
                    <Link to='/usuario/2/perfil' style={{ textDecoration: 'none',color: '#FCBB19'}}>
                        <IconsColuna
                        src={editar}
                        />
                        Editar perfil
                    </Link>
                    <br />
                    <p>
                        <IconsColuna
                            src={notif}
                        />
                        Notificações
                    </p>
                    <p>
                        <IconsColuna
                            src={seguranca}
                        />
                        Segurança
                    </p>
                    <p>
                        <IconsColuna
                            src={ajuda}
                        />
                        Ajuda
                    </p>
                </OpcoesBoxAzul>
            </BoxAzul>
            <BasePerfil>
                <FormularioPerfil />
            </BasePerfil>
        </PerfilContainer>
    )
}

export default PresentPerfil;
