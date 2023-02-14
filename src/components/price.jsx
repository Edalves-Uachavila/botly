
import { Button } from "react-bootstrap"
import SimpleCard from "./simplecard"


export const Price = (props)=>{
    return(
        <SimpleCard
            style = {{width:"250px", height:"250px", margin:"5px auto"}}
            text = {
                <div>
                    <div style={{display:"flex", margin:"0px", paddingLeft: "0px"}}>
                        <ul style={{paddingLeft: "0px"}}><h4>{props.nome}</h4></ul>
                        <ul><h4>{props.price}</h4></ul>
                    </div>
                    <ul style={{display:"flex", alignContent:"space-between", padding: "0px", margin:"0px"}}>
                        <div style={{width:"110px", margin:"0 auto", textAlign:"center"}}>
                            <h6>Total de click</h6>
                            <h5>{props.click}</h5>
                        </div>
                        
                    </ul>
                    <Button style = {{width:"210px", marginTop:"10px"}}><a style = {{color:"whitesmoke", padding:"10px 70px"}} href = "/payment">Pagar</a></Button>
                </div>
            }
        />
    )
}

