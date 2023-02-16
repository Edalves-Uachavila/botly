import { useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";


function Navegacao(props){
    
    return(
        <>  
            <Link to={props.para} style={{}}>
                <Button style = {{marginTop:"25px", display:"flex", alignContent:"center", margin:"25px auto"}} >{props.text}</Button>
            </Link>
        </>
        
    )
}

export default Navegacao