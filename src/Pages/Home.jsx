import bmo from "../assets/bmo.png"
import { Header } from "../Components/Header"
import { HeaderMobile } from "../Components/HeaderMobile"
import { Link } from "react-router-dom"

export function Home() {
    return(
        <div className="bg-background dark:bg-background-header bg-cover min-h-screen">
            <Header />
            <div className="lg:flex items-center justify-center gap-20 lg:pt-40 pt-20 lg:px-20 lg:pb-20">
                <div className="lg:pt-0 pt-5 flex justify-center items-center pl-10 bg-background-header w-screen lg:hidden">
                    <img src={bmo} alt="bmo ilustração" className="w-70" />
                </div>
                <div className="flex lg:px-0 px-10 lg:pb-0 pb-20 lg:text-start text-center flex-col lg:gap-15 lg:pt-0 pt-7 gap-5 font-inter">
                    <h1 className="text-black dark:text-background font-fredoka lg:text-8xl text-4xl font-bold">Cada mente <br />é um universo</h1>
                    <p className="font-bold text-gray-home">Transforme a terapia, com um simples toque, criamos mais conexão <br />e cuidado emocional.</p>
                    <div>
                        <Link to={"/Referencias"}>
                            <button className="bg-black-button dark:bg-filamento2 w-50 h-15 text-xl cursor-pointer text-background px-5 py-3 rounded-4xl">Explore agora</button>
                        </Link>
                    </div>
                </div>
                <img src={bmo} alt="bmo ilustração" className="lg:block hidden pl-10 w-130" />
            </div>

            <HeaderMobile />
        </div>
    )
}