import { Header } from "../Components/Header"
import { HeaderMobile } from "../Components/HeaderMobile"
import filamento from "../assets/filamento.png"
import display from "../assets/display.png"
import servo from "../assets/servo.png"
import modulo from "../assets/modulo.png"
import microfone from "../assets/microfone.png"
import esp32 from "../assets/esp32.png"
import projeto from "../assets/projeto.png"
import setaesquerda from "../assets/setaesquerda.png"
import setadireita from "../assets/setadireita.png"
import setaEsquerdaEscuro from "../assets/setaEsquerdaEscuro.png"
import setaDireitaEscuro from "../assets/setaDireitaEscuro.png"
import React, { useState } from "react";

const produtos = [
    {
      nome: "Filamento PLA Azul Claro",
      descricao: "1,75mm",
      preco: "R$87",
      imagem: filamento,
      corNome: "text-filamento",
      corDescricao: "text-filamento2",
    },
    {
      nome: "Display Lcd Tft Touchscreen",
      descricao: "3.5 320 x 480",
      preco: "R$194",
      imagem: display,
      corNome: "text-display",
      corDescricao: "text-display2",
    },
    {
      nome: "Micro Servo Motor (4 unid.)",
      descricao: "9g Sg90",
      preco: "R$52",
      imagem: servo,
      corNome: "text-servo",
      corNomeEscuro: "dark:text-servo3",
      corDescricaoEscuro: "dark:text-servo4",
      corDescricao: "text-servo2"
    },
    {
      nome: "Módulo Mp3 Dfplayer",
      descricao: "Mini para arduino",
      preco: "R$26",
      imagem: modulo,
      corNome: "text-modulo",
      corDescricao: "text-modulo2",
      corDescricaoEscuro: "dark:text-background",
    },
    {
      nome: "Microfone Omnidirecional",
      descricao: "Inmp441 precision l2c",
      preco: "R$33",
      imagem: microfone,
      corNome: "text-microfone",
      corNomeEscuro: "dark:text-background",
      corDescricao: "text-microfone2"
    },
    {
      nome: "Esp32",
      descricao: "wifi bluetooth",
      preco: "R$46",
      imagem: esp32,
      corNome: "text-microfone",
      corNomeEscuro: "dark:text-background",
      corDescricao: "text-esp322"
    },
    {
      nome: "Projeto pronto",
      descricao: "McBmo",
      preco: "R$438",
      imagem: projeto,
      corNome: "text-filamento",
      corDescricao: "text-servo"
    }
  ];

export function Produto() {
    const [indexAtivo, setIndexAtivo] = useState(0);
    const prevProduto = () => {
        setIndexAtivo((prev) => (prev === 0 ? produtos.length - 1 : prev - 1));
    };
    const nextProduto = () => {
        setIndexAtivo((prev) => (prev === produtos.length - 1 ? 0 : prev + 1));
    };
    const produto = produtos[indexAtivo];

    return(
        <div className="bg-background dark:bg-background-header bg-cover min-h-screen">
            <Header />
            <div className="flex lg:flex-row flex-col justify-center items-center gap-10 pt-30 font-inter px-10">

                <div className="lg:flex hidden flex-col items-end gap-20">
                    <div className="w-120">
                        <h2 className={`text-4xl font-bold ${produto.corNome} ${produto.corNomeEscuro}`}>
                            {produto.nome}
                        </h2>
                        <h2 className={`text-xl font-bold ${produto.corDescricao} ${produto.corDescricaoEscuro}`}>
                            {produto.descricao}
                        </h2>
                    </div>
                    <span className="text-amarelo bg-dark-green dark:bg-filamento2 dark:text-servo text-xl px-3 py-1">
                        {produto.preco}
                    </span>
                </div>

                <div className="flex justify-center items-center lg:px-0 px-10">
                    <img onClick={prevProduto} src={setaesquerda} alt="seta esquerda" className="block dark:hidden"/>
                    <img onClick={prevProduto} src={setaEsquerdaEscuro} alt="seta esquerda escura" className="hidden dark:block"/>

                    <img src={produto.imagem} alt={produto.nome} className="lg:w-110 w-70 h-60 lg:h-110" />

                    <img onClick={nextProduto} src={setadireita} alt="seta direita" className="block dark:hidden"/>
                    <img onClick={nextProduto} src={setaDireitaEscuro} alt="seta direita escura" className="hidden dark:block"/>
                </div>

                <div className="lg:hidden flex items-start flex-col gap-5 pb-30">
                    <div className="">
                        <h2 className={`text-2xl font-bold ${produto.corNome} ${produto.corNomeEscuro}`}>
                            {produto.nome}
                        </h2>
                        <h2 className={`text-xl font-bold ${produto.corDescricao} ${produto.corDescricaoEscuro}`}>
                            {produto.descricao}
                        </h2>
                    </div>
                    <span className="text-amarelo bg-dark-green dark:bg-filamento2 dark:text-servo text-xl px-3 py-1">
                        {produto.preco}
                    </span>
                </div>
                
                {/* só pra garantir deixa ai a vergonha da burrice */}
                <div className="hidden">
                    <div>
                        <img src={filamento} alt="filamento" />
                        <p className="text-filamento">Filamento PLA Azul Claro</p>
                        <p className="text-filamento2">1,75mm</p>
                        <p className="text-amarelo bg-dark-green dark:bg-filamento2 dark:text-servo">R$87</p>
                    </div>
                    <div>
                        <img src={display} alt="display" />
                        <p className="text-display">Display Lcd Tft Touchscreen</p>
                        <p className="text-display2">3.5 320 x 480</p>
                        <p className="text-amarelo bg-dark-green dark:bg-filamento2 dark:text-servo">R$194</p>
                    </div>
                    <div>
                        <img src={servo} alt="servo" />
                        <p className="text-servo dark:text-servo3">Micro Servo Motor (4 unid.)</p>
                        <p className="text-servo2 dark:text-servo4">9g Sg90</p>
                        <p className="text-amarelo bg-dark-green dark:bg-filamento2 dark:text-servo">R$52</p>
                    </div>
                    <div>
                        <img src={modulo} alt="modulo" />
                        <p className="text-modulo">Módulo Mp3 Dfplayer</p>
                        <p className="text-modulo2 dark:text-background">Mini para arduino</p>
                        <p className="text-amarelo bg-dark-green dark:bg-filamento2 dark:text-servo">R$26</p>
                    </div>
                    <div>
                        <img src={microfone} alt="microfone" />
                        <p className="text-microfone dark:text-background">Microfone Omnidirecional</p>
                        <p className="text-microfone2">Inmp441 precision l2c</p>
                        <p className="text-amarelo bg-dark-green dark:bg-filamento2 dark:text-servo">R$33</p>
                    </div>
                    <div>
                        <img src={esp32} alt="esp32" />
                        <p className="text-microfone dark:text-background">Esp32</p>
                        <p className="text-esp322">wifi bluetooth</p>
                        <p className="text-amarelo bg-dark-green dark:bg-filamento2 dark:text-servo">R$46</p>
                    </div>
                    <div>
                        <img src={projeto} alt="projeto" />
                        <p className="text-filamento">Projeto pronto</p>
                        <p className="text-servo">McBmo</p>
                        <p className="text-amarelo bg-dark-green dark:bg-filamento2 dark:text-servo">R$438</p>
                    </div>
                </div>
            </div>
            <HeaderMobile />
        </div>
    )
}