import cardArr from './CardArray'
import './App.css'
import { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio(){

    const [filterCard, newFilterCard] = useState(Toolbar.selected);
    const [card, newCard] = useState(ProjectList.filterCards)

    const onSelectFilter = (e) => {
        let selectButton = e.target.textContent;
        newFilterCard(selectButton);

        if(e.target.closest('.button_all')){
            newCard(cardArr.map((elem)=> elem))
        }
        if(e.target.closest('.button_websites')){
            newCard(cardArr.map((elem)=> elem.category === "Websites" ? elem : false))
        }
        if(e.target.closest('.button_flayers')){
            newCard(cardArr.map((elem)=> elem.category === "Flayers" ? elem : false))
        }
        if(e.target.closest('.button_business')){
            newCard(cardArr.map((elem)=> elem.category === "Business Cards" ? elem : false))
        }
    }
        return (
            <>  
                <div className='button__wrapper'>
                    <Toolbar
                        filters = {["All", "Websites", "Flayers", "Business Cards"]}
                        selected= {filterCard}
                        onSelectFilter = {onSelectFilter}
                    />
                </div>
                <div className='card_wrapper'>
                    {(filterCard === undefined) ? cardArr.map((elem,index)=><img key={index} src={elem.img}/>) : <ProjectList filterCards = {card}/>}
                </div>
            </>
        )
}

export default Portfolio;

    