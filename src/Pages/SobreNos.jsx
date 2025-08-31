import { Header } from "../Components/Header"
import maria from "../assets/maria.png"
import igor from "../assets/igor.png"
import julia from "../assets/julia.png"
import pedro from "../assets/pedro.png"
import ana from "../assets/ana.png"
import telefone from "../assets/telefone.png"
import email from "../assets/email.png"
import linha from "../assets/linhaContato.png"
import linhaEscura from "../assets/linhaContatoEscura.png"
import decoracao from "../assets/decoracaoContato.png"
import telefoneEscuro from "../assets/telefoneEscuro.png"
import emailEscuro from "../assets/emailEscuro.png"

const images = [
    maria,
    igor,
    julia,
    pedro,
    ana,
  ];

export function SobreNos() {
    return(
        <div className="bg-background dark:bg-background-header bg-cover min-h-screen">
            <Header />
            <div className="flex flex-col">
                <div className="flex flex-col gap-30">
                    <div className="flex pt-20 gap-10 justify-center">
                        {images.map((src, index) => (
                            <div key={index} className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ease-in-out">
                            <img src={src} alt={`imagem-${index}`} className="object-cover rounded-xl h-120 w-30 hover:w-100 transition-all duration-300 ease-in-out hover:border-2 hover:border-yellow-500"/>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-30">            
                        <div className="flex justify-center bg-gray-input px-10 py-15 w-fit rounded-sm">
                            <div className="bg-background flex flex-col  w-120 gap-5 p-10 rounded-sm">
                                <textarea className="border bg-green-input w-100 pl-2 text-background-header rounded-sm" placeholder="Nome"></textarea>
                                <textarea className="border bg-green-input w-100 pl-2 text-background-header rounded-sm" placeholder="Email"></textarea>
                                <textarea className="border bg-green-input w-100 pl-2 text-background-header rounded-sm h-50" placeholder="Mensagem"></textarea>
                                <button className="bg-background-header w-40 p-2 text-lg cursor-pointer text-background rounded-sm">Enviar mensagem</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-20">
                            <h2 className="text-5xl text-background-header dark:text-background">ENTRE EM CONTATO</h2>
                            <div className="flex gap-10">
                                <div className="flex flex-col justify-center items-center gap-10">
                                    <img className="w-10 block dark:hidden" src={telefone} alt="telefone" />
                                    <img className="w-10 hidden dark:block" src={telefoneEscuro} alt="telefone escuro" />
                                    <p className="text-background-header dark:text-green-contato">(11) 97076-5240</p>
                                </div>
                                <img className="block dark:hidden" src={linha} alt="" />
                                <img className="hidden dark:block" src={linhaEscura} alt="" />
                                <div className="flex flex-col justify-center items-center gap-10">
                                    <img className="w-10 block dark:hidden" src={email} alt="email" />
                                    <img className="w-10 hidden dark:block" src={emailEscuro} alt="email escuro" />
                                    <p className="text-background-header dark:text-green-contato">mc.bmo@eaportal.org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-end">
                    <img className="w-200" src={decoracao} alt="" />
                </div>
            </div>
        </div>
    )
}