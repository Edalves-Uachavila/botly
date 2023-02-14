
import "./pages.css"

import Axios from "axios"
import { useState } from "react"
import { Navigate } from "react-router-dom"

import { Button } from "react-bootstrap"
import Cards from "../components/card"
import Input from "../components/input"

import { trackPromise } from 'react-promise-tracker';
import { LoadingIndicator } from "../components/loading"

function Sign(){
    const [phone, setPhone] = useState("")
    const [senha1, setSenha1] = useState("")
    const [senha2, setSenha2] = useState("")
    const [estado, setEstado] = useState(false)

    const [mensage, setMensage] = useState("")
    const [tipo, setTipo] = useState("")

    function cadastrar(){
        trackPromise(
            Axios.post("https://7p38fs.deta.dev/v1/sign", {
                "phone":phone,
                "password1":senha1,
                "password2":senha2
                    }).then((res)=>{
                    if (res.data.estado) {
                        setEstado(res.data.estado)
                        console.log(res.data);
                    } else {
                        setMensage(res.data.mensage)
                        setTipo(res.data.tipo)
                    }
            })
        )
        
    }


    return(
        <div className="container">
            <LoadingIndicator/>
            <Cards
                maxWidth = "350px"
                title = "Cadastrar"
                text  = {
                    <div>
                        <p>Se cadastre com seus dados do kampar para automatizar clicks na tua conta</p>
                        <Input 
                            label = "Contacto"
                            placeholder = "84xxxxxxx"
                            onChange = {(e)=>{setPhone(e.target.value);}}
                        />
                        <Input 
                            label = "password"
                            placeholder = "Digite sua palavra passe"
                            onChange = {(e)=>{setSenha1(e.target.value);}}
                        />
                        <Input 
                            label = "password"
                            placeholder = "Repita sua palavra passe"
                            onChange = {(e)=>{setSenha2(e.target.value);}}
                        />
                        <p className="disclimer">Ao clicar em <strong>cadastrar</strong> confirma que leste os <a href="/termos">termos e condicoes</a> de uso</p>
                        <Button onClick = {cadastrar}>cadastrar</Button>
                        <p>se ja tens uma conta faz <a href="/login">login aqui</a></p>
                        {estado && <Navigate to = "/login"/>}
                        {!estado && <p style={{color:"red"}}>{mensage}</p>}
                    </div>
                }
            />
        </div>
    )
}


export default Sign