import Alert from "./Alert"
/* eslint-disable react/prop-types */
export default function OutputView({steps,onClickRemove,onClickEdit,alert}){

    return (<>
        <div className="steps_wrapper wrappers">{steps?.map((elem,index)=>
            <div id={elem.id} key={index} className="steps">      
                <div className="output_steps date">{elem.date}</div>
                <div className="output_steps distance">{elem.distance}</div>
                <button onClick={()=>onClickRemove(elem.id)}>X</button>
                <button onClick={()=>onClickEdit(elem.id)}>E</button>
            </div>)}
            <Alert alert={alert}/>
        </div>
    </>)
}