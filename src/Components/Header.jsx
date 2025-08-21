import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export function Header() {
    return(
        <header className="px-10 items-center flex justify-between bg-background-header text-background ">
            <div className="flex items-center">
                <Link to={"/"}><img src={logo} alt="logo mcbmo" /></Link>
                <Link to={"/"}><p className="font-press text-xl">McBmo</p></Link>
            </div>

            <div className="flex font-inter gap-10 text-xl ">
                <Link to={"/"}>Início</Link>
                <Link to={"/Guia"}>Guia</Link>
                <Link to={"/Produto"}>Produto</Link>
                <Link to={"/Jogo"}>Jogo</Link>
                <Link to={"/Referencias"}>Referências</Link>
                <Link to={"/SobreNos"}>Sobre nós</Link>
            </div>
        </header>
    )
}