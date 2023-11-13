import { ChangeEvent, FormEvent, useState } from "react";
import FormInterface from "./FormInterface";
import { nanoid } from "nanoid";
import Output from "./Output";
import Cancel from "./Cancel";
import { useDispatch, useSelector } from "react-redux";

const Form = () =>{

    const initialState = {
        id:'',
        name:'',
        price:''
    }
    const product = useSelector((store)=>store.productAdd.product);
    const dispatch = useDispatch();
    const [inputValue,setInputValue] = useState<FormInterface>(initialState);
    const [cancel, setCancel] = useState<boolean>(false);
    console.log(product)
    const changeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        const newInput = (data:FormInterface) => ({...data, [event.target.name]: event.target.value});
        setInputValue(newInput);
    }

    const submitHandler = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        dispatch({type:'product/ProductAdd',payload:{
            id:inputValue.id === '' ? nanoid() : inputValue.id,
            name:inputValue.name,
            price:inputValue.price
        }})
    
        setInputValue(initialState);
        setCancel(false)
    }


    const onClickReset = () =>{
        setInputValue({
            name:'',
            price:''
        })
        setCancel(false)
    }

    const onClickEdit = (id: string) =>{
        dispatch({type:'product/ProductEdit',
                    payload:{
                        id:inputValue.id,
                        name:inputValue.name,
                        price:inputValue.price
                }})
        product.map((elem)=>{
             if(id === elem.id){  
                
                 setInputValue(
                    {   
                        id:elem.id,
                        name:elem.name,
                        price:elem.price    
                    }
                )
            }
            return elem
        })
        
        setCancel(true);
    }
    return (
        <>
             <form onSubmit={(event)=>submitHandler(event)}>
                <input name="name" value={inputValue.name} onChange={(event)=>changeHandler(event)} type="text" />
                <input name="price" value={inputValue.price} onChange={(event)=>changeHandler(event)} type="text" />
                <input type="submit" value={cancel === false?'Submit':'Save!'}/>
                {cancel === true ? <Cancel onClickReset={onClickReset}/> : false}
            </form>
            <Output
                cancel={cancel}
                onClickEdit={onClickEdit} 
            />
        </>
    )
}

export default Form;