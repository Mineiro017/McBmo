import { Header } from "../Components/Header"
import mcbmotext from "../assets/mcbmotext.png"
import game from "../assets/game.png"

export function Jogo() {
    return(
        <div className="bg-green-game font-inter">
            <Header />
            <div className="flex">
                <img src={mcbmotext} alt="mcbmo" />
                <img src={game} alt="gameboy" />
                <div>
                    <p className="text-background">"Ela dorme... para despertar de dentro."</p>
                    <button className="text-dark-green bg-green-button">Jogue agora</button>
                </div>
            </div>
        </div>
    )
}