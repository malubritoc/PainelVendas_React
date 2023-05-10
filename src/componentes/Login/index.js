import styled from "styled-components";
import { Link } from 'react-router-dom'

const LoginBox = styled.div`
    display: flex;
    background-color: #FFF
    padding: 100px;
    border: 50px
    align-items: center;
    margin: auto;
    margin-top: 200px;
`

const EntradaUsuario = styled.div`
    display: flex;
    background-color: #181C32;
    height: 260px;
    width: 100px;
    align-items: center;
    padding: 20px;
    border-radius: 20px 0 0 20px;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    margin: auto 0 auto auto ;
`

const Texto = styled.p`
    color: #FFF;
    font-size: 18px;
    word-wrap: break-word;
    font-style: bold;
    text-align: center;
`

const Base = styled.div`
    background-color: rgba(217, 220, 236, 0.6);
    width: 400px;
    height: 300px;
    padding: auto;
    display: flex;
    align-items: center;
    border-radius: 0 20px 20px 0;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    margin: auto auto auto 0;
`

const InputBox = styled.div`
    margin-left: 65px;
`

const Input = styled.input`
    width: 250px;
    height: 20px;
    padding: 5px;
    background-color: #FFF;
    border-radius: 3px;
    border: 0.75px solid #C1C2C2;
    margin-bottom: 5px;
`

const BotaoEntrar = styled.button`
    background-color: #181C32;
    height: 30px;
    width: 260px;
    color: #FFF;

    &:hover {
        background-color: #D9D9D9;
        color: #181C32;
        cursor: pointer
    }
`

function Log_In() {
    return (
        <LoginBox>
            <EntradaUsuario>
                <Texto><strong>Entrada do Usuário</strong></Texto>
            </EntradaUsuario>
            <Base>
                <InputBox>
                    <Input placeholder="Nome de acesso"/>
                    <Input placeholder="Senha"/>
                    <Link to='/usuario/:id/dashboard'>
                        <BotaoEntrar>
                            <strong>
                                Entrar
                            </strong>
                        </BotaoEntrar>
                    </Link>
                </InputBox>
            </Base>
        </LoginBox>
    )
}

export default Log_In;
