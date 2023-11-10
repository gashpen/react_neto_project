import { useParams, useNavigate } from "react-router-dom"
import {useState,useEffect} from "react"

const EditPost = () =>{
     
    const {id} = useParams();
    const navigate = useNavigate();
    interface Form {
        content:string
    }
    const initialValue = {
        content:'',
    }

    const [formValue,setFormValue] = useState<Form>(initialValue);

    useEffect(()=>{
        fetch(`http://localhost:7070/posts/${id}`)
        .then((response)=>response.json())
        .then((data)=>setFormValue(data))
        .catch(error=>{
            console.error(error)
        });
    },[id])


    const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newInput = (data:Form) => ({...data, [event.target.name]: event.target.value});
        setFormValue(newInput);
    }
 
    const submitHandler = (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        fetch(`http://localhost:7070/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formValue)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Успешный ответ сервера:', data);
    
        })
        .catch(error => {
            console.error('Ошибка при отправке запроса:', error);
        });
        setFormValue(initialValue);
        navigate('/')
    }

    return (
        <>  
            <div className="content_wrapper">
            <form className="form form_edit">
                <textarea className="textarea input_edit" name='content' value={formValue.content} onChange={(event)=>{changeHandler(event)}}></textarea>
                <button className="btn btn-ghost" onClick={(event)=>{submitHandler(event)}} type="submit">Редактировать</button>
            </form>
            </div>
        </>
    )
}

export default EditPost