import moment from "moment";
import 'moment-timezone';
import { useEffect,useState } from "react";

interface Form{
    submitFormValue?:{nameCity:string,timeZone:number};
    nameCity:string;
    timeZone:number;
    id:string;
}

function WatchOutput({submitFormValue}:Form) {


    const [watch,newWatch] = useState<string>('');

    useEffect(()=>{

        submitFormValue?.forEach((elem:Form)=>{
            
          const timeInterval =  setInterval(()=>{

                const timeNow = Date.parse(moment().format());
                const timeToWatch = new Date(timeNow + elem.timeZone);
                const hours = (timeToWatch.getHours()<=9)?`0`+timeToWatch.getHours():timeToWatch.getHours();
                const minutes = (timeToWatch.getMinutes()<=9)?`0`+timeToWatch.getMinutes():timeToWatch.getMinutes();
                const seconds = (timeToWatch.getSeconds()<=9)?`0`+timeToWatch.getSeconds():timeToWatch.getSeconds();
                const time = `${hours}:${minutes}:${seconds}`;

                newWatch(`time in ${elem.nameCity} now ${time}`);
            },1000)  
        })
    },[submitFormValue])


    return (
        <>
            {submitFormValue?.map((elem:Form)=>{
                <div>
                    <div className="watch_wrapper">
                            <div id={elem.id} className="new_watch">
                               {watch}
                            </div>
                        <button>delete</button>
                    </div>
                </div>
            })}
        </>
    )
}

export default WatchOutput;