import { Link } from "react-router-dom"
import home from "../assets/home.png"
import guia from "../assets/guia.png"
import produto from "../assets/produto.png"
import sobrenos from "../assets/sobrenos.png"
import jogo from "../assets/jogo.png"

export function HeaderMobile() {
    return(
        <div className="lg:hidden fixed bottom-0 left-0 w-full px-10 py-5 items-center flex gap-10 justify-between bg-background-header">
                <Link to={"/"}>
                    <img src={home} alt="" />
                </Link>
                <Link to={"/Guia"}>
                    <img src={guia} alt="" />
                </Link>
                <Link to={"/Produto"}>
                    <img src={produto} alt="" />
                </Link>
                <Link to={"/SobreNos"}>
                    <img src={sobrenos} alt="" />
                </Link>
                <Link to={"/Jogo"}>
                    <img src={jogo} alt="" />
                </Link>
        </div>
    )
}