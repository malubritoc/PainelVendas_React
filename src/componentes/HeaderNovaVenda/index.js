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
    font-size: 18px;
    color: white;
    margin-top: 12px;
    margin-left: 220px;
`

function HeaderNovaVenda() {
    return (
        <HeaderContainer>
            <TextNovaVenda><strong>Cadastrar venda</strong></TextNovaVenda>
        </HeaderContainer>
    )
}

export default HeaderNovaVenda;