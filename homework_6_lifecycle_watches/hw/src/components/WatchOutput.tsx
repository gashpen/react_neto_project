import moment from "moment";
import 'moment-timezone';
import { useEffect,useState } from "react";
window.moment = moment
interface Form{
    onClickRemove: (elem:string)=>void;
    submitFormValue?:{nameCity:string,timeZone:number};
    nameCity:string;
    timeZone:number;
    id:string;
}

function WatchOutput(props:Form) {

    const [watch,newWatch] = useState<string>('');

    useEffect(()=>{

        props.submitFormValue?.forEach((elem:Form)=>{
            
          const timeInterval =  setInterval(()=>{
                newWatch(moment().utcOffset(elem.timeZone).format("HH:mm:ss"));
            },1000)
            return () => clearInterval(timeInterval)
        })
       
    },[props.submitFormValue, watch])


    return (
        <>
            {props.submitFormValue?.map((elem:Form)=>{
                return(
                    <div key={elem.id} className="watch_wrapper">
                        <div id={elem.id} className="new_watch">
                          {watch}
                        </div>
                        <button onClick={()=>{props.onClickRemove(elem.id)}}>delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default WatchOutput;