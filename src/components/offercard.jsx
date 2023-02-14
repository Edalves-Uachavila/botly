
import imagem from "../img/amazon.png"

import "./styles.css"

import Cards from "../components/card"
import { Button, Card } from "react-bootstrap"


function Offercard(){
    
    return(
        <Card style ={{ width: "100%"}}>
            <Card.Body className = "offercard">
                <div className="img">
                    <img src={imagem}/>
                </div>
                <div className="text">
                    <h2>East Fork Promo Code: Up To 10% Off Sitewide</h2>
                    <p>
                    Applies Site-Wide. Used 193 times. Last used 5m
                    ago. Verified working 4m ago. More East Fork
                    Coupon Codes.
                    </p>
                </div>
                <div className="btn">
                    <Button>Get Code</Button>
                </div>
            </Card.Body>
        </Card>
    
    )
}

export default Offercard

