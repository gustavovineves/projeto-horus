import {Api} from "./axiosConfig.js";

export async function procurarPeloID(id, categoria){
    const response = await Api.get(`/artigos/${categoria}/${id}`)

    if(response.status !== 200){
        throw new Error('Erro no fetch do arquivo')
    }

    return response.data
}