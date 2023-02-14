
import "./pages.css"

import { Button } from "react-bootstrap"
import { Price } from "../components/price"


export const Plano = ()=>{
    return(
        <div className="plano">
            <h4>Actualizacao de plano</h4>
            <p>Escolhe o plano que mais se encaixa com sua necessidade</p>
            <div className="line">
                <Price 
                    nome = "Basico" 
                    price = "20MT"
                    click = "200" 
                />
                <div className="aderido">
                    <strong>Mais aderido</strong>
                    <Price 
                        nome = "Medio" 
                        price = "35MT"
                        click = "450"
                    />
                </div>
                <Price 
                    nome = "Supremo" 
                    price = "65MT"
                    click = "900"
                />
            </div>
        </div>
    )
}