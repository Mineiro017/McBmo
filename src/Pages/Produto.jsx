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

export function Produto() {
    return(
        <div>
            <Header />
            <div className="flex">
                <img src={setaesquerda} alt="seta esquerda" />
                <img src={setadireita} alt="seta direita" />
                <div>
                    <img src={filamento} alt="filamento" />
                    <p className="text-filamento">Filamento PLA Azul Claro</p>
                    <p className="text-filamento2">1,75mm</p>
                    <p className="text-amarelo bg-dark-green">R$87</p>
                </div>
                <div>
                    <img src={display} alt="display" />
                    <p className="text-display">Display Lcd Tft Touchscreen</p>
                    <p className="text-display2">3.5 320 x 480</p>
                    <p className="text-amarelo bg-dark-green">R$194</p>
                </div>
                <div>
                    <img src={servo} alt="servo" />
                    <p className="text-servo">Micro Servo Motor (4 unid.)</p>
                    <p className="text-servo2">9g Sg90</p>
                    <p className="text-amarelo bg-dark-green">R$52</p>
                </div>
                <div>
                    <img src={modulo} alt="modulo" />
                    <p className="text-modulo">Módulo Mp3 Dfplayer</p>
                    <p className="text-modulo2">Mini para arduino</p>
                    <p className="text-amarelo bg-dark-green">R$26</p>
                </div>
                <div>
                    <img src={microfone} alt="microfone" />
                    <p className="text-microfone">Microfone Omnidirecional</p>
                    <p className="text-microfone2">Inmp441 precision l2c</p>
                    <p className="text-amarelo bg-dark-green">R$33</p>
                </div>
                <div>
                    <img src={esp32} alt="esp32" />
                    <p className="text-microfone">Esp32</p>
                    <p className="text-esp322">wifi bluetooth</p>
                    <p className="text-amarelo bg-dark-green">R$46</p>
                </div>
                <div>
                    <img src={projeto} alt="projeto" />
                    <p className="text-filamento">Projeto pronto</p>
                    <p className="text-servo">McBmo</p>
                    <p className="text-amarelo bg-dark-green">R$438</p>
                </div>
            </div>
        </div>
    )
}