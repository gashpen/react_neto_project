import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';  

const NewPost = () =>{

    const initilaState = {
        content:'',
    }

    interface Form{
        content:string | number | readonly string[] | undefined;
    }

    const [formValue,newFormValue] = useState<Form>(initilaState)
    const navigate = useNavigate();
     
    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const newInput = (data:Form) => ({...data, [event.target.name]: event.target.value});
        newFormValue(newInput);
    }

    const handlerSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/');
        fetch('http://localhost:7070/posts',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify((formValue.content === '') ? false : formValue),
        })
        .then(function(response) {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
              return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log('Request failed', error);
        });
        newFormValue(initilaState)
    }

    const exitButtonHandler = ()=>{
        localStorage.setItem("content",JSON.stringify(formValue.content));
        newFormValue({content:JSON.parse(localStorage.getItem("content") || '{}')})
        navigate("/");
    }
 
    return (
        <>
            <div className="new_post">
                <form onSubmit={(event)=>{handlerSubmit(event)}} className="form_post">
                <input onChange={(event)=>{handlerChange(event)}} placeholder="Что у вас нового?" name="content" value={formValue.content} className="input rounded-2xl" />
                    <button type="submit" className="btn btn-ghost rounded-2xl">Опубликовать</button>
                </form>
                    <button onClick={()=>{exitButtonHandler()}} className="btn btn-ghost rounded-2xl">x</button>
            </div>
        </>
    )
}

export default NewPost