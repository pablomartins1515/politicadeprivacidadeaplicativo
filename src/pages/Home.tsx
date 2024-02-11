import { Header } from "../componentes/Header"
import { Duvidas } from "../componentes/Duvidas"
import Faq from "../componentes/Faq"
import { Rodape } from "../componentes/Rodape"

export function Home () {
    return (
        <div>
            <Header />
            <Duvidas />
            <Faq /> 
            <Rodape />                     
        </div>    
    )        
}