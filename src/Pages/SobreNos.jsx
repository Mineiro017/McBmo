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

export function SobreNos() {
    return(
        <div className="bg-background dark:bg-background-header bg-cover min-h-screen">
            <Header />
            <div className="flex flex-col gap-30">
                <div className="flex">
                    <div>
                        <img src={maria} alt="Maria" />
                        <p className="text-green-button">Maria Clara Alves</p>
                        <p className="text-background">@mahx_013</p>
                    </div>
                    <div>
                        <img src={igor} alt="Igor" />
                        <p className="text-green-button">Igor Andrade</p>
                        <p className="text-background">@ingufck</p>
                    </div>
                    <div>
                        <img src={julia} alt="Julia" />
                        <p className="text-green-button">Julia Maciel</p>
                        <p className="text-background">@juliaz.x</p>
                    </div>
                    <div>
                        <img src={pedro} alt="Pedro" />
                        <p className="text-green-button">Pedro Moura</p>
                        <p className="text-background">@mourapms15</p>
                    </div>
                    <div>
                        <img src={ana} alt="Ana" />
                        <p className="text-green-button">Ana Julia Oliveira</p>
                        <p className="text-background">@anajulia.o12</p>
                    </div>
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
                <img className="w-300" src={decoracao} alt="" />
            </div>
        </div>
    )
}