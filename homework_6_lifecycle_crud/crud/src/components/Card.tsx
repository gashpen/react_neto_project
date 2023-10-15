interface StateArr{
    stateCard:{data:string,id:number};
}

function Card({stateCard}:StateArr) {
    
    return ( 
        <>
            {stateCard?.map(elem=>{
                <div key={elem.id} className="card">
                    <div className="card_description">{elem.data}</div>                     
                </div> 
            })}
        </>
     );
}

export default Card;