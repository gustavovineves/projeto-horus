import React from "react";
import ImgControle from "../../../../assets/Header.png"
import "./controleSection.css"
import Button from "../../../../components/Button/Button";
import {Link} from "react-router-dom";
function ControleSection(){

    return(
        <header>
            <section className="container_noControle">
                <div className="content">

                    <h1>VOCÊ <span>NO</span></h1>
                    <h1>CONTROLE</h1>
                    <p>
                        Diversas dicas essenciais para manter sua segurança e seus dados protegidos online e offline.
                    </p>
                    <Link to={'/listagem/users'}>Saiba mais</Link>
                </div>
                <div className="image">
                    <img alt='' src={ImgControle}/>
                </div>
            </section>
        </header>
    );
}

export default ControleSection;