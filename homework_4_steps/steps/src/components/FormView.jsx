import { useState } from "react"
import OutputView from "./OutputView";
import { nanoid } from "nanoid/non-secure";
import moment from "moment/moment";
export default function FormView(){

   window.moment = moment

   //steps.sort((a,b)=>b.date - a.date)
   
    const initialFormState = {
        id:'',
        date:'',
        distance:''
    }

    const [formValue,newFormValue] = useState(initialFormState);

    const [steps, newSteps] = useState([]);

    function handleChange(e){
        const newInput = (data) => ({...data, [e.target.name]: e.target.value});
        newFormValue(newInput);
    }

    function handleSubmit(e){
        e.preventDefault()
        const newStep = {
            id:nanoid(),
            date: formValue.date,
            distance: formValue.distance
        }
        newSteps((prev)=>[...prev,newStep]);
        newFormValue(initialFormState);
    }

    function onClickRemove(id){
        newSteps(steps.filter((elem)=> elem.id != id));    
    }
    window.steps = steps
    function onClickEdit(id){
        newSteps(steps.map((obj)=>{
            if(id === obj.id){
                newFormValue({
                    date:obj.date,
                    distance:obj.distance
                })
            }
            return obj;
        }))
    }
    
    return(<>
        <form onSubmit={handleSubmit} action="">
            <input onChange={handleChange} name="date" value={formValue.date} type="text" />
            <input onChange={handleChange} name="distance" value={formValue.distance} type="text" />
            <input type="submit" value={'OK'}/>
        </form>
        <OutputView
        steps={steps}
        newSteps={newSteps}
        onClickRemove={onClickRemove}
        onClickEdit={onClickEdit}
        />
    </>);
}