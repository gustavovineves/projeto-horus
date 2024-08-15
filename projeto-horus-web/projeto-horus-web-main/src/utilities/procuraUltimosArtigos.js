import {Api} from "./axiosConfig.js";

export async function procuraUltimosArtigos(categoria){
    const response = await Api.get(`/artigos/${categoria}/ultimos`)

    if(response.status !== 200){
        throw new Error('Erro ao realizar o fetch.')
    }


    return response.data
}