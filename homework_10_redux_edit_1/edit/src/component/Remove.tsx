import { useDispatch } from "react-redux";

const Remove = (props) => {

    const dispatch = useDispatch();

    const onClickRemove = (id: string) =>{
        if(props.cancel === true){
            alert('Закончите редактированние и сохраните данные!')
        } else {
           dispatch({type:'product/ProductRemove',payload:id})
        }
    }
    return ( 
        <>
            <button className="container-btn remove" onClick={()=>onClickRemove(props.id)}></button>
        </>
    );
}
 
export default Remove;