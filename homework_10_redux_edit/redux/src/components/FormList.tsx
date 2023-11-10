import Cancel from "./Cancel"
import Submit from "./Submit"

const FormList = (props) =>{
    
    return(
        <>
            <form onSubmit={(event)=>props.submitHandler(event)}>
                <input name="name" value={props.inputValue.name} onChange={(event)=>props.changeHandler(event)} type="text" />
                <input name="price" value={props.inputValue.price} onChange={(event)=>props.changeHandler(event)} type="text" />
                <Submit 
                setProduct={props.setProduct} 
                setInputValue={props.setInputValue} 
                inputValue={props.inputValue} 
                initialState={props.initialState}/>
                {props.cancel === true ? <Cancel setInputValue={props.setInputValue} setCancel={props.setCancel}/> : false}
            </form>
        </>
    )
}

export default FormList