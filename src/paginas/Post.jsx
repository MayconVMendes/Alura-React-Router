import React, { useEffect, useState } from "react";
import { busca } from "../api/api";
import '../assets/css/post.css'
import { useParams, useHistory } from "react-router-dom";

const Post = ()=> {

    let history = useHistory()
    const { id } = useParams() //utilizando o params, para a rota do Post saber o ID correto em App.jsx
    const[post, setPost] = useState({})

    useEffect(() => {
        busca(`/posts/${id}`, setPost)

        //trabalhando com a falha, um ID que não existe, vai empurar para a pagina NotFound
        .catch(() => {
            history.push('/404') //empurando para a 404
        })
    }, [id]) //array de dependencia 

    return(
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>
    )
}

export default Post