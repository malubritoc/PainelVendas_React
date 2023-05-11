import styled from "styled-components";

const FomularioContainer = styled.div`
    display: grid;
    height: 600px;
`

const TituloPerfil = styled.h1`
    color: #181C32;
    height: 40px;
    margin: 30px;
    margin-bottom: 10px;
    padding: 10px;
`

const FormBox = styled.div`
    display: flex;
    height: 400px;
`

const FormBlock1 = styled.div`
    display: grid;
    height: 200px;
    margin-left: 30px;
    margin-right: 100px;
`

const FormBlock2 = styled.div`
    display: grid;
    height: 150px;
`

const Campo = styled.div`
    display: grid;
    height: 60px;
    margin-left: 15px;
    margin-bottom: 15px;
`

const Input = styled.input`
    width: 250px;
    height: 20px;
    padding: 5px;
    background-color: #FFF;
    border-radius: 3px;
    border: 0.75px solid #C1C2C2;
`

const BotaoAtualizar = styled.button`
    background-color: #181C32;
    height: 30px;
    width: 260px;
    color: #FFF;
    margin-left: 15px;
    margin-top: 30px;

    &:hover {
        background-color: #D9D9D9;
        color: #181C32;
        cursor: pointer
    }
`

const Label = styled.label`
    height: 20px;
`

function FormularioPerfil() {
    return (
        <FomularioContainer>
            <TituloPerfil>Editar perfil</TituloPerfil>
                <form>
                    <FormBox>
                        <FormBlock1>
                            <Campo>
                                <Label>Nome</Label>
                                <Input />
                            </Campo>
                            <Campo>
                                <Label>E-mail</Label>
                                <Input />
                            </Campo>
                            <Campo>
                                <Label>Estado</Label>
                                <Input />
                            </Campo>
                            <Campo>
                                <Label>Atualizar senha</Label>
                                <Input />
                            </Campo>
                            <BotaoAtualizar type='submit'>Atualizar dados</BotaoAtualizar>
                        </FormBlock1>
                        <FormBlock2>
                            <Campo>
                                <Label>Sobrenome</Label>
                                <Input />
                            </Campo>
                            <Campo>
                                <Label>Número de telefone</Label>
                                <Input />
                            </Campo>
                            <Campo>
                                <Label>Cidade</Label>
                                <Input />
                            </Campo>
                    </FormBlock2>
                    </FormBox>
                </form>
            </FomularioContainer>
    )
        
}

export default FormularioPerfil;