import axios from 'axios'

const vendasAPI = axios.create({baseURL: 'http://localhost:8000/vendas'})

let variavel = 2

function getVendas() {
    const resultadoVendas = axios.get(`http://localhost:8000/vendas/usuario/${variavel}`).then(response => (response.data)).catch(erro => console.log(erro))
    return resultadoVendas
}

export {
    getVendas
}