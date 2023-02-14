
import {Card} from 'react-bootstrap';
import Redict from './redict';


function BrandCard(props){
    return(
        <Card style ={{ width: '18rem' }}>
            <Card.Body>
                <Card.Img src = {props.img}/>
                <Card.Title> {props.title} </Card.Title>
                <div className="site-link">
                    <strong><Redict to = {props.domainLink} text = {props.domainName}/></strong>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BrandCard