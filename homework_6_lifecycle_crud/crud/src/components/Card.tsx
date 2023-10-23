interface StateArr{
    stateCard:{data:string,id:number};
    removeCard:()=> void;
}
interface Form{
    id?:number | undefined;
    content:string;
  }
function Card(props:StateArr) {

    return ( 
        <>
            {props.stateCard?.map((elem:Form)=>{
            
                return (
                    <div key={elem.id} className="card">
                        <div className="card_description">{elem.content}</div>
                        <button onClick={()=>{props.removeCard(elem.id)}} className="delete_button">x</button>                     
                    </div>
                )
            })}
        </>
     );
}

export default Card;