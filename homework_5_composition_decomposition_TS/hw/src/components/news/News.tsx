import React from 'react';
import HeaderNews from './HeaderNews';
import ColumnNews from './ColumnNews';
import ExchangeRates from './ExchangeRates';
import Articles from './Articles';
import moment from 'moment';
import { image,arr,exchange } from '../../links/links';

interface Props{
    img?:string;
    children?: React.ReactNode;
    title:string;
}

const News: React.FC<Props> = ({title}:{title:string}) => {
    
    return (
        <>  
            <header className='header'>
                <div className='news'>
                    <HeaderNews date={moment().format('LTS')} title={title}/>
                    <ColumnNews news={arr}/>
                    <ExchangeRates exchange={exchange}/>
                </div>
                <Articles img={image} text={'Салам Аллейкум'}/>
            </header>
        </>
    )
}

export default News;