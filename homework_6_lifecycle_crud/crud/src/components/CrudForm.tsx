import { useEffect, useState } from 'react';
import Card from './Card';
import UpdateButton from './UpdateButton';

function CrudForm() {
    const initialState = {
        content:'',
    }
    interface Form{
      id?:number;
      content:string;
    }
    
    const [state,newState] = useState([]);
    const [formValue,newFormValue] = useState<Form>(initialState);
    
    const getNotes = () =>{
  
        fetch('http://localhost:7070/notes')
        .then(response => response.json())
        .then(data => {
            newState(data)
        })
        .catch(error=>{
          console.error(error)
        });
    }
  
    useEffect(getNotes,[formValue]);
    
    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newInput = (data:Form) => ({...data, [event.target.name]: event.target.value});
      newFormValue(newInput);
    }
  
    const handlerSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
  
       fetch('http://localhost:7070/notes', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formValue)
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
        newFormValue(initialState);
    }

    const removeCard = (id:number) =>{
  
      newState(state.filter((elem:Form)=>elem.id != id));

        fetch(`http://localhost:7070/notes/${id}`, {
          method: 'DELETE'
        })
        .then(response => {
          if (response.ok) {
            console.log("Карточка успешно удалена.");
          } else {
            console.log("Ошибка при удалении карточки. Код статуса: " + response.status);
          }
        })
        .catch(error => {
          console.log("Ошибка:", error);
        });
    }


    return (
      <div className='crud'>
        <UpdateButton getNotes={getNotes}/>
        <div className='form_wrapper'>
            <form className='form' onSubmit={(event)=>{handlerSubmit(event)}}>
                <input value={formValue.content} name='content' onChange={(event)=>{handlerChange(event)}} type="text" />
                <input type='submit' value="add"></input>
            </form>
        </div>
        <Card stateCard={state} removeCard={removeCard}/>
      </div>
    )
}

export default CrudForm;