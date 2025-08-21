import { Header } from "../Components/Header"
import acesse1 from "../assets/acesse1.png"
import ativacao2 from "../assets/ativacao2.png"
import cadastro3 from "../assets/cadastro3.png"
import rotina4 from "../assets/rotina4.png"
import diario5 from "../assets/diario5.png"
import feedback6 from "../assets/feedback6.png"
import atualizacoes7 from "../assets/atualizacoes7.png"
import video from "../assets/video.png"
import bolotinha from "../assets/bolotinha.png"

export function Guia() {
    return(
        <div className="font-inter">
            <Header />
            <h1 className="flex justify-center  pt-15 text-5xl font-bold">Guia da utilização do protótipo McBmo</h1>
            <div className="flex flex-col pt-20">
                    
                <div className="flex items-center gap-5">
                    <img src={acesse1} alt="acesse" className="h-20"/>
                    <div>
                        <h2 className="text-xl font-bold">Acesse o App</h2>
                        <p className="text-gray-home">Comece acessando a plataforma MCBMO. Insira suas credenciais para explorar os recursos terapêuticos disponíveis.</p>
                    </div>
                </div>
                <img src={bolotinha} alt="caminho" className="w-2"/>
                <div>
                    <img src={ativacao2} alt="ativação" />
                    <div>
                        <h2>Ativação</h2>
                        <p>Ligue o robô e conecte-o ao aplicativo no celular ou computador por Bluetooth ou Wi-Fi.</p>
                    </div>
                </div>
                <img src={bolotinha} alt="caminho" className="w-2"/>
                <div>
                    <img src={cadastro3} alt="cadastro" />
                    <div>
                        <h2>Cadastro do usuário</h2>
                        <p>Informe os dados básicos com orientação do psicólogo ou cuidador responsável.</p>
                    </div>
                </div>
                <img src={bolotinha} alt="caminho" className="w-2"/>
                <div>
                    <img src={rotina4} alt="rotina" />
                    <div>
                        <h2>Personalização de rotina</h2>
                        <p>Defina os horários de lembretes, frases motivacionais e técnicas comportamentais adaptadas à realidade do usuário.</p>
                    </div>
                </div>
                <img src={bolotinha} alt="caminho" className="w-2"/>
                <div>
                    <img src={diario5} alt="uso diário" />
                    <div>
                        <h2>Uso diário</h2>
                        <p>O robô interage com o usuário por meio de comandos simples, respostas pré-programadas e estímulos sensoriais (voz, luz e som).</p>
                    </div>
                </div>
                <img src={bolotinha} alt="caminho" className="w-2"/>
                <div>
                    <img src={feedback6} alt="feedback" />
                    <div>
                        <h2>Feedback profissional</h2>
                        <p>Profissionais podem acompanhar os registros de humor, frequência de uso e interações realizadas com o robô.</p>
                    </div>
                </div>
                <img src={bolotinha} alt="caminho" className="w-2"/>
                <div>
                    <img src={atualizacoes7} alt="atualizações" />
                    <div>
                        <h2>Atualizações</h2>
                        <p>O sistema recebe atualizações periódicas com novos conteúdos e exercícios terapêuticos validados por especialistas.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <h2>Veja o nosso protótipo em ação</h2>
                        <p>Assista aos nossos tutoriais em vídeo para dominar as funcionalidades do protótipo MCBMO e suas práticas terapêuticas.</p>
                    </div>
                    <img src={video} alt="vídeo" />
                </div>
            </div>
        </div>
    )
}