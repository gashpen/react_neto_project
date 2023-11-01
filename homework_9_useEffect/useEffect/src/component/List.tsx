import {useEffect, useState} from 'react'
import Details from './Details'
import Option from './TStypeOption';
function List() {

    const [card,setCard] = useState([])
    const [items,setItems] = useState<Option>({id:0,name:''})
    const isSelect = items.id;
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then((response) => response.json())
        .then((data) => setCard(data))
    },[items])

    const handlerChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
        const info = {
            id:event.target.selectedIndex + 1,
            name:event.target.value
        }
        setItems(info)
    }
    
    return ( 
        <>
            {isSelect=== 0?false: <Details info={items}/> }
            <div className="select_wrapper">
                <select onChange={(event)=>{handlerChange(event)}} className="select w-full max-w-xs">
                    {card?.map((elem:Option)=>
                        <option key={elem.id}>{elem.name}</option>
                    )}
                </select>
            </div> 
        </>
    );
}

export default List;