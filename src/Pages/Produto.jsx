import { Header } from "../Components/Header"
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

export function Produto() {
    return(
        <div className="bg-background dark:bg-background-header bg-cover min-h-screen">
            <Header />
            <div className="flex">
                <img src={setaesquerda} alt="seta esquerda" className="block dark:hidden"/>
                <img src={setadireita} alt="seta direita" className="block dark:hidden"/>
                <img src={setaEsquerdaEscuro} alt="seta esquerda escura" className="hidden dark:block"/>
                <img src={setaDireitaEscuro} alt="seta direita escura" className="hidden dark:block"/>
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
    )
}