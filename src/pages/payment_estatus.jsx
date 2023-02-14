
import { useEffect, useState } from "react"
import "./pages.css"
import Axios  from "axios"

import {CgCloseR} from "react-icons/cg"
import { trackPromise } from "react-promise-tracker"
import { LoadingIndicator } from "../components/loading"

const Payment = (props)=>{

    const handledelete = ()=>{
        trackPromise(
            Axios.post("https://7p38fs.deta.dev/v1/delete-payment", {
                "token": props.token,
                "id_tranzacao": props.id
            }).then((res)=>{window.location.reload()})
        )
    }

    return(
        <div className="payment-detalhe">
          
            <div className="valor" style={{backgroundColor:"gray", width:"100%"}}>
                <ul></ul> 
                <ul><CgCloseR type="submit"  onClick = {handledelete} style={{width:"20px", height:"20px", display:"flex", justifyContent:"center", alignItems:"center", color:"red"}}/></ul>
            </div>
            <div className="valor">
                <ul>ID de Tranzacao:</ul> 
                <ul>{props.id}</ul>
            </div>
            <hr style={{margin:"0px"}} />
            <div className="valor">
                <ul>Data:</ul> 
                <ul>{props.data}</ul>
            </div>
            <hr style={{margin:"0px"}} />
            <div className="valor">
                <ul>Estado:</ul> 
                <ul>{props.estado}</ul>
                
            </div>
        </div>
    )
}


export const PaymentEstatus = ()=>{

    const [dados, setDados] = useState([])
    let token = localStorage.getItem("kamparToken")
    
    useEffect(()=>{
        trackPromise(
            Axios.post("https://7p38fs.deta.dev/v1/payment-estatus",{
                "token":token
                }).then((res)=>{
                    setDados(res.data)
            })
        )
    }, [])


    return(
        <div className="payment-estatus">
            <h4>Estado de pagamento</h4>
            <hr/>
            <LoadingIndicator/>
            <div className="table">
                {dados.map((dado)=>{

                    return (
                        <Payment 
                            id = {dado.id_tranzacao}
                            data = {dado.data}
                            estado = {dado.estado}
                            token = {token}
                        />
                    )
                })}
            </div>
        </div>
    )
}