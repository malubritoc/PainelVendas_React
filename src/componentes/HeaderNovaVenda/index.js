import styled from 'styled-components'

import sair_img from '../../imagens/sair.svg'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    display: flex;
    alignt-items: center;
    width: 100%;
    height: 50px;
    background: #18243A;
    margin: 0;
`

const TextNovaVenda = styled.div`
    font-size: 18px;
    color: white;
    margin-top: 12px;
    margin-left: 220px;
`

const SairBox = styled.div`
    margin-right: 150px;
    width: 1000px
    display: flex;
    align-items: center;
    margin-left: 900px;
`

const SairImage = styled.img`
    width: 15px;
    height: 15px;
    margin: 15px;
`

function HeaderNovaVenda() {
    return (
        <HeaderContainer>
            <TextNovaVenda><strong>Cadastrar venda</strong></TextNovaVenda>
            <SairBox>
                <Link to='/usuario/2/cadastrarvenda'>
                    <SairImage 
                        src = {sair_img}
                        alt = 'Sair'
                    />
                </ Link>
            </SairBox>
        </HeaderContainer>
    )
}

export default HeaderNovaVenda;