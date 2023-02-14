import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import "./vsl.css"
import vid from "../video/bali.mp4"
import thum from "../img/thum.png"
import { Button } from 'react-bootstrap';

import avatar from "../img/avatar.png"

const Inscrito = (props)=>{
    return(
        <div className="inscrito">
            <img className='avatar' src={avatar}/>
            <div className="fala">
                {props.fala}
            </div>
        </div>
    )
}

export default function VSL(){
    return (
            <div className='vsl-container'>
                <div className="vsl">
                    <h2 style = {{color:"#0d6efd", textAlign:"center"}}>GANHE DINHEIRO ENQUANTO DORME</h2>
                    <div className="vid">
                        <Video 
                            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                            poster={thum}
                            onCanPlayThrough={() => {
                            // Do stuff
                            }}>
                            <source src={vid} type="video/webm" />
                        </Video>
                    </div>
                    <div className="cta">
                        <Button><a href="/sign" style = {{color:"whitesmoke", padding:"10px"}}>SE INSCREVA GRATUITAMENTE</a></Button>
                    </div>
                </div>
                <div className="objecao">
                    <h4 style = {{color:"#0d6efd"}}>Perguntas frequentes</h4>
                    <h6>Quais são os benefícios de usar o WaydeClick?</h6>
                    <p>Os benefícios de usar o WaydeClick incluem o fato de que você não precisa mais gastar tempo e energia clicando repetidamente para ganhar dinheiro e a possibilidade de obter lucros mais altos.</p>
                    
                    <h6>Tenho que usar megas todos os dias?</h6>
                    <p>Definitivamente não. Waydeclick está sempre online em nosso servidor, você só tem que se cadastrar e deixar que Waydeclick faça o resto.</p>
                    
                    <h6>Posso obter ajuda ao usar o WaydeClick?</h6>
                    <p>Sim, você pode obter ajuda da nossa equipe de suporte.</p>
                </div>
                <div className="testimunho">
                    <h4 style = {{color:"#0d6efd"}}>Veja o que nossos inscritos falam sobre nós</h4>
                    <div className="testimunho-container">
                        <Inscrito 
                            fala = "WaydeClick é uma ótima maneira de obter o máximo proveito da plataforma Kampar. Estou muito satisfeito com o serviço oferecido e recomendo a todos que desejam ganhar dinheiro online!"
                        />
                        <Inscrito
                            fala = "Moz é a sena. Ha sempre um way"
                        />
                        <Inscrito
                            fala = "O WaydeClick é simplesmente incrível! Salvei muito tempo e energia, já que não preciso mais clicar repetidamente todos os dias para ganhar dinheiro. A plataforma é totalmente personalizável e intuitiva, sendo fácil de configurar!"
                        />
                    </div>
                </div>
                <div className="cta">
                <Button><a href="/sign" style = {{color:"whitesmoke", padding:"10px"}}>SE INSCREVA GRATUITAMENTE</a></Button>
                </div>
            </div>
        );
}