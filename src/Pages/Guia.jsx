import { Header } from "../Components/Header"
import { HeaderMobile } from "../Components/HeaderMobile"
import acesse1 from "../assets/acesse1.png"
import ativacao2 from "../assets/ativacao2.png"
import cadastro3 from "../assets/cadastro3.png"
import rotina4 from "../assets/rotina4.png"
import diario5 from "../assets/diario5.png"
import feedback6 from "../assets/feedback6.png"
import atualizacoes7 from "../assets/atualizacoes7.png"
import video from "../assets/video.png"
import videoEscuro from "../assets/videoEscuro.png"
import bolotinha from "../assets/bolotinha.png"
import bolotinhaEscuro from "../assets/bolotinhaEscuro.png"

export function Guia() {
    return(
        <div className="font-inter bg-background dark:bg-background-header bg-cover min-h-screen">
            <Header />
            <h1 className="flex justify-center pt-15 text-5xl dark:text-green-button font-bold">Guia da utilização do protótipo McBmo</h1>
            <div className="flex flex-col pt-20">
                <div className="pl-70 pr-20">
                    <div>
                        <div className="flex items-center gap-5">
                            <img src={acesse1} alt="acesse" className="h-20"/>
                            <div>
                                <h2 className="text-xl font-bold dark:text-white">Acesse o App</h2>
                                <p className="text-gray-home dark:text-background">Comece acessando a plataforma MCBMO. Insira suas credenciais para explorar os recursos terapêuticos disponíveis.</p>
                            </div>
                        </div>
                        <div className="pl-9">
                            <img src={bolotinha} alt="caminho" className="w-2 block dark:hidden"/>
                            <img src={bolotinhaEscuro} alt="caminho" className="w-2 hidden dark:block"/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex items-center gap-5">
                            <img src={ativacao2} alt="ativação" className="h-20"/>
                            <div>
                                <h2 className="text-xl font-bold dark:text-white">Ativação</h2>
                                <p className="text-gray-home dark:text-background">Ligue o robô e conecte-o ao aplicativo no celular ou computador por Bluetooth ou Wi-Fi.</p>
                            </div>
                        </div>
                        <div className="pl-9">
                            <img src={bolotinha} alt="caminho" className="w-2 block dark:hidden"/>
                            <img src={bolotinhaEscuro} alt="caminho" className="w-2 hidden dark:block"/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex items-center gap-5">
                            <img src={cadastro3} alt="cadastro" className="h-20"/>
                            <div>
                                <h2 className="text-xl font-bold dark:text-white">Cadastro do usuário</h2>
                                <p className="text-gray-home dark:text-background">Informe os dados básicos com orientação do psicólogo ou cuidador responsável.</p>
                            </div>
                        </div>
                        <div className="pl-9">
                            <img src={bolotinha} alt="caminho" className="w-2 block dark:hidden"/>
                            <img src={bolotinhaEscuro} alt="caminho" className="w-2 hidden dark:block"/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex items-center gap-5">
                            <img src={rotina4} alt="rotina" className="h-20"/>
                            <div>
                                <h2 className="text-xl font-bold dark:text-white">Personalização de rotina</h2>
                                <p className="text-gray-home dark:text-background">Defina os horários de lembretes, frases motivacionais e técnicas comportamentais adaptadas à realidade do usuário.</p>
                            </div>
                        </div>
                        <div className="pl-9">
                            <img src={bolotinha} alt="caminho" className="w-2 block dark:hidden"/>
                            <img src={bolotinhaEscuro} alt="caminho" className="w-2 hidden dark:block"/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex items-center gap-5">
                            <img src={diario5} alt="uso diário" className="h-20"/>
                            <div>
                                <h2 className="text-xl font-bold dark:text-white">Uso diário</h2>
                                <p className="text-gray-home dark:text-background">O robô interage com o usuário por meio de comandos simples, respostas pré-programadas e estímulos sensoriais (voz, luz e som).</p>
                            </div>
                        </div>
                        <div className="pl-9">
                            <img src={bolotinha} alt="caminho" className="w-2 block dark:hidden"/>
                            <img src={bolotinhaEscuro} alt="caminho" className="w-2 hidden dark:block"/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex items-center gap-5">
                            <img src={feedback6} alt="feedback" className="h-20"/>
                            <div>
                                <h2 className="text-xl font-bold dark:text-white">Feedback profissional</h2>
                                <p className="text-gray-home dark:text-background">Profissionais podem acompanhar os registros de humor, frequência de uso e interações realizadas com o robô.</p>
                            </div>
                        </div>
                        <div className="pl-9">
                            <img src={bolotinha} alt="caminho" className="w-2 block dark:hidden"/>
                            <img src={bolotinhaEscuro} alt="caminho" className="w-2 hidden dark:block"/>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-5">
                        <img src={atualizacoes7} alt="atualizações" className="h-20"/>
                        <div>
                            <h2 className="text-xl font-bold dark:text-white">Atualizações</h2>
                            <p className="text-gray-home dark:text-background">O sistema recebe atualizações periódicas com novos conteúdos e exercícios terapêuticos validados por especialistas.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center p-20">
                    <div className="flex flex-col gap-5">
                        <h2 className="pt-20 text-2xl font-bold dark:text-green-button">Veja o nosso protótipo em ação</h2>
                        <p className="text-gray-home dark:text-background">Assista aos nossos tutoriais em vídeo para dominar as funcionalidades do protótipo MCBMO e suas práticas terapêuticas.</p>
                    </div>
                    <img className="block dark:hidden h-140" src={video} alt="vídeo" />
                    <img className="hidden dark:block" src={videoEscuro} alt="vídeo" />
                </div>
            </div>
            <HeaderMobile />
        </div>
    )
}