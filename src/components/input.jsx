import "./styles.css"

function Input(props){
    return(
        <div className="my-input">
            <strong><label>{props.label}</label></strong>
            <input
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default Input