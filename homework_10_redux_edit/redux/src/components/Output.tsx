import Remove from "./Remove";
import Edit from "./Edit";
const Output = (props) =>{

    return (
        <>
            {props.product.map((elem)=>{
                return (
                    <div key={elem.id} className="product_wrapper">
                        <div className="name">{elem.name}</div>
                        <div className="price">{elem.price}</div>
                        <Remove
                        cancel={props.cancel}
                        product={props.product}
                        setProduct={props.setProduct}
                        id={elem.id}/>
                        
                        <Edit
                        product={props.product} 
                        setProduct={props.setProduct} 
                        id={elem.id} 
                        setInputValue={props.setInputValue} 
                        setCancel={props.setCancel} 
                        selectTodoId={props.selectTodoId}/>
                    </div>   
                )
            })}
        </>
    )
}

export default Output;