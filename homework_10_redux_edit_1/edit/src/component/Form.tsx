import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FormInterface from "./FormInterface";
import { nanoid } from "nanoid";
import Output from "./Output";
import Cancel from "./Cancel";
import { useDispatch, useSelector } from "react-redux";
import submit_img from "../assets/7853762_check_mark_kashifarif_check_accept_tick_icon.png";
import save_img from "../assets/8666542_save_icon.png";

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
    const [searchProduct,setSearchProduct] = useState('');

    const changeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        const newInput = (data:FormInterface) => ({...data, [event.target.name]: event.target.value});
        setInputValue(newInput);
    }
    console.log(product)
    const submitHandler = (event:FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        let type = 'product/ProductAdd';
        const payload = {
            id:nanoid(),
            name:inputValue.name,
            price:inputValue.price,
        };
        if(inputValue.id){
            type = 'product/ProductEdit';
            payload.id = inputValue.id
        }
        dispatch({type, payload})
        setInputValue(initialState);
        setCancel(false)
    }

    const filterProduct = (event: string) =>{
        dispatch({type:'product/ProductFilter',payload:event})
    }

    useEffect(()=>{
        const debounce = setTimeout(()=>{
            filterProduct(searchProduct)
        },500)
        return ()=> clearTimeout(debounce)
    },[searchProduct])

    const onClickReset = () =>{
        setInputValue({
            name:'',
            price:''
        })
        setCancel(false)
    }

    const onClickEdit = (id: string) =>{

        const selectedProduct = product.find((elem: { id: string }) => elem.id === id);
        if(selectedProduct){
            dispatch({
                type:'product/ProductEdit',
                payload:{
                    id:selectedProduct.id,
                    name:selectedProduct.name,
                    price:selectedProduct.price,
                }
            })
        }
        setInputValue({
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price
        })
        setCancel(true);
    }

    return (
        <div className="form_wrapper">
             <form onSubmit={(event)=>submitHandler(event)}>
                <div className="input_wrap input_name">
                    <span className="name">Название товара:</span>
                    <input className="input" name="name" value={inputValue.name} onChange={(event)=>changeHandler(event)} type="text" />
                </div>
                <div className="input_wrap input_price">                    
                    <span className="price">Стоимость товара:</span>
                    <input className="input" name="price" value={inputValue.price} onChange={(event)=>changeHandler(event)} type="text" />
                </div>
                <div className="input_wrap input_search">
                    <span className="search">Поиск:</span>
                    <input className="input" name="search" type="text" onChange={(e)=>setSearchProduct(e.target.value)}/>
                </div>
                <button className="input_submit" type="submit" style={{backgroundImage: `url(${cancel === false ? submit_img : save_img})`}}/>
                {cancel === true ? <Cancel onClickReset={onClickReset}/> : false}
            </form>
            <Output
                cancel={cancel}
                onClickEdit={onClickEdit} 
            />
        </div>
    )
}

export default Form;