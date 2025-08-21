import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Guia } from "./Pages/Guia"
import { Produto } from "./Pages/Produto"
import { SobreNos } from "./Pages/SobreNos"
import { Jogo } from "./Pages/Jogo"
import { Referencias } from "./Pages/Referencias"

export function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Guia' element={<Guia/>}/>
        <Route path='/Produto' element={<Produto/>}/>
        <Route path='/SobreNos' element={<SobreNos/>}/>
        <Route path='/Jogo' element={<Jogo/>}/>
        <Route path='/Referencias' element={<Referencias/>}/>
      </Routes>
    </BrowserRouter>
  )
}