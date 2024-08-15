//
//
//
// export default async function procuraArtigo(tagColecao, artigoID){
//     //Procurar na colecao o artigo com o id que a gente quer
//     const q = query(collection(db, tagColecao),  where ("id", "==", artigoID));
//
//     const querySnapshot = await getDocs(q);
//     //Criar objeto para retorno
//
//         let artigo = {
//             titulo:"",
//             categoria:"",
//             paragrafo:"",
//             capa:"",
//             imagem:""
//         }
//     //Preencher o objeto com os dados do documento
//         querySnapshot.forEach((doc) => {
//             artigo.titulo = doc.data()['title'];
//             artigo.categoria = doc.data()['tag'];
//             artigo.paragrafo = doc.data()['text'];
//         })
//
//         await getDownloadURL(ref(storage, doc.data()['img']))
//         .then((url) => {artigo.capa = url});
//
//         await getDownloadURL(ref(storage, doc.data()['bgd-img']))
//         .then((url) => {artigo.imagem = url});
//
//         if (artigo.titulo != "" || artigo.paragrafo != "") {
//             return {
//                 titulo: artigo.titulo,
//                 categoria: artigo.categoria,
//                 paragrafo: artigo.paragrafo,
//                 capa: artigo.capa,
//                 imagem: artigo.imagem
//             }
//         } else {
//             return(null)
//         }
//     // o fetch vai ter que retornar um objeto desta forma:
//
// }
//
// export async function procuraArtigos(infosArtigos){
//
//     // Recebe um array contendo N objetos, cada objeto contém a tagColecao e o ID de um artigo.
//     // Para cada objeto nesse array ele busca na base da dados o artigo equivalente.
//     // Se ele encontrar, adiciona as informações do artigo como objeto no array "dadosArtigos".
//     // Por fim, se o array não estiver vazio, ele retorna todos os artigos que encontrou com as informações fornecidas.
//     let dadosArtigos = [];
//
//     for (let i = 0; i < infosArtigos.length; i++){
//         let infos = infosArtigos[i];
//
//         //   console.log('achou!')
//         //Procurar na colecao o artigo com o id que a gente quer
//         const q = query(collection(db, infos.tagColecao),  where ("id", "==", infos.artigoID));
//
//         const querySnapshot = await getDocs(q);
//         //Criar objeto para retorno
//
//         let artigo = {
//             titulo:"",
//             categoria:"",
//             paragrafo:"",
//             capa:"",
//         }
//         //Preencher o objeto com os dados do documento
//         querySnapshot.forEach((doc) => {
//             artigo.titulo = doc.data()['title'];
//             artigo.categoria = doc.data()['tag'];
//             artigo.paragrafo = doc.data()['text'];
//         })
//
//         await getDownloadURL(ref(storage, doc.data()['img']))
//         .then((url) => {artigo.capa = url});
//
//         if (artigo.titulo != "" || artigo.paragrafo != "") {
//             dadosArtigos.push({titulo: artigo.titulo, categoria: artigo.categoria, capa: artigo.capa,})
//         }
//     }
//     if (dadosArtigos.length > 0){
//         return dadosArtigos
//     } else {
//         return null
//     }
// }
