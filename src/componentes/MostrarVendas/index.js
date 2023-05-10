import styled from "styled-components";
import { Link } from 'react-router-dom';
import { getVendas } from '../../servicos/vendas';
import React, { useState, useEffect } from 'react';

const VendasContainer = styled.div`
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

const ColunaFiltro = styled.div`
    display: grid;
    margin: 50px;
    margin-right: 10px;
    width: 200px;
    height: 700px;
    background-color: #C6C6C6;
    border-radius: 8px;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
`

const VendasBox = styled.div`
    margin: 50px;
    margin-left: 10px;
    width: 800px;
    height:700px
    background: #EEEEEE;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
`

const TabelaVendas = styled.table`
    border-collapse: collapse;
    width: 800px;
    margin-top: 20px;

    th {
        background-color: #C6C6C6;
        color: rgba(24, 28, 50, 0.5);
        text-align: center;
        padding: 10px;
      }
    
    td {
        text-align: center;
        padding: 10px;
        color: rgba(24, 28, 50, 0.5);
    }
    
    tr:first-child {
        background-color: #D9D9D9;
    }
`

const BotaoNovaVenda = styled.button` 
    width: 26px;
    height: 26px;
    background-color: #18243A;
    color: #FFF;
    cursor: pointer;
    font-size: 22px;
    align-text: center;
    padding: 0;
    margin-top: 20px;
    margin-left: 20px;
`

function PresentVendas() {
    const [ vendas, setVendas ] = useState([])

    useEffect( () => {
    async function fetchVendas() {
      try {
        const response = await getVendas()
        setVendas(response)
      } catch(error) {
        console.error(error)
      }
    }

    fetchVendas()
  }, [])

    return (
        <VendasContainer>
            <Coluna>
            <TituloColuna>PAINEL ADMINISTRATIVO</TituloColuna>
            <Link to='/usuario/2/dashboard'>Dashboard</Link>
            <Link to='/usuario/2/cadastrarvenda'>Cadastrar venda</Link>
            </Coluna>
            <ColunaFiltro />
            <VendasBox>
                <Link to='/usuario/2/cadastrarvenda_new'>
                    <BotaoNovaVenda>+</BotaoNovaVenda>
                </Link>
                <TabelaVendas>
                    <tr>
                        <th>Id</th>
                        <th>Quantidade</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Telefone</th>
                        <th>Frete</th>
                        <th>Valor</th>
                    </tr>
                    <tr>
                        <td>                        
                            {vendas.map((venda,i) => {
                            return (
                            <p>{venda.id}</p>
                            ) 
                            })}
                        </td>
                        <td>                        
                            {vendas.map((venda,i) => {
                            return (
                            <p>{venda.quantidade}</p>
                            ) 
                            })}
                        </td>
                        <td>                        
                            {vendas.map((venda,i) => {
                            return (
                            <p>{venda.nome_empresa}</p>
                            ) 
                            })}
                        </td>
                        <td>                        
                            {vendas.map((venda,i) => {
                            return (
                            <p>{venda.createdAt}</p>
                            ) 
                            })}
                        </td>
                        <td>                        
                            {vendas.map((venda,i) => {
                            return (
                            <p>{venda.telefone}</p>
                            ) 
                            })}
                        </td>
                        <td>                        
                            {vendas.map((venda,i) => {
                            return (
                            <p>{venda.valor_frete}</p>
                            ) 
                            })}
                        </td>
                        <td>                        
                            {vendas.map((venda,i) => {
                            return (
                            <p>{venda.valor_total}</p>
                            ) 
                            })}
                        </td>
                    </tr>
                </TabelaVendas>
            </VendasBox>
        </VendasContainer>
    )
}

export default PresentVendas;
