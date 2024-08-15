import {db} from "../firebaseConfig.js";
import {collection, query, limit, orderBy, getDocs} from "firebase/firestore";
//
async function procuraUltimosArtigos(tagColecao){
    // limit(5) -> Define quantos artigos buscar.
    const q = query(collection(db, tagColecao), orderBy('dataCriacao', 'desc'), limit(5));
    const querySnapshot = await getDocs(q);

    const artigos = [];

    for (const doc of querySnapshot.docs) {
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

        artigo.texto = doc.data()['texto'];
        artigo.caminhoImagemCapa = doc.data()['caminhoImagemCapa'];
        artigo.caminhoVideo = doc.data()['caminhoVideo'];
        artigo.categoria = doc.data()['categoria'];
        artigo.titulo = doc.data()['titulo'];
        artigo.dataCriacao = doc.data()['dataCriacao'];
        artigo.id = doc.data()['id'];
        artigo.resumo = doc.data()['resumo'];

        // await getDownloadURL(ref(storage, doc.data()['img'])).then((url) => {artigo.capa = url});

        artigos.push(artigo);
    }

    return artigos;
}

export default procuraUltimosArtigos