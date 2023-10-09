import React from 'react';

interface Props {
    children?: React.ReactNode;
    exchange:{currency:number,currencyName:string}
}

const ExchangeRates = ({exchange}:Props) => {

    return (
        <>
            <div className='exchange_wrapper'>
                <div className='currency_name'>{exchange.currencyName}</div>
                <div className='currency_value'>{exchange.currency}</div>
            </div>
        </>
    )
}

export default ExchangeRates;