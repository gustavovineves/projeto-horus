
import "./sobreSection.css"
import React from "react";
function SobreSection() {
    
    return (
        <article id="container_sobre">
            <section id="content">
                    
                <div id="imagem">
                    <img src="/images/logo-sobre3.png" alt="Logo"/>
                </div>

                <div id="texto"> 
                    <h1> PROJETO HÓRUS </h1>

                    <p>Criado em 2023 tendo como orientadora a professora Camilla, o projeto
                    Hórus é um projeto voltado à disseminação de conhecimento sobre
                    cibersegurança, tanto para desenvolvedores quanto para usuários.
                    <br />
                    <br />
                    Nele as pessoas encontrarão artigos sobre diversos temas abrangendo
                    níveis de conhecimento do básico ao avançado, passando em temas de
                    importância ímpar como se proteger no meio virtual e como lidar com
                    seus dados para que eles não corram risco.
                    <br />
                    <br />
                    Possuímos uma área “Me ajuda!” focada no intuito de explicar assuntos
                    com demandas frequentes. Sinta-se à vontade para solicitar a
                    explicação de um tema pela nossa equipe de cibersegurança.
                    <br />
                    <br />
                    Além disso, temos preparados conteúdo para desenvolvedores sobre
                    infraestrutura de redes, como fazer um código mais seguro e
                    manutenível, como resguardar o usuário e muitos outros.
                    <br />{" "}
                    </p>

                </div>

            </section>
        </article>
    );
}

export default SobreSection;