import logo from "../assets/logo.png"
import modoClaro from "../assets/modoClaro.png"
import modoEscuro from "../assets/modoEscuro.png"
import { Link } from "react-router-dom"
import React, { useEffect } from "react"
import { useState } from "react"

export function Header() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const tagHTML = document.documentElement
        tagHTML.classList.remove("dark")

        if(theme === "dark") {
            tagHTML.classList.add("dark")
        }
    }, [theme])

    return(
        <header className="px-10 items-center flex justify-between bg-background-header dark:bg-background dark:text-background-header text-background ">
            <div className="flex items-center">
                <Link to={"/"}><img src={logo} alt="logo mcbmo" /></Link>
                <Link to={"/"}><p className="font-press text-xl">McBmo</p></Link>
            </div>

            <div className="flex font-inter gap-10 text-lg ">
                <Link to={"/"}>Início</Link>
                <Link to={"/Guia"}>Guia</Link>
                <Link to={"/Produto"}>Produto</Link>
                <Link to={"/Jogo"}>Jogo</Link>
                <Link to={"/Referencias"}>Referências</Link>
                <Link to={"/SobreNos"}>Sobre nós</Link>
                <button className="cursor-pointer" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")}>
                    {theme === "dark" ? (
                        <img className="w-12 h-5" src={modoEscuro} alt="icone modo escuro"/>
                    ) : (
                        <img className="w-12 h-5" src={modoClaro} alt="icone modo claro"/>
                    )}
                </button>
            </div>
        </header>
    )
}