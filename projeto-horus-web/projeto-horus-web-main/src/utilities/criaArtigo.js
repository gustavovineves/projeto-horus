import {Api} from "./axiosConfig.js";

export async function criaArtigo(data){
    console.log(data)
    const response = await Api.post(`/artigos/criaArtigo`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    if(response.status !== 201){
        throw new Error('Erro ao criar o artigo')
    }

    return true
}