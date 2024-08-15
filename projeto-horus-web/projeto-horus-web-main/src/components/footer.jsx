import React from "react";

function Footer() {

    return (
        <footer>
            <article id='footer-content'>
                <nav id='nav-footer'>
                    <a className='nav-item'>Home</a >
                    <a className='nav-item'>Me Ajude!</a>
                    <a className='nav-item'>Artigos</a>
                    <a className='nav-item'>Sobre!</a>
                </nav>

                <section id='container_info'>
                    <h2>Universidade <br id='br-mobile'/> Veiga de Almeida</h2>
                    <p>Projeto Hórus</p>
                </section>
            </article>
        </footer>
    );
}

export default Footer;