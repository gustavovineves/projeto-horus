import './criaArtigo.css'
import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod'
import {criaArtigo} from "../../utilities/criaArtigo.js";
import React from "react";

const formSchema = z.object({
    titulo: z.string()
        .min(3,
            {message:'Digite mais de 3 caracteres.'})
        .max(30,
            {message: 'Título aceita no máximo 30 caracteres.'}),

    categoria: z.enum(['developers', 'users', 'empresa']),

    texto: z.string()
        .min(10,
            {message: 'O Artigo deve conter pelo menos 10 caracteres.'}),

    capa: z.any().refine((file)=> {
        return file.length > 0;
    }).transform((file)=> file[0]),
    resumo: z.string().min(20).max(50)
})


function CriaArtigo() {
    const {handleSubmit, register, reset,  formState: {errors}} = useForm({
        resolver: zodResolver(formSchema)
    })
    const [artigoCriado, setArtigoCriado] = React.useState(false)

    if(artigoCriado)
        setTimeout(()=>{
            setArtigoCriado(false)
        }, 2000)

    function submitData(data){

        criaArtigo(data).then(response => {
            if(response){
                console.log('criado')
                reset()
                setArtigoCriado(true)
                window.scrollTo(0, 0)
            }
        }).catch((e)=>{
            console.log(e)
        })
    }

    return (
        <main id={'criaArtigoContainer'}>

            <section>

            <h1>Cadastramento de Artigo</h1>
            {artigoCriado && <h2>Cadastrado com sucesso!</h2>}

            <form encType="multipart/form-data" onSubmit={handleSubmit(submitData)}>
                <div>
                    <label htmlFor="" >Nome do Artigo</label>
                    <input placeholder={'Como defender seu Whatsapp'} {...register('titulo')} type="text"/>
                    {errors.titulo && <p>{errors.titulo.message}</p>}
                </div>

                <div>
                    <label htmlFor="">Categoria</label>
                    <select className={errors.categoria && 'error'} {...register('categoria')} >
                        <option value="">Selecione a categoria</option>
                        <option value="developers">Developer</option>
                        <option value="users">Usuário</option>
                        <option value="empresa">Empresa</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">Selecione a Imagem Capa</label>
                    <input multiple={false} className={errors.capa && 'error'} {...register('capa')} type="file"/>
                </div>

                <div>
                    <label htmlFor="">Selecione o video Capa  </label>
                    <input type="file"/>
                    <span>opcional</span>
                </div>

                <div>
                    <label htmlFor="" >Resumo</label>
                    <input placeholder={'Aqui vai uma breve introdução'} {...register('resumo')} type="text"/>
                    {errors.resumo && <p>{errors.resumo.message}</p>}
                </div>

                <div>
                    <label htmlFor="">Artigo</label>
                    {errors.texto && <p>{errors.texto.message}</p>}
                    <textarea {...register('texto')} placeholder={'O texto vai aqui..'}/>
                </div>

                <button id={'formButton'}>Enviar</button>
            </form>
            </section>
        </main>
    );
}

export default CriaArtigo;