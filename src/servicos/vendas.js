import axios from 'axios'

const vendasAPI = axios.create({baseURL: 'http://localhost:8000/vendas'})

let variavel = 2

function getVendas() {
    const resultadoVendas = axios.get(`http://localhost:8000/vendas/usuario/${variavel}`).then(response => (response.data)).catch(erro => console.log(erro))
    return resultadoVendas
}

async function postVenda(empresa, total, telefone, frete, quantidade) {
    console.log(empresa, total, telefone, frete, quantidade)

    const data = {
        "usuarios_id": '2',
        "nome_empresa": empresa,
        "nome_cliente": 'Ana XXXX',
        "cnpj": '478375565435',
        "telefone": telefone,
        "valor_total": total,
        "valor_frete": frete,
        "nome_produto": 'bone',
        "quantidade": quantidade,
        "compensada": 1,
    }

    axios.post(`http://localhost:8000/vendas/`, data,{
        headers: {
        'Authorization': 'Bearer meu-token-de-autorizacao',
        'Content-Type': 'application/json'
      }}
    )
    .then(response => (
        alert('Venda cadastrada com sucesso!'))
    )
    .catch(erro => 
        console.log(erro),
        alert('Erro no cadastro da venda. Tente novamente mais tarde.'),
    )
}

export {
    getVendas,
    postVenda
}

/*     const [ empresa, setEmpresa ] = useState('')
    const [ total, setTotal ] = useState('')
    const [ telefone, setTelefone ] = useState('')
    const [ frete, setFrete ] = useState('')
    const [ quantidade, setQuantidade ] = useState('') */