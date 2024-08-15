import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import './duvidas.css';
import {CaretDown} from "phosphor-react";


function DuvidasSection() {

    return (
        <>
            <article>
                <section className="container_duvidasFrequentes">
                    <div className="content">

                        <h2>DÚVIDAS FREQUENTES</h2>

                    </div>
                </section>
            </article>

            <DropdownDuvidas/>
        </>

    );
}


const DropdownDuvidas = () => (

    <div className= "containerDropdownRoot">
    <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger className={'trigger'}>Como posso proteger minhas senhas? <CaretDown size={32} /> </AccordionTrigger>
            <AccordionContent> Use senhas complexas que incluam letras maiúsculas, minúsculas, números e caracteres especiais. Evite palavras óbvias, como <b>senha</b> ou <b>123456</b>. Senhas longas são mais seguras.</AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger className={'trigger'}>O que é uma autenticação de 2 fatores? <CaretDown size={32} /></AccordionTrigger>
            <AccordionContent>
                A autenticação de dois fatores (2FA) é essencial para fortalecer a segurança online. Ela adiciona uma camada extra de proteção, exigindo não apenas uma senha, mas também um segundo método de verificação, como um código enviado ao seu celular.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger className={'trigger'}>O que é um vírus de computador e como posso me proteger? <CaretDown size={32} /></AccordionTrigger>
            <Accordion.Content className="AccordionContent">
                <div className="AccordionContentText">
                    Um vírus é um programa malicioso projetado para infectar, danificar ou controlar seu computador sem seu consentimento. Para se proteger, mantenha seu software e antivírus atualizados, evite downloads suspeitos e não abra anexos de e-mail de fontes desconhecidas.
                </div>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
    </div>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <div className='containerDropdownTrigger'>
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={classNames('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
    </div>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));

export default DuvidasSection;
