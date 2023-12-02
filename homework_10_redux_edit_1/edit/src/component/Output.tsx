import { useSelector } from "react-redux";
import Remove from "./Remove";

const Output = (props) => {
    const product = useSelector((store)=> store.productAdd.product);
    const filtredProd = useSelector((store)=>store.productAdd.filtredProduct)

    if(filtredProd.length > 0){
        return (
            <div>
                {filtredProd.map(elem=>{
                return(
                    <div key={elem.id} className="product_wrapper">
                    <div className="name">{elem.name}</div>
                    <div className="price">{elem.price}</div>
                    <Remove id={elem.id} cancel={props.cancel}/>
                    <button className="edit" onClick={()=>props.onClickEdit(elem.id)}>Edit</button>
                    </div>
                )
            })}
            </div>
        )
    } else {
        return ( 
            <div>
                {product.map(elem=>{
                    return(
                        <div key={elem.id} className="product_wrapper">
                        <div className="name">{elem.name}</div>
                        <div className="price">{elem.price}</div>
                        <Remove id={elem.id} cancel={props.cancel}/>
                        <button className="edit" onClick={()=>props.onClickEdit(elem.id)}>Edit</button>
                        </div>
                    )
                })}
    
            </div> 
        );
    }
}
 
export default Output;