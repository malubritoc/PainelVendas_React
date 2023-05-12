import { useState } from "react";
import { postVenda } from '../../servicos/vendas'
import styled from "styled-components";
import { Link } from "react-router-dom";

const FomularioContainer = styled.div`
    display: flex;
`

const TituloNovaVenda = styled.h1`
    color: #181C32;
    margin-left: 15px;
`

const Campo = styled.div`
    display: grid;
    margin-left: 15px;
    margin-bottom: 5px;
`

const Input = styled.input`
    width: 300px;
    height: 20px;
    padding: 5px;
    margin-bottom: 10px;
    background-color: #FFF;
    border-radius: 3px;
    border: 0.75px solid #C1C2C2;
`

const BoxForm = styled.div`
    background: #EEEEEE; 
    width: 400px;
    height: 700px;
    padding-left: 30px;
    padding-bottom: 30px;
    display: grid;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    margin-top: 50px;
    margin-left: 35%;
`

const BotaoAdicionar = styled.button`
    background-color: #181C32;
    height: 50px;
    width: 300px;
    color: #FFF;
    margin: 5px;
    margin-left: 15px;

    &:hover {
        background-color: #D9D9D9;
        color: #181C32;
        cursor: pointer
    }
`

const BotaoCancelar = styled.button`
    background-color: #B3B3B3;
    height: 30px;
    width: 300px;
    color: #000;
    margin: 5px;
    margin-left: 15px;

    &:hover {
        background-color: #D9D9D9;
        color: #000;
        cursor: pointer
    }
`

function PresentFormularioVenda() {
    const [ empresa, setEmpresa ] = useState('')
    const [ total, setTotal ] = useState('')
    const [ telefone, setTelefone ] = useState('')
    const [ frete, setFrete ] = useState('')
    const [ quantidade, setQuantidade ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await postVenda(empresa, total, telefone, frete, quantidade);
        await console.log(postVenda)
    }

    return (
        <FomularioContainer>
            <BoxForm>
                <TituloNovaVenda>Nova venda</TituloNovaVenda>
                <form onSubmit={handleSubmit}>
                    <Campo>
                        <label htmlFor="empresa">Nome da empresa</label>
                        <Input type='text' id='empresa' value={empresa} onChange={ (e) => setEmpresa(e.target.value)}></Input>
                    </Campo>
                    <Campo>
                        <label>CNPJ</label>
                        <Input type='text'></Input>
                    </Campo>
                    <Campo>
                        <label htmlFor="total">Valor total</label>
                        <Input type='text' id='total' value={total} onChange={ (e) => setTotal(e.target.value)}></Input>
                    </Campo>
                    <Campo>
                        <label>Produto</label>
                        <Input type='text'></Input>
                    </Campo>
                    <Campo>
                        <label>Nome do cliente</label>
                        <Input type='text'></Input>
                    </Campo>
                    <Campo>
                        <label htmlFor="telefone">Telefone do cliente</label>
                        <Input type='text' id='telefone' value={telefone} onChange={ (e) => setTelefone(e.target.value)}></Input>
                    </Campo>
                    <Campo>
                        <label htmlFor="frete">Valor do frete</label>
                        <Input type='text' id='frete' value={frete} onChange={ (e) => setFrete(e.target.value)}></Input>
                    </Campo>
                    <Campo>
                        <label htmlFor="quantidade">Quantidade</label>
                        <Input type='text' id='quantidade' value={quantidade} onChange={ (e) => setQuantidade(e.target.value)}></Input>
                    </Campo>
                    <BotaoAdicionar type='submit'>Adicionar</BotaoAdicionar>
                </form>
                <Link to='/usuario/2/cadastrarvenda' style={{ textDecoration: 'none' }}><BotaoCancelar>Cancelar</BotaoCancelar></Link>
            </BoxForm>
        </FomularioContainer>
    )
}

export default PresentFormularioVenda;