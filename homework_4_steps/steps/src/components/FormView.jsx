import { useState } from "react"
import OutputView from "./OutputView";
import { nanoid } from "nanoid/non-secure";

export default function FormView(){
   
    const initialFormState = {
        id:'',
        date:'',
        distance:''
    }

    const [formValue,newFormValue] = useState(initialFormState);

    const [steps,newSteps] = useState([]);

    const [alert,newAlert] = useState('');

    steps.sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      });

    steps.reduce((acc, entry) => {
        const date = entry.date;
        const same = acc.find(elem=> elem.date === date);
        if(same !== undefined){
            same.distance += entry.distance
        } else {
            acc.push(entry)
        }
        return acc
      }, []);  

    function handleChange(e){
        const newInput = (data) => ({...data, [e.target.name]: e.target.value});
        newFormValue(newInput);
    }

    function handleSubmit(e){
        e.preventDefault()
        const newStep = {
            id:nanoid(),
            date: formValue.date,
            distance: Number(formValue.distance)
        }
        if(isNaN(newStep.distance)){
            newAlert(true)
        }else{
            newAlert(false)
        }
        newSteps((prev)=>[...prev,newStep]);
        newFormValue(initialFormState);
    }
    
    function onClickRemove(id){
        newSteps(steps.filter((elem)=> elem.id != id));    
    }
    
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
        <div className="form_wrapper wrappers">
            <form name="stepsForm" onSubmit={handleSubmit} action="">
                <div className="input_wrapper">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Дата (ДД.ММ.ГГГГ)</span>
                    </label>
                    <input onChange={handleChange} name="date" value={formValue.date} type="text" required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Пройдено, км</span>
                    </label>
                    <input onChange={handleChange} name="distance" value={formValue.distance} type="text" required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                    <div className="btn_wrapper">
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" type="submit">OK</button>
                    </div>
                </div>
            </form>
        </div>
        <OutputView
        steps={steps}
        newSteps={newSteps}
        onClickRemove={onClickRemove}
        onClickEdit={onClickEdit}
        alert={alert}
        />
    </>);
}