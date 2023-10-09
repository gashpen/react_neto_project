import React from 'react';

interface Props {
    children?: React.ReactNode;
    img: string;
    text: string;
}

const Articles = ({img,text}:Props) => {

    return (
        <> 
            <div className='article_wrapper'>
                <img className='cats_image' src={img}/>
                <h2>{text}</h2>
            </div>
        </>
    )
}

export default Articles;