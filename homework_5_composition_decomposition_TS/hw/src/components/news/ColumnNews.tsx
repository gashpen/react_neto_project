import React from 'react';

interface Props{
    news:{news:Array<string>}
}
const ColumnNews = ({news}:Props) => {

    return (
        <>
            <div>
            {news.news.map((elem)=>{
                
                return(
                    <div className='columnNews_wrapper'>
                        <div className='news_desc'>{elem}</div>
                    </div>        
                ) 
            })}
            </div>
        </>
    )
}

export default ColumnNews;