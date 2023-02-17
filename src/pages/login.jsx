
import "./pages.css"

/*REACT HUKS ND MODULES*/
import { useState } from "react"
import Axios  from "axios"
import { Link, Navigate } from "react-router-dom"

/*My Components*/
import { Button } from "react-bootstrap"
import Cards from "../components/card"
import Input from "../components/input"

import Navegacao from "../components/navegacao"

import { LoadingIndicator } from "../components/loading"
import { trackPromise } from 'react-promise-tracker';

function Login(){

    const [numero, setNumero] = useState("")
    const [senha, setSenha] = useState("")
    const [estado, setEstado] = useState(false)
    const [erro, setErro] = useState(false)

    
    const sendLogin = ()=>{
        
        /* O TRACK PROMISE E UMA BIBLIOTECA EXTERNA PARA TRACKER UMA PROMISE DE MODO A  MOSTRAR O LOADING*/
        trackPromise(
            Axios.post("https://7p38fs.deta.dev/v1/login", {
                "phone":numero,
                "password":senha
                }).then((res)=>{
                    if (res.data.estado) {
                        localStorage.setItem("kamparToken",res.data.token);
                        setEstado(res.data.estado)
                    } else {
                        setErro(true)
                    }
                })
            )  
    }

    return(
        <div className="container">
            <LoadingIndicator/>
            <Cards
                maxWidth = "350px"
                title = "Login"
                text  = {
                    <div>
                        <p>Insere seus dados para fazer login</p>
                        {erro&&<p style={{color:"red", fontSize:"x-small"}}>Contacto ou senha incorecta</p>}
                        <Input 
                            label = "Contacto"
                            placeholder = "84xxxxxxx"
                            onChange = {(e)=> {
                                setNumero(e.target.value);
                            }}
                        />
                        <Input 
                            label = "password"
                            placeholder = "Digite sua palavra passe"
                            onChange = {(e)=> {
                                setSenha(e.target.value);
                            }}
                        />
                        <Button onClick = {sendLogin}>Login</Button>
                        <p>se ainda nao tens uma conta, se cadastre <Link to = "/sign">aqui</Link></p>
                        {estado&& <Navigate to = "/"/>}
                    </div>
                }
            />
        </div>
    )
}


export default Login