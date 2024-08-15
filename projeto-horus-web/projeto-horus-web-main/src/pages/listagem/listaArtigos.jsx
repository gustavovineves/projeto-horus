// import CardArtigo from "../../components/cardArtigo/cardArtigo.jsx";
import {Link, useLocation, useParams} from "react-router-dom";
import './listaArtigos.css'
import React from "react";
import ContentHeader from "../../components/contentHeader.jsx";
import {listaArtigos} from "../../utilities/listaArtigos.js";
import CardArtigo from "../../components/cardArtigo/cardArtigo.jsx";
import {pesquisaArtigo} from "../../utilities/pesquisaArtigo.js";

function ListaArtigos() {
    const btn_changeNav = React.useRef()
    const container_filtro = React.useRef()
    const {filtro} = useParams()
    const [artigos, setArtigos] = React.useState([])
    const pesquisaInput = React.useRef()

    React.useEffect(()=>{
        listaArtigos(filtro, 0).then((data)=>{
            setArtigos(data)
        })
    }, [filtro])

    function changeNav(){
        const links = Array.from( document.querySelectorAll('.filtro-item'))
        links.forEach((link)=> link.classList.toggle('filtro-aberto'))
        btn_changeNav.current.classList.toggle('btn-rotate')
        container_filtro.current.classList.toggle('filtros-aberto')
    }

    function pesquisa(){
        if(pesquisaInput.current)
            console.log(pesquisaInput.current.value)
            pesquisaArtigo(filtro, pesquisaInput.current.value).then((artigos)=>{
                setArtigos(artigos)
            }).catch((err)=>{
                console.log(err)
            })
    }

    return (
        <main id={'container_listagemArtigos'}>

            <ContentHeader data={{caminhoImagemCapa: '/images/placeholder.jpg', titulo: 'Últimos Artigos'}}/>

            <article id={'container_wrapper'}>
                <section id={'container_filtro'}>

                    <div id={'container_pesquisa'}>
                        <i onClick={pesquisa} className="fa-solid fa-magnifying-glass"></i>
                        <input ref={pesquisaInput} id={'pesquisa'} placeholder={'Pesquise sua matéria'} type="text"/>
                    </div>

                    <div ref={container_filtro} id={'filtros'}>
                        <a id={'filtro_titulo'}>Filtro <i onClick={changeNav}
                                                          ref={btn_changeNav}
                                                          id={'btn_expandeFiltro'}
                                                          className="fa-solid fa-chevron-down"></i>
                        </a>

                        <Link className={`filtro-item ${filtro ==='users' ? 'filtro-ativo' : null }`} to={'/listagem/users'}>Usuários</Link>

                        <Link className={`filtro-item ${filtro ==='developers' ? 'filtro-ativo' : null }`} to={'/listagem/developers'} >Developers</Link>

                    </div>
                </section>
                <section id={'container_listagem'}>
                    {artigos && artigos.map(artigo=> <CardArtigo key={artigo.id} artigo={artigo}/>)}


                    <div id={'container_verMais'}>
                        <button className={'vermais'} onClick={()=> {
                            listaArtigos(filtro, 0)
                                .then((data)=>{
                                    setArtigos(data)
                                })
                        }} > Limpar filtro </button>

                        <button className={'vermais'} onClick={()=> {
                            listaArtigos(filtro, artigos.at(-1).dataCriacao.seconds)
                                .then((data)=>{
                                    setArtigos(prev => [...prev, ...data])
                                })
                        }}> Ver Mais </button>
                    </div>

                </section>

            </article>
        </main>
    );
}

export default ListaArtigos;
