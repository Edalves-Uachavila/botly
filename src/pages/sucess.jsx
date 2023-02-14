
import "./pages.css"

import { Button } from "react-bootstrap"
import icon from "../img/avatar.png"

import {MdCloudDone} from "react-icons/md"


export const SucessPage = ()=>{
    return(
        <div className="sucess-page">
            <MdCloudDone  className="icon"/>
            <h4>Id de Tranzacao submetido com sucesso</h4>
            <span>
                <p>Aguarde a aprovacao do pagamento. isto pode levar no maximo 24 horas</p>
            </span>
            <Button style = {{marginTop:"25px"}}><a style={{color:"whitesmoke", padding:"10px 68px"}} href = "/payment-estatus">ver estado de pagamento</a></Button>
            <p style={{fontSize:"x-small", textAlign:"center", marginTop:"20px"}}><a href="/">voltar para home</a></p>
        </div> 
    )
}