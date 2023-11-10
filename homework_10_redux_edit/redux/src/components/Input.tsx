import { ChangeEvent, FormEvent, useState } from "react";
import Output from "./Output";
import Form from "./interfaceForm";
import {nanoid} from 'nanoid';
import FormList from "./FormList";

const Input = () => {

    const initialState = {
        id:'',
        name:'',
        price:''
    }

    const [inputValue,setInputValue] = useState<Form>(initialState);
    const [product,setProduct] = useState([]);
    const [cancel, setCancel] = useState<boolean>(false);
    const [todoIdEdit,setTodoIdEdit] = useState('')
 
    const selectTodoId = (id) =>{
        setTodoIdEdit(id)
    }
    
    const changeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        const newInput = (data:Form) => ({...data, [event.target.name]: event.target.value});
        setInputValue(newInput);
    }

    const submitHandler = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const value = {
            id:inputValue.id === '' ? nanoid() : inputValue.id,
            name:inputValue.name,
            price:inputValue.price
        }
        
        setProduct((prev)=>[...prev, value])
        setInputValue(initialState);
        setCancel(false)
    }

    return ( 
        <div className="form_wrapper">
            <FormList 
            submitHandler={submitHandler}
            inputValue={inputValue}
            changeHandler={changeHandler}
            setProduct={setProduct}
            cancel={cancel}
            initialState={initialState}
            setInputValue={setInputValue}
            setCancel={setCancel}/>

            <Output
            cancel={cancel}
            product={product}
            setProduct={setProduct}
            setInputValue={setInputValue}
            setCancel={setCancel}
            selectTodoId={selectTodoId}
            todoIdEdit={todoIdEdit}/>
        </div>
    );
}

export default Input;