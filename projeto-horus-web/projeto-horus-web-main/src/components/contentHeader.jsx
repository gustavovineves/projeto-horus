import React from 'react';

export const categorias = {
    developers: "Desenvolvedores",
    users: "Usuários"
}

function ContentHeader({data}) {

    return (
        <article id='header-artigo'>
            <picture>
                <img src={data.caminhoImagemCapa} alt=""/>
            </picture>
            <div id='header-content'>
                <article id='materia_header'>
                    <div id='h1-detalhe'>
                        <h1>{data.titulo}</h1>
                    </div>
                    <p>{data.categoria ? categorias[data.categoria] : "Fique ligado!"}</p>
                </article>
            </div>
        </article>
    );
}

export default ContentHeader;