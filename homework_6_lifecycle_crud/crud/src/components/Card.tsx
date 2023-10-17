interface StateArr{
    stateCard:{data:string,id:number};
}

function Card(props) {

    return ( 
        <>
            {props.stateCard?.map(elem=>{
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