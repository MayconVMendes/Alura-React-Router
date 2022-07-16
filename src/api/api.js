import Axios from "axios";

export const api = Axios.create({
    baseURL: 'http://localhost:5000' //apontando endereço da API
})

//busca esta sendo chamado em "ListaPost.jsx"
export const busca = async(url, setDado) => {
    const resposta = await api.get(url) //pegando valores da api
    setDado(resposta.data) //setando valores da api
}