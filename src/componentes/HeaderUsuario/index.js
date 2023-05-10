import logo from '../../imagens/logo.svg'
import seubone from '../../imagens/seubone.png'
import sair_img from '../../imagens/sair.svg'
import download_img from '../../imagens/download.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const FuncoesBox = styled.div`
    margin-right: 150px;
    display: flex;
    align-items: center;
`

const SairImage = styled.img`
    width: 15px;
    height: 15px;
    margin: 10px;
`
const DownloadImage = styled.img`
    width: 15px;
    height: 15px;
    margin: 10px;
`

function HeaderUsuario() {
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
            <FuncoesBox>
                <DownloadImage
                    src = {download_img}
                    alt = 'Dowload'
                />
                <Link to='/login'>
                    <SairImage
                        src = {sair_img}
                        alt = 'Sair'
                    />
                </Link>
            </FuncoesBox>
        </HeaderContainer>
    )
}

export default HeaderUsuario;