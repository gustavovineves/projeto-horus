import React from "react";
import {Link} from "react-router-dom";

function changeNav(){
    const nav = document.querySelector('#nav')
    nav.classList.toggle('show-nav')
}


function Navbar() {

    return (
        <div id='container_navbar'>

            <div id='navbar-content'>
                <picture id='container_logoDesktop'>
                    <img src="/images/logo-navbar.png" alt=""/>
                </picture>

                <button onClick={changeNav} id='navbar_open'>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>

                <nav id='nav'>
                    <button onClick={changeNav} className='nav-item' id='navbar_close'>
                        <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                    <Link to={'/'} className='nav-item'>Home</Link>
                    {/*<Link to={'/#perguntas-frequentes'} className='nav-item'>Me Ajude!</Link>*/}
                    <Link to={'listagem/users'} className='nav-item'>Artigos</Link>
                    {/*<Link to={'/#sobre'} className='nav-item'>Sobre!</Link>*/}
                </nav>
            </div>
        </div>
    );
}

export default Navbar;