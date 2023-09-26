/* eslint-disable react/prop-types */

export default function CardView({cards}){
    
    return (<>
        <div className='card_wrapper'>
        {cards?.map((elem,index)=><div key={index} className='product_card'>
          <h2 key={index}>{elem.name}</h2>
          <h4>{elem.color}</h4>
          <img className='product_card-img' src={elem.img}/><div className='card_price-wrap'>
            <span className='price'>{'$'+ elem.price}</span>
            <button className='product_button'>add to cart</button>
            </div>
            </div>)}
        </div>
              
    </>)
}