import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Input from "../components/input"
import { Select } from "../components/select"

import Axios from "axios"
import { Navigate } from "react-router-dom"
import { trackPromise } from "react-promise-tracker"
import { LoadingIndicator } from "../components/loading"

function Payment(){

    const [msg, setMsg] = useState("")
    const [estado, setEstado] = useState(false)
    const [id_tranzacao, setId_tranzacao] = useState()
    const [receiverPhone, setReceiverPhone] = useState("")
    const [receiverName,  setReceivername] = useState("")

    let   token = localStorage.getItem("kamparToken")

    useEffect(()=>{
        trackPromise(
            Axios.post("https://7p38fs.deta.dev/v1/get-receiver",
                {
                    "dados":{},
                    "key":"waydeclick.com"
                }
            ).then((res)=>{
                setReceivername(res.data.name)
                setReceiverPhone(res.data.phone)
            }
        ))
    }, [])


    function handlePayment(){
        trackPromise(
            Axios.post("https://7p38fs.deta.dev/v1/send-payment", {
                "token": token,
                "id_tranzacao": id_tranzacao
            }).then((res)=>{
                setEstado(res.data.estado);

                if (!res.data.estado) {
                    setMsg(res.data.msg)
                }
            })
        )
        
    }

    return(
        <div className="payment">
            <LoadingIndicator/>
            <h4>Confirmar Pagamento</h4>
            <div className="info">
                <p>Apois efectuar a transferencia, submeta o ID de Tranzacao que consta na mensagem de confirmacao para confirmar o pagamento.</p>
            </div>
            <hr/>
            <p style = {{marginBottom:"0px"}}><strong>Transferir para: </strong>{receiverPhone}</p>
            <p style = {{marginBottom:"10px"}}><strong>Nome: </strong>{receiverName}</p>
            <p><strong>valor transferido:</strong></p>
            <Select text = "20MT (Basico)"/>
            <Select text = "35MT (Medio | mais aderido)"/>
            <Select text = "65MT (Supremo)"/>
            <Input
                label = "ID de Tranzacao"
                placeholder = "PP230207.2033.L91166"
                onChange = {(e)=>{setId_tranzacao(e.target.value);}}
            />
            {!estado&&<p style={{color:"red", fontSize:"small"}}>{msg}</p>}
            {estado&& <Navigate to = "/sucess-page"/>}
            {token == null && <Navigate to = "/login"/>}
            <Button onClick = {handlePayment}>Confirmar Pagamento</Button>

        </div>
    )
}

export default Payment