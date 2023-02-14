
import {Card} from 'react-bootstrap';

function SimpleCard(props){
    return(
        <Card style = {props.style}>
            <Card.Body>
                <Card.Text> {props.text} </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default SimpleCard