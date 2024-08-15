import {Api} from "./axiosConfig.js";

export async function listaArtigos(categoria, ultimoArtigo){
    const response = await Api.post(`/artigos`, {
        categoria, ultimoArtigo
    })

    if(response.status !== 200){
        throw new Error('Erro no fetch dos arquivos')
    }

    return response.data
}