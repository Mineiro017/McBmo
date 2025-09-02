import { Header } from "../Components/Header"
import { HeaderMobile } from "../Components/HeaderMobile"
import mcbmotext from "../assets/mcbmotext.png"
import game from "../assets/game.png"

export function Jogo() {
    return(
        <div className="bg-cover min-h-screen bg-green-game font-inter">
            <Header />
            <div className="flex justify-center items-center gap-10">
                <img className="h-100 pr-10" src={mcbmotext} alt="mcbmo" />
                <img className="h-150" src={game} alt="gameboy" />
                <div className="flex flex-col gap-70 items-center">
                    <p className="text-background text-xl">"Ela dorme... para <br />despertar de dentro."</p>
                    <button className="bg-green-button w-40 h-15 text-xl cursor-pointer text-background-header rounded-lg">Jogue agora</button>
                </div>
            </div>
            <HeaderMobile />
        </div>
    )
}