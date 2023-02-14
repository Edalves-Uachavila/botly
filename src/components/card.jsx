
import {Card} from 'react-bootstrap';


function Cards(props){


    return(
        <Card className='sign' style ={{maxWidth: props.maxWidth, height: props.height}}>
            <Card.Body>
                <Card.Title style={{marginBottom:"25px"}}> {props.title} </Card.Title>
                <Card.Text> {props.text} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default  Cards