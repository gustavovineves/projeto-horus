import '../postsSection.css'
import './userSection.css'

import calltoaction from '../../../../../assets/fiquepordentro.svg'

import CardArtigo from "../../../../../components/cardArtigo/cardArtigo.jsx";
import {CaretDoubleLeft, CaretDoubleRight} from "phosphor-react";
import React from "react";
import Button from "../../../../../components/Button/Button.jsx";

// biblioteca do slider
import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react.js";
import {procuraUltimosArtigos} from "../../../../../utilities/procuraUltimosArtigos.js";
import {Link} from "react-router-dom";


function UserSection() {
    const [slideConfig, setSlideConfig] = React.useState(()=>{
        if(window.innerWidth < 780){
            return {
                slideAmount: 1,
                slideSpacing: 1.5
            }
        }

        return {
            slideAmount: 2,
            slideSpacing: 15
        }
    })
    const [ultimosArtigos, setUltimosArtigos] = React.useState([])
    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: slideConfig.slideAmount,
            spacing: slideConfig.slideSpacing
        },
    })

    addEventListener('resize', (e)=>{
        const windowWidth = e.target.innerWidth

        if(windowWidth < 780){
            setSlideConfig({
                slideAmount: 1,
                slideSpacing: 0
            })
        }
        if(windowWidth > 780 && slideConfig.slideAmount === 1){
            setSlideConfig({
                slideAmount: 2,
                slideSpacing: 15
            })
        }
    })

    React.useEffect(()=>{
        procuraUltimosArtigos('users').then((data)=>{
            if(data.length > 0){
                setUltimosArtigos(data)
            }
        })
    }, [])

    return (
        <article className={'postSection'} id={'container_user'}>
            <section className={'content'}>
                <div className={'containerCarrousel'}>
                    {ultimosArtigos.length > 0 && <div ref={sliderRef} className="keen-slider carrousel" >
                        {ultimosArtigos.map((artigo)=>{
                            return <CardArtigo key={artigo.id} artigo={artigo}/>
                        }) }
                    </div>
                    }

                    <div className={'carrouselButtons'}>
                        <CaretDoubleLeft size={32} onClick={()=> instanceRef.current?.prev()} />
                        <CaretDoubleRight size={32} onClick={()=> instanceRef.current?.next()} />
                    </div>
                </div>

                <div className={'containerName'} id={'container_fiquePorDentro'}>
                    <picture id={'callToAction_pic'}>
                        <img src={calltoaction} alt=""/>
                    </picture>
                    <Link to={'/listagem/users'}>Saiba mais</Link>
                </div>
            </section>
        </article>
    );
}

export default UserSection;