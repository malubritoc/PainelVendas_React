import logo from '../../imagens/logo.svg'
import seubone from '../../imagens/seubone.svg'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    alignt-items: center;
    width: 100%;
    height: 50px;
    background: #18243A;
    margin: 0;
`

const LogoBox = styled.div`
    margin: auto;
    margin-left: 220px;
    display: flex;
    align-items: center;
`

const LogoImage = styled.img`
    width: 20px;
    height: 20px;
    border-left: 50px;
`

const LogoText = styled.img`
    height: 15px;
`

function Header() {
    return (
        <HeaderContainer>
            <LogoBox>
                <LogoImage
                    src = {logo}
                    alt = 'Logo'
                />
                <LogoText
                    src = {seubone}
                    alt = 'Seu Boné'
                />
            </LogoBox>
        </HeaderContainer>
    )
}

export default Header;