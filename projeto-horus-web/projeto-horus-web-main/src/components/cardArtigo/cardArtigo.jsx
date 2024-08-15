import React from 'react';
import {Link} from "react-router-dom";
import './cardArtigo.css'
import {categorias} from "../contentHeader.jsx";

function CardArtigo({artigo}) {
    const [isLoaded, setIsLoaded] = React.useState(false)

    return (
        <div className={'card_artigo keen-slider__slide'}>
            <picture>
                <img className={isLoaded ? 'loaded' : ''} onLoad={()=> setIsLoaded(true)} src={artigo.caminhoImagemCapa} />
            </picture>

            <div className={'card_body'}>
                <header>
                    <h2>{artigo.titulo}</h2>
                    <h3> {categorias[artigo.categoria]}</h3>
                </header>
                <div className={'container_artigo_desc'}>
                <span className={'artigo_desc'}>
                    { artigo.resumo}
                </span>
                </div>


                <Link className={'btn_lerMais'} to={`/artigo/${artigo.categoria}/${artigo.id}`}>Ler Artigo</Link>
            </div>

        </div>
    );
}

export default CardArtigo;