import { Link,useNavigate } from "react-router-dom"
import React, { ReactEventHandler, useState } from 'react';  

const NewPost = () =>{

    const initilaState = {
        content:'',
    }

    interface Form{
        content:string;
    }
    const [submitFormValue,setFormValue] = useState([]);
    const [formValue,newFormValue] = useState<Form>(initilaState)
    const navigate = useNavigate();


    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const newInput = (data:Form) => ({...data, [event.target.name]: event.target.value});
        newFormValue(newInput);
    }
    const handlerSubmit = async (event:React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault()
        navigate('/');
        console.log(formValue)
        fetch('http://localhost:7070/posts',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify((formValue.content != '') ? false : formValue.content)
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
 
    return (
        <>
            <div className="new_post">
                <form onSubmit={(event)=>{handlerSubmit(event)}} className="form_post">
                    <input onChange={(event)=>{handlerChange(event)}} name="content" value={formValue.content} type="text" className="input_post" />
                    <button type="submit" className="input_submit">Опубликовать</button>
                </form>
            </div>
        </>
    )
}

export default NewPost