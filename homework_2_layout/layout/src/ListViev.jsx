/* eslint-disable react/prop-types */
import './ListViewStyle.css'

export default function ListView({items}){

    return (<>
        <div className="card_wrapper-list">
        {items?.map((elem,index)=><div key={index} className='product_card-list'>
        <img className='product_card-img-list' src={elem.img}/>    
        <h2 key={index}>{elem.name}</h2>
        <h4>{elem.color}</h4>
        <div className='card_price-wrap-list'>
          <span className='price'>{'$'+ elem.price}</span>
          <button className='product_button'>add to cart</button>
          </div>
          </div>)}
        </div>
        

    </>)

}