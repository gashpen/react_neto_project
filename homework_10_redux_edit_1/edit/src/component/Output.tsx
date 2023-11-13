import { useSelector } from "react-redux";
import Remove from "./Remove";
import Edit from "./Edit";
const Output = (props) => {
    const product = useSelector((store)=> store.productAdd.product);

    return ( 
        <div>
            {product.map(elem=>{
                return(
                    <div key={elem.id} className="product_wrapper">
                    <div className="name">{elem.name}</div>
                    <div className="price">{elem.price}</div>
                    <Remove id={elem.id} cancel={props.cancel}/>
                    <button className="edit" onClick={()=>props.onClickEdit(props.id)}>Edit</button>
                    {/* <Edit id={elem.id}/> */}
                    </div>
                ) 
            })}

        </div> 
    );
}
 
export default Output;