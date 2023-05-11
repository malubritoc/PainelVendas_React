import styled from "styled-components";
import { Link } from 'react-router-dom';
import { getVendas } from '../../servicos/vendas';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    font-family: 'Arial';
    font-size: 9px;
    margin: 0;
    padding-left: 25px;
    padding-top: 30px;
    height: 20px;
    color: #878B8D
    
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
`

const BotaoEditarVenda = styled.button` 
    width: 15px;
    height: 15px;
    color: #FFF;
    cursor: pointer;
    font-size: 22px;
    align-text: center;
    padding: 0;
    margin-top: 0px;
    margin-left: 0px;
`

const ExcluirImage = styled.img`
    width: 15px;
`

function PresentVendas() {
    const [ vendas, setVendas ] = useState([])

    function handleRemover(vendaId){
        axios.delete('http://localhost:8000/vendas/' + vendaId)
        .then(response =>{
            alert('deletado com sucesso!');
        })
        .catch(error =>{
            alert('Erro na remoção. Tente novamente.');
            console.log(error);
        })
    }

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
  }, [handleRemover])

    return (
        <VendasContainer>
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
                        <th>Frete (R$)</th>
                        <th>Valor (R$)</th>
                        <th />
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
                                const data = venda.createdAt.split('T')[0];
                                return (
                                    <p>{data}</p>
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
                        <td>                        
                            {vendas.map((venda,i) => {
                            return (
                            <p><BotaoEditarVenda>
                                    <a onClick={() => handleRemover(venda.id)}>
                                        <ExcluirImage src ='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'></ExcluirImage>
                                    </a>
                                </BotaoEditarVenda></p>
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
