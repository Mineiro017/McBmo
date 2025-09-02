import { Header } from "../Components/Header"
import { HeaderMobile } from "../Components/HeaderMobile"
import mcbmotext from "../assets/mcbmotext.png"
import game from "../assets/game.png"

export function Jogo() {
    return(
        <div className="bg-cover min-h-screen bg-green-game font-inter">
            <div className="lg:block hidden">
                <Header />
            </div>
            <div className="flex lg:flex-row flex-col justify-center items-center lg:pt-30 gap-10 lg:pb-0 pb-30">
                <img className="lg:block hidden h-100 pr-10" src={mcbmotext} alt="mcbmo" />
                <img className="h-150" src={game} alt="gameboy" />
                <div className="flex flex-col lg:gap-70 gap-5 items-center">
                    <p className="text-background text-xl">"Ela dorme... para <br />despertar de dentro."</p>
                    <button className="bg-green-button w-40 h-15 text-xl cursor-pointer text-background-header rounded-lg">Jogue agora</button>
                </div>
            </div>
            <HeaderMobile />
        </div>
    )
}