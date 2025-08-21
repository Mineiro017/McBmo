import { Header } from "../Components/Header"
import maria from "../assets/maria.png"
import igor from "../assets/igor.png"
import julia from "../assets/julia.png"
import pedro from "../assets/pedro.png"
import ana from "../assets/ana.png"

export function SobreNos() {
    return(
        <div>
            <Header />
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
        </div>
    )
}