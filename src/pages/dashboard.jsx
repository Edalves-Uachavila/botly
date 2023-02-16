
import "./pages.css"
import SimpleCard from "../components/simplecard"
import { Button } from "react-bootstrap"
import avatar from "../img/avatar.png"

import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import Axios  from "axios"
import { trackPromise } from "react-promise-tracker"
import { LoadingIndicator } from "../components/loading"
import Navegacao from "../components/navegacao"


function Dashboard(){

    const [phone, setPhone] = useState("")
    const [estado, setEstado] = useState(false)
    const [clicados, setClicados] = useState("")
    const [porclicar, setPorclicar] = useState("")
    
    let token = localStorage.getItem("kamparToken")


    useEffect(()=>{
        trackPromise(
            Axios.post("https://7p38fs.deta.dev/v1/dashboard",
                {
                    "token":token
                }).then((res)=>{
                    setPhone(res.data.phone)
                    setEstado(res.data.estado)
                    setClicados(res.data.clicados)
                    setPorclicar(res.data.porclicar)
                }
        ))
    }, [])


    return(
        <div className="dashboard">
            <LoadingIndicator/>
            <header>
                <ul><img src={avatar} alt="avatar" className="avatar"/></ul>
                <ul><strong>{phone}</strong></ul>
            </header>
            <main>
                <div className="line">
                    <SimpleCard
                        style = {{width:"250px", height:"100px", margin:"5px auto"}}
                        text = {
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <strong>Clicks por executar:</strong>
                                <strong><p style={{color:"green"}}>{porclicar}</p></strong>
                            </div>
                        } 
                    />
                    <SimpleCard
                        style = {{width:"250px", height:"100px", margin:"5px auto"}}
                        text = {
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <strong>Clicks executados:</strong>
                                <strong><p style={{color:"red"}}>{clicados}</p></strong>
                            </div>
                        }
                    />
                </div>
                <Navegacao para = "/plano" text = "aumentar click c"/>
                {token == null && <Navigate to = "/login"/>}
            </main>
        </div>
    )
}


export default Dashboard