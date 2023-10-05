/* eslint-disable react/prop-types */
export default function OutputView({steps,onClickRemove,onClickEdit}){
    return (<>
        {steps?.map((elem,index)=><div id={elem.id} key={index}>{elem.date +"--------"+ elem.distance}
        <button onClick={()=>onClickRemove(elem.id)}>X</button>
        <button onClick={()=>onClickEdit(elem.id)}>E</button></div>)}
    </>)
}