import { Header } from "../Components/Header"
import { HeaderMobile } from "../Components/HeaderMobile"
import quadrado from "../assets/quadrado.png"

export function Referencias() {
    return(
        <div className="bg-background dark:bg-background-header bg-cover min-h-screen">
            <Header />
            <div className="flex flex-col pt-30 items-center">
                <div className="flex flex-col gap-5 lg:pb-5 pb-20 w-screen">
                    <div className="xl:flex hidden gap-30 pb-5 items-center justify-center">
                        <img src={quadrado} alt="link aqui" />
                        <img src={quadrado} alt="link aqui" />
                        <img src={quadrado} alt="link aqui" />
                    </div>
                    
                    <p className="text-justify text-dark-green dark:text-background lg:px-40 px-10">A proposta do nosso TCC surgiu da observação de um problema real e urgente: a dificuldade de comunicação entre psicólogos e pacientes com transtornos mentais ou deficiências cognitivas, como autismo, fobia social, depressão, ansiedade e dificuldades de expressão verbal. Muitos desses pacientes não conseguem relatar o que sentem de forma clara, o que compromete o diagnóstico, o acompanhamento e o sucesso do tratamento.</p>
                    <p className="text-justify text-dark-green dark:text-background lg:px-40 px-10">Essa realidade nos motivou a pensar em uma solução que pudesse servir como ponte entre o profissional da saúde e o paciente. Conversas com psicólogos e estudos como o artigo “Eventos Adversos por Falha de Comunicação em Unidades de Terapia Intensiva” reforçaram a importância de um acompanhamento mais constante, sensível e acessível, que pudesse ir além das sessões clínicas.</p>
                    <p className="text-justify text-dark-green dark:text-background lg:px-40 px-10">Inspirados também por experiências pessoais e sociais com pessoas próximas que vivem essas dificuldades, decidimos criar um Auxiliar de Cuidados com a Mente: um mini robô interativo que atua como suporte complementar ao trabalho psicológico. Ele oferece acolhimento, monitora emoções, ajuda na rotina de cuidados e contribui para uma comunicação mais clara entre paciente e terapeuta.</p>
                    <p className="text-justify text-dark-green dark:text-background lg:px-40 px-10">
                    Nosso objetivo é unir tecnologia e empatia para transformar a forma como cuidamos da saúde mental — especialmente daqueles que mais precisam ser ouvidos.
                    </p>
                </div>
            </div>
            <HeaderMobile />
        </div>
    )
}