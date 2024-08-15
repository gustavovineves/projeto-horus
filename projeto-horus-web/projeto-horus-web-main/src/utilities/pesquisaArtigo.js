import {Api} from "./axiosConfig.js";

export async function pesquisaArtigo(categoria, titulo){
    console.log(categoria)
    console.log(titulo)
    const response = await Api.post(`/artigos/pesquisa`, {
        categoria, titulo
    })

    if(response.status !== 200){
        throw new Error('erro no fetch da pesquisa')
    }

    return response.data
}