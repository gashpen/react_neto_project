import moment from "moment";
import 'moment-timezone';
import { useEffect,useState } from "react";

interface Form{
    onClickRemove: (elem:string)=>void;
    submitFormValue?:{nameCity:string,timeZone:number};
    nameCity:string;
    timeZone:number;
    id:string;
}

function WatchOutput(props:Form) {

    const [watch,newWatch] = useState<string>('');

    return (
        <>
            {props.submitFormValue?.map((elem:Form)=>{
                return(
                    <div key={elem.id} className="watch_wrapper">
                        <div id={elem.id} className="new_watch">
                        </div>
                        <button onClick={()=>{props.onClickRemove(elem.id)}}>delete</button>
                    </div>
                )
            })}
        </>
    )
}

export default WatchOutput;