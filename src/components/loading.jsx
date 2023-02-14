
import { usePromiseTracker } from "react-promise-tracker";
import {RotatingLines} from "react-loader-spinner"
import Modal from 'react-modal';



export const LoadingIndicator = () => {
    
    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        },
    };

    const { promiseInProgress } = usePromiseTracker();


    return (
        promiseInProgress &&
        <div>
            <Modal isOpen={true} style={customStyles} contentLabel="Example Modal">
                <RotatingLines strokeColor="#0d6efd"/>
            </Modal> 
        </div>
    );  
}