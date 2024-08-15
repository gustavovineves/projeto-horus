
import { collection, getDocs, doc, query, where } from "firebase/firestore";
import {getDownloadURL} from 'firebase/storage'
import { ref } from "firebase/storage";
import {date} from "zod";
import {db, storage} from "../firebaseConfig.js";


async function procurarPeloID( artigoID, tagColecao){

    const q = query(collection(db, tagColecao),  where ("id", "==", artigoID));

    const querySnapshot = await getDocs(q);
    //Criar objeto para retorno

    let artigo = {
    texto: '',
    caminhoImagemCapa: '',
    caminhoVideo: '',
    categoria: '',
    dataCriacao: '',
    id: '',
    titulo: '',
    resumo: ""
    }

    //Preencher o objeto com os dados do documento
    querySnapshot.forEach((doc) => {
        artigo.texto = doc.data()['texto'];
        artigo.caminhoImagemCapa = doc.data()['caminhoImagemCapa'];
        artigo.caminhoVideo = doc.data()['caminhoVideo'];
        artigo.categoria = doc.data()['categoria'];
        artigo.dataCriacao = doc.data()['dataCriacao']
        artigo.titulo = doc.data()['titulo'];
        artigo.resumo = doc.data()['resumo'];
    })

    // await getDownloadURL(ref(storage, doc.data()['img']))
    // .then((url) => {artigo.capa = url});
    //
    // await getDownloadURL(ref(storage, doc.data()['bgd_img']))
    // .then((url) => {artigo.imagem = url});

    if (artigo.titulo != "" || artigo.texto != "") {
        // return {
        //     titulo: artigo.titulo,
        //     categoria: artigo.categoria,
        //     texto: artigo.texto,
        //     capa: artigo.capa,
        //     imagem: artigo.imagem,
        //     autor: artigo.autor,
        //     dataCriacao: artigo.date
        // }

        return artigo
    } else {
        return false
    }
    // o fetch vai ter que retornar um objeto desta forma:
}

export default procurarPeloID