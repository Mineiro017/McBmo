import bmo from "../assets/bmo.png"
import { Header } from "../Components/Header"
import { HeaderMobile } from "../Components/HeaderMobile"

export function Home() {
    return(
        <div className="bg-background dark:bg-background-header bg-cover min-h-screen">
            <Header />
            <div className="flex items-center justify-center gap-20 pt-20 px-20">
                <div className="flex flex-col gap-15 font-inter">
                    <h1 className="text-black dark:text-background font-fredoka text-8xl font-bold">Cada mente <br />é um universo</h1>
                    <p className="font-bold text-gray-home">Transforme a terapia, com um simples toque, criamos mais conexão <br />e cuidado emocional.</p>
                    <div>
                        <button className="bg-filamento2 w-50 h-15 text-xl cursor-pointer text-background px-5 py-3 rounded-4xl">Explore agora</button>
                    </div>
                </div>
                <img src={bmo} alt="bmo ilustração" className="pl-10 w-130" />
            </div>

            <HeaderMobile />
        </div>
    )
}