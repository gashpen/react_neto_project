import { useEffect, useState } from 'react';
import Card from './Card';

function CrudForm() {
    const initialState = {
        content:'',
    }
    interface Form{
      content:string;
    }
    interface StateArr{
      stateCard:{content:string,id:number};
  }
    
    const [state,newState] = useState<any>();
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
    console.log(state)
  
    useEffect(getNotes,[])
    
    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newInput = (data:Form) => ({...data, [event.target.name]: event.target.value});
      newFormValue(newInput);
    }
  
    const handlerSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
  
      fetch('http://localhost:7070/notes', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify((formValue.content === '')?false:formValue)
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

    return (
      <div className='crud'>
        <div className='form_wrapper'>
            <form className='form' onSubmit={(event)=>{handlerSubmit(event)}}>
                <input value={formValue.content} name='content' onChange={(event)=>{handlerChange(event)}} type="text" />
                <input type='submit' value="add"></input>
            </form>
        </div>
        <Card stateCard={state}/>
      </div>
    )
}

export default CrudForm;