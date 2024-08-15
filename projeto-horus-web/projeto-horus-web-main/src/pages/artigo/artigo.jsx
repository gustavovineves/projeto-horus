import React from "react";
import './artigo.css'
import {useParams} from "react-router-dom";
import ContentHeader from "../../components/contentHeader.jsx";
import {procurarPeloID} from "../../utilities/procurarPeloID.js";


function Artigo() {
    const [artigo, setArtigo] = React.useState(null)
    const {category, id} = useParams()
    const artigoContainer = React.useRef(null)


    React.useEffect(()=>{
        procurarPeloID(id, category).then((artigo)=>{
            setArtigo(artigo[0].data)
        })
    },[])

    React.useEffect(()=>{
        if(artigo){
            if(artigoContainer)
                artigoContainer.current.innerHTML = artigo.texto
        }
    },[artigo])



    if(artigo){
        return (
            <main id={"main-materia"}>
                <ContentHeader data={artigo}/>

                <article id='container_materia'>
                    <section ref={artigoContainer} id='container_content'>

                    {/*<picture className='container_imgArtigo'>*/}
                    {/*    <img src={artigo.imagem[0]} alt=""/>*/}
                    {/*</picture>*/}
                    </section>
                </article>
            </main>
        );
    }else{
        // fazer uma animacão de carregamento bonitinha
        return null
    }
}

export default Artigo;