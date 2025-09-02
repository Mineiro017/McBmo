import { Header } from "../Components/Header"
import { HeaderMobile } from "../Components/HeaderMobile"
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
            <div className="flex flex-col lg:pt-40 pt-20">
                <div className="flex flex-col lg:gap-30 gap-10">
                    <div className="lg:flex hidden gap-10 justify-center">
                        {images.map((src, index) => (
                            <div key={index} className="overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 ease-in-out">
                            <img src={src} alt={`imagem-${index}`} className="object-cover rounded-xl h-120 w-30 hover:w-100 transition-all duration-300 ease-in-out hover:border-2 hover:border-yellow-500"/>
                            </div>
                        ))}
                    </div>

                    <div className="lg:hidden flex items-center flex-col gap-5 p-10">
                        <h2 className="lg:text-5xl text-4xl pb-10 font-inter text-background-header dark:text-background">SOBRE NÓS</h2>
                        <img src={maria} alt="" className="w-50" />
                        <img src={igor} alt="" className="w-50" />
                        <img src={julia} alt="" className="w-50" />
                        <img src={pedro} alt="" className="w-50" />
                        <img src={ana} alt="" className="w-50" />
                    </div>

                    <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center lg:gap-30">            
                        <div className="lg:flex hidden justify-center bg-gray-input px-10 py-15 w-fit rounded-sm">
                            <div className="bg-background flex flex-col  w-120 gap-5 p-10 rounded-sm">
                                <textarea className="border bg-green-input w-100 pl-2 text-background-header rounded-sm" placeholder="Nome"></textarea>
                                <textarea className="border bg-green-input w-100 pl-2 text-background-header rounded-sm" placeholder="Email"></textarea>
                                <textarea className="border bg-green-input w-100 pl-2 text-background-header rounded-sm h-50" placeholder="Mensagem"></textarea>
                                <button className="bg-background-header w-40 p-2 text-lg cursor-pointer text-background rounded-sm">Enviar mensagem</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center lg:gap-20 gap-5">
                            <h2 className="lg:text-5xl text-3xl text-background-header dark:text-background">ENTRE EM CONTATO</h2>
                            <div className="flex lg:flex-row flex-col lg:gap-10 gap-10 lg:p-0 p-10">
                                <div className="flex flex-col justify-center items-center gap-10">
                                    <img className="w-10 block dark:hidden" src={telefone} alt="telefone" />
                                    <img className="w-10 hidden dark:block" src={telefoneEscuro} alt="telefone escuro" />
                                    <p className="text-background-header dark:text-green-contato">(11) 97076-5240</p>
                                </div>
                                <img className="lg:block hidden dark:hidden" src={linha} alt="" />
                                <img className="hidden lg:dark:block" src={linhaEscura} alt="" />
                                <div className="flex flex-col justify-center items-center gap-10">
                                    <img className="w-10 block dark:hidden" src={email} alt="email" />
                                    <img className="w-10 hidden dark:block" src={emailEscuro} alt="email escuro" />
                                    <p className="text-background-header dark:text-green-contato">mc.bmo@eaportal.org</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:hidden flex justify-center bg-gray-input px-5 py-10 w-fit rounded-sm">
                            <div className="bg-background flex items-center flex-col w-60 gap-5 p-10 rounded-sm">
                                <textarea className="border bg-green-input w-50 pl-2 text-background-header rounded-sm" placeholder="Nome"></textarea>
                                <textarea className="border bg-green-input w-50 pl-2 text-background-header rounded-sm" placeholder="Email"></textarea>
                                <textarea className="border bg-green-input w-50 pl-2 text-background-header rounded-sm h-40" placeholder="Mensagem"></textarea>
                                <button className="bg-background-header w-40 p-2 text-lg cursor-pointer text-background rounded-sm">Enviar mensagem</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-end">
                    <img className="w-200" src={decoracao} alt="" />
                </div>
            </div>
            <HeaderMobile />
        </div>
    )
}