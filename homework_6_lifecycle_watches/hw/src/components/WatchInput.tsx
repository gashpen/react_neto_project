import { useState} from "react";
import WatchButton from "./WatchButton";
import 'moment-timezone';
import WatchOutput from "./WatchOutput";
import { nanoid } from "nanoid";

function WatchInput() {

    interface Form{
        id:string;
        nameCity:string;
        timeZone:string;
    }

    const [formValue, newFormValue] = useState<Form>({
        id:'',
        nameCity:'',
        timeZone:''
    });

    const[submitFormValue,newSubmitFormValue] = useState([]);
    
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newInput = (data:Form) => ({...data, [event.target.name]: event.target.value});
        newFormValue(newInput);
    };
    
    const onSubmitForm = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newStep = {
            id:nanoid(),
            nameCity: formValue.nameCity,
            timeZone: Number(formValue.timeZone)
        }

        newSubmitFormValue((prev)=>[...prev, newStep]);
        
        newFormValue({
            id:'',
            nameCity:'',
            timeZone:''
        });
    };

    const onClickRemove = (id:string) =>{
        newSubmitFormValue(submitFormValue.filter((elem:any)=> elem.id != id));
    };
    
    return (
        <>
            <form onSubmit={(event)=>{onSubmitForm(event)}} id="watch" action="" className="form_input">
                <input value={formValue.nameCity} onChange={(event)=>{onChangeHandler(event)}} name="nameCity" type="text" className="input" required/>
                <input value={formValue.timeZone} onChange={(event)=>{onChangeHandler(event)}} name="timeZone" type="text" className="input" required/>
                <button className="button" form="watch">Go!</button>
            </form>
            <WatchOutput
            submitFormValue={submitFormValue}
            onClickRemove={onClickRemove}
            newSubmitFormValue={newSubmitFormValue}
            />
        </>
    );
}

export default WatchInput;