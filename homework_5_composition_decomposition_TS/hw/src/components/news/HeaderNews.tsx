import React from 'react';

interface Props{
    title:string;
    date:string
}

const HeaderNews = ({title,date}:Props) => {

    return (
        <>
            <div className='headerNews_wrapper'>
                <div className='title_wrapper'>
                    <div className='title_now'>Сейчас в СМИ</div>
                    <div className='tittle_to'>в {title} Рекомендуем</div>
                </div>
                <div>
                    {date}
                </div>
            </div>
        </>
    )
}

export default HeaderNews;