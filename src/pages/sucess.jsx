
import "./pages.css"

import { Button } from "react-bootstrap"
import icon from "../img/avatar.png"

import {MdCloudDone} from "react-icons/md"
import Navegacao from "../components/navegacao"
import { Link } from "react-router-dom"


export const SucessPage = ()=>{
    return(
        <div className="sucess-page">
            <MdCloudDone  className="icon"/>
            <h4>Id de Tranzacao submetido com sucesso</h4>
            <span>
                <p>Aguarde a aprovacao do pagamento. isto pode levar no maximo 24 horas</p>
            </span>
            <Navegacao text = "ver estado de pagamento" para = "/payment-estatus"/>
            <p style={{fontSize:"x-small", textAlign:"center", marginTop:"20px"}}><Link to = "/">voltar para home</Link> </p>
        </div> 
    )
}