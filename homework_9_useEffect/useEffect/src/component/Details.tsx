import { useEffect,useState } from "react";
import Option from "./TStypeOption";


function Details(props:Option) {

  
    const initialState = {
        avatar:'',
        details:{
            city:'',
            company:'',
            position:''
        },
        id:props.info.id,
        name:''
    }
    const[details,setDetails] = useState(initialState)

    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`)
        .then((response) => response.json())
        .then((data) => setDetails(data))
    },[props.info.id])

    return ( 
        <>
                <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{details.name}</h2>
                    <p>{details.details.company}</p>
                    <p>{details.details.position}</p>
                    <p>{details.details.city}</p>
                </div>
                <figure>
                    <img src={details.avatar}/></figure>
                </div>
            
        </>
    );
}

export default Details;