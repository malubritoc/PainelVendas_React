import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    alignt-items: center;
    width: 100%;
    height: 50px;
    background: #18243A;
    margin: 0;
`

const TextNovaVenda = styled.div`
    font-size: 26px;
    color: white;
    margin-top: 6px;
    margin-left: 50px;
`

function HeaderNovaVenda() {
    return (
        <HeaderContainer>
            <TextNovaVenda>Cadastrar venda</TextNovaVenda>
        </HeaderContainer>
    )
}

export default HeaderNovaVenda;